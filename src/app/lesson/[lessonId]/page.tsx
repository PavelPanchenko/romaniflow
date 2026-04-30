import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { LessonType } from "@prisma/client";
import { LessonTrainer } from "@/components/lesson-trainer";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { db } from "@/lib/db";
import { hasPremiumAccess } from "@/lib/monetization";
import { getSessionUser } from "@/lib/session";
import { cx, layout, reveal, tag, text } from "@/lib/ui-classes";

type Props = {
  params: Promise<{ lessonId: string }>;
};

async function findNextLessonId(current: {
  id: string;
  moduleId: string;
  order: number;
  type: LessonType;
}): Promise<string | null> {
  // FLASHCARDS auto-completes its paired QUIZ (order+1) on the server, so
  // skip it here; the user's actual next step is order+2 in the same
  // module. For a standalone QUIZ lesson the next step is just order+1.
  const offset = current.type === LessonType.FLASHCARDS ? 2 : 1;

  const same = await db.lesson.findUnique({
    where: {
      moduleId_order: { moduleId: current.moduleId, order: current.order + offset }
    },
    select: { id: true }
  });
  if (same) return same.id;

  // Fall through to the first lesson of the next module in this course.
  const mod = await db.module.findUnique({
    where: { id: current.moduleId },
    select: { courseId: true, order: true }
  });
  if (!mod) return null;

  const nextModule = await db.module.findFirst({
    where: { courseId: mod.courseId, order: { gt: mod.order } },
    orderBy: { order: "asc" },
    select: { id: true }
  });
  if (!nextModule) return null;

  const firstOfNext = await db.lesson.findFirst({
    where: { moduleId: nextModule.id },
    orderBy: { order: "asc" },
    select: { id: true }
  });
  return firstOfNext?.id ?? null;
}

export default async function LessonPage({ params }: Props) {
  const { lessonId } = await params;
  const user = await getSessionUser();
  if (!user) {
    redirect("/sign-in");
  }

  const lesson = await db.lesson.findUnique({
    where: { id: lessonId },
    include: {
      module: true,
      items: {
        orderBy: { position: "asc" },
        include: { dialectForm: true, concept: true }
      }
    }
  });

  if (!lesson) {
    notFound();
  }

  // A lesson without items is editorially incomplete — render 404 rather than
  // dropping the user into an empty trainer with a fallback panel.
  if (lesson.items.length === 0) {
    notFound();
  }

  const canAccessPremium = await hasPremiumAccess(user.id);
  if (lesson.isPremium && !canAccessPremium) {
    redirect("/pricing");
  }

  // Pull non-STANDARD variants (COLLOQUIAL / LITERARY) for the same concepts
  // in this lesson's dialect so the trainer can show them as a footnote on
  // the flashcard. Build-lessons keeps STANDARD-only in LessonItem rows; the
  // variants ride along here for display, not as separate cards.
  const dialect = lesson.items[0].dialectForm.dialect;
  const conceptIds = lesson.items.map((i) => i.conceptId);
  const variantRows = await db.dialectForm.findMany({
    where: {
      dialect,
      conceptId: { in: conceptIds },
      NOT: { register: "STANDARD" }
    },
    select: {
      conceptId: true,
      romaniWord: true,
      transcription: true,
      register: true
    }
  });
  const variantsByConcept = new Map<
    string,
    { romaniWord: string; transcription: string; register: "COLLOQUIAL" | "LITERARY" }[]
  >();
  for (const v of variantRows) {
    const list = variantsByConcept.get(v.conceptId) ?? [];
    list.push({
      romaniWord: v.romaniWord,
      transcription: v.transcription,
      register: v.register as "COLLOQUIAL" | "LITERARY"
    });
    variantsByConcept.set(v.conceptId, list);
  }

  const words = lesson.items.map((item) => ({
    id: item.dialectForm.id,
    romaniWord: item.dialectForm.romaniWord,
    translationRu: item.concept.translationRu,
    transcription: item.dialectForm.transcription,
    senseNote: item.concept.senseNote,
    dialectNote: item.dialectForm.notes,
    variants: variantsByConcept.get(item.conceptId) ?? []
  }));

  const nextLessonId = await findNextLessonId(lesson);

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
            <p className={text.kicker}>{lesson.module.title}</p>
            <h1 className="mt-2 font-display text-[clamp(36px,5vw,56px)] font-normal leading-none tracking-[-0.02em] max-[600px]:mt-1 max-[600px]:text-[clamp(28px,8.5vw,38px)] max-[380px]:text-[clamp(26px,8vw,34px)]">
              {lesson.title.split(":")[0]}
              {lesson.title.includes(":") ? (
                <>
                  :{" "}
                  <em className="italic text-madder">{lesson.title.split(":").slice(1).join(":").trim()}</em>
                </>
              ) : null}
            </h1>
          </div>
          <span
            className={cx(
              lesson.type === "FLASHCARDS" ? tag.saffron : tag.madder,
              "self-center max-[640px]:self-start max-[600px]:px-[9px] max-[600px]:py-1 max-[600px]:text-[9px]"
            )}
          >
            {lesson.type === "FLASHCARDS" ? "флэшкарты" : "мини-квиз"}
          </span>
        </header>

        <div className={reveal[3]}>
          <LessonTrainer
            lessonId={lesson.id}
            lessonType={lesson.type}
            words={words}
            nextLessonId={nextLessonId}
          />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
