import Link from "next/link";
import { redirect } from "next/navigation";
import { LessonTrainer } from "@/components/lesson-trainer";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { defaultDialect, dialectByCode } from "@/lib/dialects";

export const dynamic = "force-dynamic";

export default async function MistakesReviewPage() {
  const user = await getSessionUser();
  if (!user) redirect("/sign-in");

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
    select: { preferredDialect: true }
  });
  const dialectCode = dbUser?.preferredDialect ?? defaultDialect().code;
  const dialect = dialectByCode(dialectCode) ?? defaultDialect();

  // Aggregate every mistake across the user's progress for lessons in their
  // preferred dialect. Each entry is a `romaniWord` string the user got
  // wrong at some point and hasn't successfully recalled since.
  const progress = await db.lessonProgress.findMany({
    where: {
      userId: user.id,
      mistakes: { isEmpty: false },
      lesson: { module: { course: { dialect: dialectCode } } }
    },
    select: { mistakes: true }
  });
  const uniqueRomani = [...new Set(progress.flatMap((p) => p.mistakes))];

  // Resolve back to DialectForm rows so we can show transcription + literal
  // Russian translation. Some mistakes may no longer have a matching form
  // (e.g. lesson rewritten) — those silently drop out.
  const forms = uniqueRomani.length
    ? await db.dialectForm.findMany({
        where: {
          dialect: dialectCode,
          romaniWord: { in: uniqueRomani }
        },
        include: { concept: true }
      })
    : [];
  const words = forms.map((f) => ({
    id: f.id,
    romaniWord: f.romaniWord,
    translationRu: f.concept.translationRu,
    transcription: f.transcription
  }));

  return (
    <>
      <SiteNav variant="app" authed />

      <main className="shell" style={{ paddingBottom: 60 }}>
        <div style={{ paddingTop: 28 }}>
          <Link href="/dashboard" className="lesson-back reveal reveal-1">
            ← Назад к программе
          </Link>
        </div>

        <header
          className="trainer-head reveal reveal-2"
          style={{ paddingTop: 18, paddingBottom: 28 }}
        >
          <div>
            <p className="kicker">{dialect.shortLabel} · повторение</p>
            <h1 style={{ marginTop: 8 }}>
              Слова, которые{" "}
              <em>не дались</em>{" "}
              в прошлый раз
            </h1>
          </div>
          <span
            className="tag tag-madder"
            style={{ alignSelf: "center" }}
          >
            мини-квиз
          </span>
        </header>

        {words.length === 0 ? (
          <div
            className="panel"
            style={{
              padding: "48px 36px",
              textAlign: "center",
              background: "linear-gradient(160deg, var(--cream), var(--paper-warm))"
            }}
          >
            <p className="kicker" style={{ color: "var(--teal-deep)" }}>
              ✦ всё чисто
            </p>
            <h2
              style={{
                margin: "12px 0 10px",
                fontFamily: "var(--font-display)",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 400
              }}
            >
              Сейчас слов на повторение нет.
            </h2>
            <p style={{ margin: "0 auto 24px", color: "var(--ink-soft)", fontSize: 15, maxWidth: 460 }}>
              Пройдите ещё несколько уроков — те слова, в которых вы ошибётесь,
              автоматически попадут сюда.
            </p>
            <Link href="/dashboard" className="btn btn-ink">
              К программе курса →
            </Link>
          </div>
        ) : (
          <div className="reveal reveal-3">
            <LessonTrainer
              lessonId="__mistakes__"
              lessonType="QUIZ"
              words={words}
              completeEndpoint="/api/lesson/mistakes/complete"
              completeKicker="повторение завершено"
            />
          </div>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
