import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { LessonType } from "@prisma/client";
import { LessonTrainer } from "@/components/lesson-trainer";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { db } from "@/lib/db";
import { hasPremiumAccess } from "@/lib/monetization";
import { getSessionUser } from "@/lib/session";

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
    variants: variantsByConcept.get(item.conceptId) ?? []
  }));

  const nextLessonId = await findNextLessonId(lesson);

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
            <p className="kicker">{lesson.module.title}</p>
            <h1 style={{ marginTop: 8 }}>
              {lesson.title.split(":")[0]}
              {lesson.title.includes(":") ? (
                <>
                  :{" "}
                  <em>{lesson.title.split(":").slice(1).join(":").trim()}</em>
                </>
              ) : null}
            </h1>
          </div>
          <span
            className={lesson.type === "FLASHCARDS" ? "tag tag-saffron" : "tag tag-madder"}
            style={{ alignSelf: "center" }}
          >
            {lesson.type === "FLASHCARDS" ? "флэшкарты" : "мини-квиз"}
          </span>
        </header>

        <div className="reveal reveal-3">
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
