import Link from "next/link";
import { redirect } from "next/navigation";
import { LessonTrainer } from "@/components/lesson-trainer";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { defaultDialect, dialectByCode } from "@/lib/dialects";
import { button, card, cx, layout, reveal, tag, text } from "@/lib/ui-classes";

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
    transcription: f.transcription,
    senseNote: f.concept.senseNote,
    dialectNote: f.notes
  }));

  return (
    <>
      <SiteNav variant="app" authed />

      <main className={cx(layout.shell, "pb-[60px] max-[600px]:w-[calc(100%_-_24px)] max-[600px]:pb-[calc(24px_+_var(--safe-bottom))] max-[380px]:w-[calc(100%_-_20px)]")}>
        <div className="pt-7 max-[600px]:pt-3.5 max-[380px]:pt-2.5">
          <Link href="/dashboard" className={cx("inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.14em] text-ink-soft transition-[color,gap] hover:gap-3 hover:text-madder max-[600px]:text-[10px] max-[600px]:tracking-[0.1em]", reveal[1])}>
            ← Назад к программе
          </Link>
        </div>

        <header className={cx("grid grid-cols-[1fr_auto] items-end gap-[18px] pb-7 pt-[18px] max-[640px]:grid-cols-1 max-[640px]:items-start max-[640px]:gap-3 max-[600px]:gap-2 max-[600px]:pb-4 max-[600px]:pt-3 max-[380px]:pb-3 max-[380px]:pt-2", reveal[2])}>
          <div>
            <p className={text.kicker}>{dialect.shortLabel} · повторение</p>
            <h1 className="mt-2 font-display text-[clamp(36px,5vw,56px)] font-normal leading-none tracking-[-0.02em] max-[600px]:mt-1 max-[600px]:text-[clamp(28px,8.5vw,38px)] max-[380px]:text-[clamp(26px,8vw,34px)]">
              Слова, которые{" "}
              <em className="italic text-madder">не дались</em>{" "}
              в прошлый раз
            </h1>
          </div>
          <span
            className={cx(tag.madder, "self-center max-[640px]:self-start max-[600px]:px-[9px] max-[600px]:py-1 max-[600px]:text-[9px]")}
          >
            мини-квиз
          </span>
        </header>

        {words.length === 0 ? (
          <div className={cx(card.panel, "bg-paper-panel px-9 py-12 text-center max-[600px]:px-[18px] max-[600px]:py-8")}>
            <p className={cx(text.kicker, "text-teal-deep")}>
              ✦ всё чисто
            </p>
            <h2 className="mb-2.5 mt-3 font-display text-[clamp(28px,4vw,40px)] font-normal">
              Сейчас слов на повторение нет.
            </h2>
            <p className={cx(text.bodySm, "mx-auto mb-6 max-w-[460px]")}>
              Пройдите ещё несколько уроков — те слова, в которых вы ошибётесь,
              автоматически попадут сюда.
            </p>
            <Link href="/dashboard" className={button.ink}>
              К программе курса →
            </Link>
          </div>
        ) : (
          <div className={reveal[3]}>
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
