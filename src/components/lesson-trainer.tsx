"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { button, card, cx, reveal, text } from "@/lib/ui-classes";

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
  /** Смысл, типичные ситуации, отличие от близких синонимов — из `Concept.senseNote`. */
  senseNote?: string | null;
  /** Заметка по диалектной форме / этимологии — из `DialectForm.notes`. */
  dialectNote?: string | null;
};

const REGISTER_LABEL: Record<Variant["register"], string> = {
  COLLOQUIAL: "разг.",
  LITERARY: "книж."
};

const trainerShellClass = "grid gap-[18px] pb-12 max-[600px]:gap-3.5 max-[600px]:pb-10";
const progressClass =
  "flex flex-col items-start gap-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute max-[600px]:w-full max-[600px]:items-stretch max-[380px]:gap-1 max-[380px]:text-[9px] max-[380px]:tracking-[0.12em]";
const progressBarClass = "h-1 w-[200px] overflow-hidden rounded-pill bg-[rgba(26,20,12,0.12)] max-[600px]:w-full";
const iconButtonClass =
  "grid size-12 cursor-pointer place-items-center rounded-full border border-[rgba(26,20,12,0.18)] bg-cream text-ink transition-[background,color,border-color,transform] hover:border-ink hover:bg-ink hover:text-cream active:scale-95 disabled:cursor-not-allowed disabled:opacity-40 max-[520px]:size-11 max-[380px]:size-[42px]";
const flashcardFaceClass =
  "flashcard-face relative col-start-1 row-start-1 flex w-full min-w-0 flex-col items-center justify-start overflow-hidden rounded-[26px] px-8 pb-8 pt-10 shadow-page [backface-visibility:hidden] max-[600px]:rounded-[20px] max-[600px]:px-3.5 max-[600px]:pb-4 max-[600px]:pt-7 max-[380px]:rounded-[18px] max-[380px]:px-3 max-[380px]:pb-3.5 max-[380px]:pt-[26px]";

