"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";

const FLIP_DURATION_MS = 700;

type Variant = {
  romaniWord: string;
  transcription: string;
  register: "COLLOQUIAL" | "LITERARY";
};

type WordItem = {
  id: string;
  romaniWord: string;
  translationRu: string;
  transcription: string;
  variants?: Variant[];
};

const REGISTER_LABEL: Record<Variant["register"], string> = {
  COLLOQUIAL: "разг.",
  LITERARY: "книж."
};

type Mode = "FLASHCARDS" | "QUIZ";

type Props = {
  lessonId: string;
  lessonType: Mode;
  words: WordItem[];
  // Override the POST endpoint used when finishing the lesson. Defaults to
  // the per-lesson progress endpoint; the mistakes-review page passes its
  // own endpoint that prunes the user's mistakes pool instead.
  completeEndpoint?: string;
  // Localised heading shown on the completion screen. Useful for synthetic
  // lessons (e.g. mistakes review) where "урок завершён" doesn't fit.
  completeKicker?: string;
  // Resolved server-side: id of the next lesson in the course (or first of
  // next module). Null when this is the last lesson — completion screen
  // falls back to "К программе курса".
  nextLessonId?: string | null;
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function LessonTrainer({
  lessonId,
  lessonType,
  words,
  completeEndpoint,
  completeKicker,
  nextLessonId
}: Props) {
  const [stage, setStage] = useState<"flashcards" | "quiz" | "complete">(
    lessonType === "QUIZ" ? "quiz" : "flashcards"
  );

  const [cardIndex, setCardIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const flipTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [quizOrder, setQuizOrder] = useState<WordItem[]>(() => shuffle(words));
  const [quizIndex, setQuizIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [locked, setLocked] = useState(false);
  const [saveError, setSaveError] = useState<{
    score: number;
    mistakes: string[];
  } | null>(null);
  const [saving, setSaving] = useState(false);

  const currentCard = words[cardIndex];
  const currentQuiz = quizOrder[quizIndex];

  const options = useMemo(() => {
    if (!currentQuiz) return [] as string[];
    // Dedupe distractors by translation text — multiple words in a lesson can
    // share the same Russian gloss (e.g. several greetings → "добрый день").
    // Without this, the correct answer can appear multiple times as A/B/D.
    const seen = new Set<string>([currentQuiz.translationRu]);
    const distractors: string[] = [];
    for (const w of words) {
      if (w.id === currentQuiz.id) continue;
      if (seen.has(w.translationRu)) continue;
      seen.add(w.translationRu);
      distractors.push(w.translationRu);
    }
    const picks = shuffle(distractors).slice(0, Math.min(3, distractors.length));
    return shuffle([...picks, currentQuiz.translationRu]);
  }, [currentQuiz, words]);

  const finish = async (finalScore: number, finalMistakes: string[]) => {
    const resultScore = Math.round((finalScore / Math.max(words.length, 1)) * 100);
    const endpoint = completeEndpoint ?? `/api/lesson/${lessonId}/complete`;
    setSaving(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          score: resultScore,
          mistakes: finalMistakes,
          // Sent unconditionally; per-lesson endpoint ignores it. Mistakes-
          // review endpoint diffs against `mistakes` to know which words
          // were answered correctly and can be pruned from the pool.
          allWords: words.map((w) => w.romaniWord)
        })
      });
      if (!res.ok) throw new Error(`save failed: ${res.status}`);
      setSaveError(null);
    } catch {
      setSaveError({ score: finalScore, mistakes: finalMistakes });
    } finally {
      setSaving(false);
      setStage("complete");
    }
  };

  const retrySave = () => {
    if (!saveError) return;
    void finish(saveError.score, saveError.mistakes);
  };

  const navigateCard = useCallback(
    (delta: number) => {
      setCardIndex((current) => {
        const target = Math.max(0, Math.min(words.length - 1, current + delta));
        if (target === current) return current;
        if (flipTimer.current) {
          clearTimeout(flipTimer.current);
          flipTimer.current = null;
        }
        // If the card is showing the back, wait for the flip-back animation to
        // pass the edge-on midpoint before swapping content — otherwise the
        // next card's translation flashes on the still-rotated back face.
        if (flipped) {
          setFlipped(false);
          flipTimer.current = setTimeout(() => {
            setCardIndex(target);
            flipTimer.current = null;
          }, FLIP_DURATION_MS / 2);
          return current;
        }
        return target;
      });
    },
    [flipped, words.length]
  );

  // Keyboard navigation for flashcards
  useEffect(() => {
    if (stage !== "flashcards") return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight") navigateCard(1);
      if (e.key === "ArrowLeft") navigateCard(-1);
      if (e.code === "Space") {
        e.preventDefault();
        setFlipped((f) => !f);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stage, navigateCard]);

  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  function pickOption(option: string) {
    if (locked || !currentQuiz) return;
    const isCorrect = option === currentQuiz.translationRu;
    setSelected(option);
    setLocked(true);

    const nextScore = isCorrect ? score + 1 : score;
    const nextMistakes = isCorrect ? mistakes : [...mistakes, currentQuiz.romaniWord];
    if (isCorrect) setScore(nextScore);
    else setMistakes(nextMistakes);

    setTimeout(() => {
      if (quizIndex + 1 >= quizOrder.length) {
        void finish(nextScore, nextMistakes);
        return;
      }
      setQuizIndex((i) => i + 1);
      setSelected(null);
      setLocked(false);
    }, 950);
  }

  if (!words.length) {
    return (
      <div className="panel">
        <p style={{ margin: 0 }}>Для этого урока ещё нет слов.</p>
      </div>
    );
  }

  if (stage === "complete") {
    const result = Math.round((score / words.length) * 100);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (result / 100) * circumference;

    return (
      <div className="complete-card reveal">
        <p className="kicker complete-kicker">
          ✦ {completeKicker ?? "урок завершён"}
        </p>
        <h2>
          {result === 100
            ? "Безупречно."
            : result >= 70
              ? <>Хорошая <em>работа</em>.</>
              : <>Ещё чуть-чуть, <em>и получится</em>.</>}
        </h2>

        <div className="score-ring" aria-label={`Результат ${result} процентов`}>
          <svg viewBox="0 0 160 160" width="180" height="180">
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="rgba(26, 20, 12, 0.10)"
              strokeWidth="8"
            />
            <circle
              cx="80"
              cy="80"
              r={radius}
              fill="none"
              stroke="var(--madder)"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
              transform="rotate(-90 80 80)"
              className="score-ring-fill"
            />
            <text
              x="80"
              y="78"
              textAnchor="middle"
              fontFamily="var(--font-display)"
              fontSize="44"
              fontStyle="italic"
              fill="var(--ink)"
            >
              {result}
            </text>
            <text
              x="80"
              y="100"
              textAnchor="middle"
              fontFamily="var(--font-mono)"
              fontSize="10"
              letterSpacing="0.18em"
              fill="var(--ink-mute)"
            >
              ИЗ 100
            </text>
          </svg>
        </div>

        <p className="complete-summary">
          Правильно: {score} из {words.length}.
        </p>

        {mistakes.length ? (
          <>
            <p className="kicker complete-mistakes-kicker">
              ✦ слова на повторение
            </p>
            <div className="review">
              {mistakes.map((w, i) => (
                <span key={`${w}-${i}`} className="word-pill">
                  {w}
                </span>
              ))}
            </div>
          </>
        ) : null}

        {saveError ? (
          <div className="save-error" role="alert">
            <p className="kicker">✦ результат не сохранён</p>
            <p>
              Не удалось записать прогресс на сервер. Проверьте соединение и
              попробуйте ещё раз — иначе урок будет считаться непройденным.
            </p>
            <button
              type="button"
              className="btn btn-ink"
              onClick={retrySave}
              disabled={saving}
            >
              {saving ? "Сохраняем…" : "Повторить отправку"}
            </button>
          </div>
        ) : null}

        <div className="complete-actions">
          {nextLessonId ? (
            <Link href={`/lesson/${nextLessonId}`} className="btn btn-ink">
              Следующий урок →
            </Link>
          ) : (
            <Link href="/dashboard" className="btn btn-ink">
              К программе курса →
            </Link>
          )}
          {nextLessonId ? (
            <Link href="/dashboard" className="btn btn-ghost">
              К программе курса
            </Link>
          ) : null}
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setStage(lessonType === "QUIZ" ? "quiz" : "flashcards");
              setCardIndex(0);
              setQuizIndex(0);
              setQuizOrder(shuffle(words));
              setScore(0);
              setMistakes([]);
              setSelected(null);
              setLocked(false);
              setSaveError(null);
            }}
          >
            Пройти ещё раз
          </button>
        </div>
      </div>
    );
  }

  if (stage === "flashcards") {
    return (
      <div className="lesson-shell" style={{ padding: 0 }}>
        <div className="trainer-progress" style={{ alignItems: "flex-start" }}>
          <span>
            Карточка {cardIndex + 1} / {words.length}
          </span>
          <div className="bar">
            <div style={{ width: `${((cardIndex + 1) / words.length) * 100}%` }} />
          </div>
        </div>

        <div className="flashcard-stage">
          <div
            className={`flashcard ${flipped ? "flipped" : ""}`}
            role="button"
            tabIndex={0}
            aria-label="Перевернуть карточку"
            onClick={() => setFlipped((f) => !f)}
            onKeyDown={(e) => {
              if (e.key === "Enter") setFlipped((f) => !f);
            }}
          >
            <div className="flashcard-face flashcard-front">
              <span className="corner">romani · {cardIndex + 1}</span>
              <div />
              <div className="romani">{currentCard.romaniWord}</div>
              <div className="transcription">[ {currentCard.transcription} ]</div>
              {currentCard.variants && currentCard.variants.length > 0 ? (
                <div className="flashcard-variants">
                  {currentCard.variants.map((v) => (
                    <div key={v.romaniWord} className="flashcard-variant">
                      <span className="register-badge">{REGISTER_LABEL[v.register]}</span>
                      <span className="variant-word">{v.romaniWord}</span>
                      <span className="variant-transcription">[ {v.transcription} ]</span>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
            <div className="flashcard-face flashcard-back">
              <span className="corner" style={{ color: "rgba(251,246,232,0.7)" }}>
                перевод
              </span>
              <div />
              <div className="ru-translation">{currentCard.translationRu}</div>
              <div className="transcription">{currentCard.romaniWord}</div>
            </div>
          </div>
        </div>

        <div className="flashcard-nav">
          <button
            className="icon-btn"
            type="button"
            aria-label="Предыдущая карточка"
            onClick={() => navigateCard(-1)}
            disabled={cardIndex === 0}
          >
            ←
          </button>
          <span className="center">
            нажмите карточку или <kbd style={{ fontFamily: "var(--font-mono)" }}>пробел</kbd>, чтобы
            перевернуть
          </span>
          {cardIndex + 1 < words.length ? (
            <button
              className="icon-btn"
              type="button"
              aria-label="Следующая карточка"
              onClick={() => navigateCard(1)}
            >
              →
            </button>
          ) : (
            <button
              className="btn btn-madder"
              type="button"
              style={{ padding: "12px 18px" }}
              onClick={() => {
                if (flipTimer.current) {
                  clearTimeout(flipTimer.current);
                  flipTimer.current = null;
                }
                setFlipped(false);
                setStage("quiz");
                setQuizOrder(shuffle(words));
                setQuizIndex(0);
                setSelected(null);
                setLocked(false);
              }}
            >
              К проверке →
            </button>
          )}
        </div>

        <div
          className="ticket"
          style={{ maxWidth: 560, margin: "12px auto 0", textAlign: "center" }}
        >
          <p
            className="kicker"
            style={{ marginBottom: 4, color: "var(--saffron-deep)" }}
          >
            ✦ совет
          </p>
          <p style={{ margin: 0, fontSize: 14, color: "var(--ink-soft)" }}>
            Произнесите слово вслух, прежде чем переворачивать карточку — так оно лучше запомнится.
          </p>
        </div>
      </div>
    );
  }

  // QUIZ stage
  return (
    <div className="lesson-shell" style={{ padding: 0 }}>
      <div className="trainer-progress" style={{ alignItems: "flex-start" }}>
        <span>
          Вопрос {quizIndex + 1} / {quizOrder.length}
        </span>
        <div className="bar">
          <div style={{ width: `${((quizIndex + 1) / quizOrder.length) * 100}%` }} />
        </div>
      </div>

      <div className="quiz-card reveal">
        <div className="quiz-prompt">
          <p className="ask">переведите слово</p>
          <p className="word">{currentQuiz?.romaniWord}</p>
          <p className="transcription">[ {currentQuiz?.transcription} ]</p>
        </div>

        <div className="quiz-options" role="radiogroup" aria-label="Варианты перевода">
          {options.map((option, i) => {
            const isCorrect = locked && option === currentQuiz?.translationRu;
            const isWrong = locked && option === selected && option !== currentQuiz?.translationRu;
            const cls = [
              "quiz-option",
              isCorrect ? "correct" : "",
              isWrong ? "wrong" : ""
            ]
              .filter(Boolean)
              .join(" ");
            return (
              <button
                key={option}
                type="button"
                className={cls}
                onClick={() => pickOption(option)}
                disabled={locked}
              >
                <span className="key">{String.fromCharCode(65 + i)}</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 4,
            borderTop: "1px dashed rgba(26,20,12,0.18)",
            color: "var(--ink-mute)",
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: "0.16em",
            textTransform: "uppercase"
          }}
        >
          <span>
            правильно: <strong style={{ color: "var(--teal-deep)" }}>{score}</strong>
          </span>
          <span>
            ошибок: <strong style={{ color: "var(--madder)" }}>{mistakes.length}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