function LearningContextBlock({
  senseNote,
  dialectNote,
  variant
}: {
  senseNote?: string | null;
  dialectNote?: string | null;
  variant: "flashcard" | "quiz";
}) {
  const s = senseNote?.trim() || "";
  const d = dialectNote?.trim() || "";
  if (!s && !d) return null;
  const primary = s || d;
  const dialectExtra = s && d && d !== s ? d : "";
  const kicker = s ? "контекст" : "подсказка";

  if (variant === "quiz") {
    return (
      <div className="mx-auto mt-3 max-h-24 max-w-[420px] overflow-y-auto px-2 overscroll-contain">
        <p className="m-0 text-center text-[13px] leading-[1.45] text-ink-soft max-[380px]:text-xs">{primary}</p>
        {dialectExtra ? <p className="mt-1.5 text-center text-[11px] leading-[1.4] text-ink-mute">{dialectExtra}</p> : null}
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2">
      <div className="w-full shrink-0 rounded-[14px] border border-cream/15 bg-cream/10 px-3.5 py-2.5 text-center">
        <div className="mb-1.5 font-mono text-[9px] uppercase tracking-[0.18em] text-saffron-soft opacity-90">{kicker}</div>
        <p className="m-0 text-sm leading-[1.45] text-cream/90 max-[600px]:text-[13px] max-[380px]:text-xs">{primary}</p>
      </div>
      {dialectExtra ? <p className="m-0 px-2 text-center text-xs leading-[1.4] text-cream/50">{dialectExtra}</p> : null}
    </div>
  );
}

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
  const lessonTouchSentRef = useRef(false);

  const touchLessonOnce = useCallback(() => {
    if (lessonTouchSentRef.current) return;
    if (lessonId.startsWith("__")) return;
    lessonTouchSentRef.current = true;
    void fetch(`/api/lesson/${lessonId}/start`, { method: "POST" }).catch(() => {});
  }, [lessonId]);

  const setFlippedWithEngagement = useCallback(
    (updater: boolean | ((prev: boolean) => boolean)) => {
      setFlipped((prev) => {
        const next = typeof updater === "function" ? (updater as (p: boolean) => boolean)(prev) : updater;
        if (next && !prev) touchLessonOnce();
        return next;
      });
    },
    [touchLessonOnce]
  );

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
        setFlippedWithEngagement((f) => !f);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [stage, navigateCard, setFlippedWithEngagement]);

  useEffect(() => {
    return () => {
      if (flipTimer.current) clearTimeout(flipTimer.current);
    };
  }, []);

  function pickOption(option: string) {
    if (locked || !currentQuiz) return;
    touchLessonOnce();
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
      <div className={card.panel}>
        <p className={text.body}>Для этого урока ещё нет слов.</p>
      </div>
    );
  }

  if (stage === "complete") {
    const result = Math.round((score / words.length) * 100);
    const radius = 70;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (result / 100) * circumference;

    return (
      <div className={cx("relative grid gap-[18px] overflow-hidden rounded-card bg-cream px-9 py-12 text-center shadow-page before:pointer-events-none before:absolute before:left-1/2 before:top-[-120px] before:size-[460px] before:-translate-x-1/2 before:bg-[radial-gradient(circle,rgba(212,147,58,0.22),transparent_60%)] [&>*]:relative [&>*]:z-[2] max-[600px]:px-[18px] max-[600px]:py-8 max-[380px]:gap-3.5 max-[380px]:px-3.5 max-[380px]:py-[22px]", reveal.base)}>
        <p className={text.kicker}>
          ✦ {completeKicker ?? "урок завершён"}
        </p>
        <h2 className="m-0 font-display text-[clamp(36px,5vw,52px)] font-normal tracking-[-0.02em]">
          {result === 100
            ? "Безупречно."
            : result >= 70
              ? <>Хорошая <em className="italic text-madder">работа</em>.</>
              : <>Ещё чуть-чуть, <em className="italic text-madder">и получится</em>.</>}
        </h2>

        <div className="mx-auto size-[180px] max-[600px]:size-[140px] max-[380px]:size-[124px]" aria-label={`Результат ${result} процентов`}>
          <svg className="size-[180px] max-[600px]:size-[140px] max-[380px]:size-[124px]" viewBox="0 0 160 160" width="180" height="180">
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
              className="transition-[stroke-dashoffset] duration-[1200ms]"
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

        <p className="m-0 text-[15px] text-ink-soft">
          Правильно: {score} из {words.length}.
        </p>

        {mistakes.length ? (
          <>
            <p className={cx(text.kicker, "mt-2.5 text-madder-deep")}>
              ✦ слова на повторение
            </p>
            <div className="mt-2 flex flex-wrap justify-center gap-2">
              {mistakes.map((w, i) => (
                <span key={`${w}-${i}`} className="rounded-pill bg-[rgba(169,52,40,0.10)] px-3.5 py-2 font-display text-lg italic text-madder-deep max-[380px]:text-base">
                  {w}
                </span>
              ))}
            </div>
          </>
        ) : null}

        {saveError ? (
          <div className="mt-3.5 grid justify-items-center gap-2.5 rounded-md border border-dashed border-[rgba(169,52,40,0.4)] bg-[rgba(169,52,40,0.08)] px-[18px] py-4 text-center" role="alert">
            <p className={cx(text.kicker, "m-0 text-madder-deep")}>✦ результат не сохранён</p>
            <p className="m-0 max-w-[480px] text-sm leading-normal text-ink-soft">
              Не удалось записать прогресс на сервер. Проверьте соединение и
              попробуйте ещё раз — иначе урок будет считаться непройденным.
            </p>
            <button
              type="button"
              className={button.ink}
              onClick={retrySave}
              disabled={saving}
            >
              {saving ? "Сохраняем…" : "Повторить отправку"}
            </button>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap justify-center gap-3 max-[380px]:[&_.btn]:w-full">
          {nextLessonId ? (
            <Link href={`/lesson/${nextLessonId}`} className={button.ink}>
              Следующий урок →
            </Link>
          ) : (
            <Link href="/dashboard" className={button.ink}>
              К программе курса →
            </Link>
          )}
          {nextLessonId ? (
            <Link href="/dashboard" className={button.ghost}>
              К программе курса
            </Link>
          ) : null}
          <button
            type="button"
            className={button.ghost}
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
      <div className={trainerShellClass}>
        <div className={progressClass}>
          <span>
            Карточка {cardIndex + 1} / {words.length}
          </span>
          <div className={progressBarClass}>
            <div className="h-full bg-ink transition-[width] duration-500" style={{ width: `${((cardIndex + 1) / words.length) * 100}%` }} />
          </div>
        </div>

        <div className="grid place-items-center py-3.5 [perspective:1600px] max-[600px]:py-1">
          <div
            className={cx(
              "flashcard grid w-[min(560px,100%)] grid-cols-[min(560px,100%)] [--fc-romani-fs:clamp(28px,4.5vw,46px)] [--fc-ru-fs:clamp(22px,3.8vw,36px)] [--flashcard-h:max(232px,min(312px,calc(100dvh_-_320px)))] min-h-[var(--flashcard-h)] cursor-pointer touch-manipulation [transform-style:preserve-3d] transition-transform duration-700 [transition-timing-function:cubic-bezier(0.4,0,0.2,1)] [-webkit-tap-highlight-color:transparent] max-[600px]:[--fc-romani-fs:clamp(26px,6.2vw,40px)] max-[600px]:[--fc-ru-fs:clamp(20px,5.2vw,32px)] max-[600px]:[--flashcard-h:max(216px,min(288px,calc(100dvh_-_236px)))] max-[380px]:[--fc-romani-fs:clamp(24px,7vw,36px)] max-[380px]:[--fc-ru-fs:clamp(19px,6vw,30px)]",
              flipped && "flipped"
            )}
            role="button"
            tabIndex={0}
            aria-label="Перевернуть карточку"
            onClick={() => setFlippedWithEngagement((f) => !f)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                setFlippedWithEngagement((f) => !f);
              }
            }}
          >
            <div className={cx(flashcardFaceClass, "bg-cream text-ink after:pointer-events-none after:absolute after:-bottom-20 after:-left-20 after:size-[220px] after:bg-[radial-gradient(circle,rgba(212,147,58,0.30),transparent_65%)]")}>
              <span className="absolute right-[22px] top-[18px] font-mono text-[11px] uppercase tracking-[0.18em] opacity-50 max-[600px]:right-4 max-[600px]:top-3.5 max-[600px]:text-[9px] max-[600px]:tracking-[0.14em]">romani · {cardIndex + 1}</span>
              <div className="relative z-[1] flex min-h-0 w-full flex-1 flex-col items-center justify-center gap-2.5 pt-0.5">
                <div className="m-0 max-w-full break-words text-center font-display text-[var(--fc-romani-fs)] italic leading-[1.08]">{currentCard.romaniWord}</div>
                <div className="text-center font-mono text-sm tracking-[0.12em] text-ink-mute max-[600px]:text-xs max-[600px]:tracking-[0.08em] max-[380px]:text-[11px]">[ {currentCard.transcription} ]</div>
                {currentCard.variants && currentCard.variants.length > 0 ? (
                  <div className="mt-2.5 flex w-full max-w-full flex-col items-center gap-2 border-t border-dashed border-[rgba(26,20,12,0.16)] pt-2.5 max-[600px]:mt-2 max-[600px]:gap-1.5 max-[600px]:pt-2">
                    {currentCard.variants.map((v) => (
                      <div key={v.romaniWord} className="inline-flex flex-wrap items-baseline justify-center gap-2 font-mono text-xs text-ink-soft max-[600px]:gap-1.5 max-[600px]:text-[10px] max-[600px]:leading-[1.3]">
                        <span className="inline-block rounded-pill border border-[rgba(26,20,12,0.22)] px-1.5 py-px font-mono text-[9px] uppercase tracking-[0.16em] text-ink-mute max-[600px]:text-[8px] max-[600px]:tracking-[0.12em]">{REGISTER_LABEL[v.register]}</span>
                        <span className="font-display text-xl italic text-ink max-[600px]:text-[16px]">{v.romaniWord}</span>
                        <span className="tracking-[0.10em] text-ink-mute max-[600px]:tracking-[0.06em]">[ {v.transcription} ]</span>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
            <div className={cx(flashcardFaceClass, "flashcard-back bg-ink text-cream [transform:rotateY(180deg)] after:pointer-events-none after:absolute after:-right-20 after:-top-20 after:size-60 after:bg-[radial-gradient(circle,rgba(169,52,40,0.4),transparent_60%)]")}>
              <span className="absolute right-[22px] top-[18px] font-mono text-[11px] uppercase tracking-[0.18em] text-cream/70 opacity-70 max-[600px]:right-4 max-[600px]:top-3.5 max-[600px]:text-[9px] max-[600px]:tracking-[0.14em]">
                перевод
              </span>
              <div className="flashcard-back-stack relative z-[1] flex min-h-0 w-full flex-1 flex-col items-center justify-between gap-3">
                <div className="flex w-full shrink-0 flex-col items-center">
                  <div className="m-0 max-w-full break-words text-center font-display text-[var(--fc-ru-fs)] font-normal leading-[1.12] text-cream">{currentCard.translationRu}</div>
                </div>
                <div className="flashcard-context-slot flex w-full shrink-0 flex-col items-center justify-center">
                  <LearningContextBlock
                    senseNote={currentCard.senseNote}
                    dialectNote={currentCard.dialectNote}
                    variant="flashcard"
                  />
                </div>
                <div className="flex w-full shrink-0 flex-col items-center">
                  <div className="text-center font-mono text-sm tracking-[0.12em] text-cream/55 max-[600px]:text-xs max-[600px]:tracking-[0.08em] max-[380px]:text-[11px]">{currentCard.romaniWord}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("flashcard-nav mt-1 grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 max-[520px]:gap-1.5", cardIndex + 1 >= words.length && "is-final")}>
          <button
            className={iconButtonClass}
            type="button"
            aria-label="Предыдущая карточка"
            onClick={() => navigateCard(-1)}
            disabled={cardIndex === 0}
          >
            ←
          </button>
          <span className="min-w-0 break-words text-center font-mono text-xs uppercase tracking-[0.18em] text-ink-mute hyphens-auto max-[520px]:text-[8px] max-[520px]:leading-[1.3] max-[520px]:tracking-[0.1em]">
            <span className="flashcard-hint-full">
              нажмите карточку или <kbd className="font-mono">пробел</kbd>, чтобы
              перевернуть
            </span>
            <span className="flashcard-hint-short">касание или тап — перевернуть</span>
          </span>
          {cardIndex + 1 < words.length ? (
            <button
              className={iconButtonClass}
              type="button"
              aria-label="Следующая карточка"
              onClick={() => navigateCard(1)}
            >
              →
            </button>
          ) : (
            <button
              className={cx(
                button.madder,
                "flashcard-check-btn h-12 w-auto max-w-full shrink-0 !min-h-0 !px-5 !py-0 text-sm leading-tight transition-[background-color,box-shadow,color,border-color] duration-150 hover:!translate-y-0 enabled:hover:!translate-y-0 active:!translate-y-0 active:!scale-100 max-[520px]:min-h-11 max-[520px]:h-auto max-[520px]:!px-3 max-[520px]:!py-2.5 max-[520px]:whitespace-normal max-[520px]:text-center max-[520px]:text-[13px] max-[380px]:min-h-[42px]"
              )}
              type="button"
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
          className={cx(card.ticket, "mx-auto mt-1 max-w-[560px] px-2 py-6 text-center max-[600px]:hidden")}
        >
          <p className={cx(text.kicker, "mb-1 text-saffron-deep")}>
            ✦ совет
          </p>
          <p className={text.bodySm}>
            Произнесите слово вслух, прежде чем переворачивать карточку — так оно лучше запомнится.
          </p>
        </div>
      </div>
    );
  }

  // QUIZ stage
  return (
    <div className={trainerShellClass}>
      <div className={progressClass}>
        <span>
          Вопрос {quizIndex + 1} / {quizOrder.length}
        </span>
        <div className={progressBarClass}>
          <div className="h-full bg-ink transition-[width] duration-500" style={{ width: `${((quizIndex + 1) / quizOrder.length) * 100}%` }} />
        </div>
      </div>

        <div className={cx("grid gap-6 rounded-card bg-cream p-9 shadow-page max-[600px]:gap-[18px] max-[600px]:px-4 max-[600px]:py-5 max-[380px]:gap-3.5 max-[380px]:px-3 max-[380px]:py-4", reveal.base)}>
        <div className="grid gap-2.5 text-center max-[380px]:gap-1.5">
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-mute">переведите слово</p>
          <p className="font-display text-[clamp(48px,6vw,84px)] italic leading-none tracking-[-0.015em] max-[600px]:text-[clamp(36px,11vw,56px)] max-[600px]:leading-[1.05] max-[380px]:text-[clamp(32px,10vw,48px)]">{currentQuiz?.romaniWord}</p>
          <p className="font-mono text-sm tracking-[0.1em] text-ink-mute max-[600px]:text-xs max-[600px]:tracking-[0.08em]">[ {currentQuiz?.transcription} ]</p>
          {/* В квизе не показываем контекстные заметки, чтобы не подсказывать ответ. */}
        </div>

        <div className="grid grid-cols-2 gap-3 max-[600px]:grid-cols-1" role="radiogroup" aria-label="Варианты перевода">
          {options.map((option, i) => {
            const isCorrect = locked && option === currentQuiz?.translationRu;
            const isWrong = locked && option === selected && option !== currentQuiz?.translationRu;
            return (
              <button
                key={option}
                type="button"
                className={cx(
                  "group grid cursor-pointer grid-cols-[28px_1fr] items-center gap-3.5 rounded-2xl border-[1.5px] border-transparent bg-paper-warm px-5 py-[22px] text-left font-display text-[22px] font-medium text-ink transition-[transform,border-color,background] hover:-translate-y-0.5 hover:border-ink disabled:cursor-default max-[600px]:min-h-14 max-[600px]:px-3 max-[600px]:py-3.5 max-[600px]:text-[clamp(17px,5vw,20px)]",
                  isCorrect && "border-teal bg-[rgba(37,86,79,0.15)]",
                  isWrong && "border-madder bg-[rgba(169,52,40,0.12)]"
                )}
                onClick={() => pickOption(option)}
                disabled={locked}
              >
                <span className="grid size-7 place-items-center rounded-lg border border-[rgba(26,20,12,0.16)] bg-cream font-mono text-xs font-semibold text-ink-soft transition-colors group-hover:bg-ink group-hover:text-cream">{String.fromCharCode(65 + i)}</span>
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        <div className="flex items-center justify-between border-t border-dashed border-[rgba(26,20,12,0.18)] pt-1 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-mute max-[380px]:gap-2.5 max-[380px]:text-[9px] max-[380px]:tracking-[0.11em]">
          <span>
            правильно: <strong className="text-teal-deep">{score}</strong>
          </span>
          <span>
            ошибок: <strong className="text-madder">{mistakes.length}</strong>
          </span>
        </div>
      </div>
    </div>
  );
}
