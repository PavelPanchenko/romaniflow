/**
 * Auto-generates Module + Lesson + LessonItem for every dialect course from
 * the current `Concept` + `DialectForm` data. Replaces the legacy hand-built
 * Module/Lesson rows from servy.ts/vlax.ts/etc. Each `LESSON_GROUPS` spec
 * becomes one Module per course; forms are bucketed into the spec by
 * `concept.category`, sorted by `frequencyRank`, then split into FLASHCARDS
 * + QUIZ lesson pairs sized by `itemsPerLesson`.
 *
 * Idempotent:
 *   • Modules upserted by `(courseId, order)` — same id reused, so titles
 *     update in place without breaking foreign keys.
 *   • Lessons upserted by `(moduleId, order)` — `LessonProgress.lessonId`
 *     stays valid across re-runs.
 *   • LessonItems are wiped + recreated per lesson (cheap and keeps order).
 *   • Modules in the DB whose `order` is not in LESSON_GROUPS are deleted
 *     (cascade kills their lessons/items + any progress on those lessons).
 *
 * Standalone:  npx tsx prisma/seeds/build-lessons.ts
 * Embedded:    import { buildLessons } from "./seeds/build-lessons"
 */
import {
  ConceptCategory,
  Dialect,
  LessonType,
  PrismaClient
} from "@prisma/client";

export type LessonGroupSpec = {
  order: number;
  title: string;
  description: string;
  categories: ConceptCategory[];
  isPremium: boolean;
  itemsPerLesson: number;
};

export const LESSON_GROUPS: LessonGroupSpec[] = [
  {
    order: 1,
    title: "Приветствия и фразы",
    description: "Первые слова, без которых не обойтись",
    categories: [ConceptCategory.GREETING, ConceptCategory.PHRASE],
    isPremium: false,
    itemsPerLesson: 15
  },
  {
    order: 2,
    title: "Семья и люди",
    description: "Кого как назвать в семье и в дороге",
    categories: [ConceptCategory.KINSHIP],
    isPremium: false,
    itemsPerLesson: 15
  },
  {
    order: 3,
    title: "Дом и еда",
    description: "Слова, которыми наполнен дом и стол",
    categories: [ConceptCategory.HOME, ConceptCategory.FOOD],
    isPremium: false,
    itemsPerLesson: 15
  },
  {
    order: 4,
    title: "Природа и время",
    description: "Земля, небо и часы суток",
    categories: [ConceptCategory.NATURE, ConceptCategory.TIME],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 5,
    title: "Числа",
    description: "Базовый счёт",
    categories: [ConceptCategory.NUMERAL],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 6,
    title: "Глаголы и речь",
    description: "Действия, восприятие, разговор",
    categories: [ConceptCategory.VERB_ACTION, ConceptCategory.VERB_SPEECH],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 7,
    title: "Тело и здоровье",
    description: "Анатомия и состояние",
    categories: [ConceptCategory.BODY],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 8,
    title: "Признаки и свойства",
    description: "Какой? Сколько? Где? Как?",
    categories: [
      ConceptCategory.ADJECTIVE,
      ConceptCategory.PRONOUN,
      ConceptCategory.PREPOSITION
    ],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 9,
    title: "Дорога, ремесло, песня",
    description: "Романи-специфичная лексика: лошадь, табор, музыка, вера",
    categories: [
      ConceptCategory.ROAD_HORSE,
      ConceptCategory.RELIGION_FATE,
      ConceptCategory.MUSIC_CRAFT
    ],
    isPremium: true,
    itemsPerLesson: 15
  },
  {
    order: 10,
    title: "Чувства и слова",
    description: "Радость, страх, имя, правда — отвлечённые понятия и устойчивые благопожелания",
    categories: [ConceptCategory.OTHER],
    isPremium: true,
    itemsPerLesson: 15
  }
];

const VALID_ORDERS = new Set(LESSON_GROUPS.map((g) => g.order));

// Splits an array into balanced chunks where every chunk size is between
// ceil(N/k) and floor(N/k) for k = ceil(N/maxSize). Avoids lonely-tail
// lessons (e.g. 11 items with maxSize 10 → [6,5] not [10,1]).
function chunkBalanced<T>(arr: T[], maxSize: number): T[][] {
  if (arr.length === 0) return [];
  const k = Math.max(1, Math.ceil(arr.length / maxSize));
  const base = Math.ceil(arr.length / k);
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += base) {
    out.push(arr.slice(i, Math.min(i + base, arr.length)));
  }
  return out;
}

export type BuildResult = {
  courses: number;
  modules: number;
  lessons: number;
  items: number;
  prunedModules: number;
  prunedEmptyLessons: number;
};

export async function buildLessons(prisma: PrismaClient): Promise<BuildResult> {
  const result: BuildResult = {
    courses: 0,
    modules: 0,
    lessons: 0,
    items: 0,
    prunedModules: 0,
    prunedEmptyLessons: 0
  };

  const courses = await prisma.course.findMany();
  result.courses = courses.length;

  for (const course of courses) {
    // Drop any module whose order is no longer in the spec — leftovers from
    // legacy seed (e.g. old "Приветствия и обращения" with order 1 but a
    // different category set). Cascade kills its lessons + items + progress
    // (acceptable: those orphan lessons would have no items anyway).
    const stale = await prisma.module.deleteMany({
      where: { courseId: course.id, order: { notIn: [...VALID_ORDERS] } }
    });
    result.prunedModules += stale.count;

    for (const spec of LESSON_GROUPS) {
      // Pull every form for this dialect whose concept fits this group's
      // categories. Sort by frequencyRank (with NULLs last so unranked
      // items don't dominate), then alphabetically as a stable tiebreak.
      const forms = await prisma.dialectForm.findMany({
        where: {
          dialect: course.dialect as Dialect,
          // Только STANDARD-формы попадают в карточки. COLLOQUIAL/LITERARY
          // живут рядом в БД, отображаются на STANDARD-карточке как сноска.
          register: "STANDARD",
          concept: { category: { in: spec.categories } }
        },
        include: { concept: true },
        orderBy: [
          { concept: { frequencyRank: { sort: "asc", nulls: "last" } } },
          { concept: { translationRu: "asc" } },
          { romaniWord: "asc" }
        ]
      });

      // Modules without any forms still get created (placeholder) — feels
      // better than a missing module in the dashboard. They render as empty
      // lesson list; once forms are added the next seed populates them.
      const dbModule = await prisma.module.upsert({
        where: { courseId_order: { courseId: course.id, order: spec.order } },
        update: { title: spec.title, description: spec.description },
        create: {
          courseId: course.id,
          order: spec.order,
          title: spec.title,
          description: spec.description
        }
      });
      result.modules++;

      const chunks = chunkBalanced(forms, spec.itemsPerLesson);

      // Drop lessons whose order is past the current chunk count. Each
      // chunk produces 2 lessons (FLASHCARDS + QUIZ), so max valid order =
      // chunks.length * 2. When chunks is empty the module has no forms in
      // its categories yet — wipe all leftover lessons (would otherwise
      // surface as legacy content under a renamed module title).
      const maxOrder = chunks.length * 2;
      const stripped = await prisma.lesson.deleteMany({
        where: { moduleId: dbModule.id, order: { gt: maxOrder } }
      });
      result.prunedEmptyLessons += stripped.count;

      // Create one FLASHCARDS + QUIZ pair per chunk. Lesson order: chunk i
      // takes orders 2i+1 (flash) and 2i+2 (quiz).
      for (let i = 0; i < chunks.length; i++) {
        const chunk = chunks[i];
        const flashOrder = i * 2 + 1;
        const quizOrder = i * 2 + 2;
        const suffix = chunks.length > 1 ? ` · часть ${i + 1}` : "";
        const flashTitle = `Карточки · ${spec.title}${suffix}`;
        const quizTitle = `Мини-квиз · ${spec.title}${suffix}`;

        const flash = await prisma.lesson.upsert({
          where: { moduleId_order: { moduleId: dbModule.id, order: flashOrder } },
          update: { title: flashTitle, type: LessonType.FLASHCARDS, isPremium: spec.isPremium },
          create: {
            moduleId: dbModule.id,
            order: flashOrder,
            title: flashTitle,
            type: LessonType.FLASHCARDS,
            isPremium: spec.isPremium
          }
        });
        const quiz = await prisma.lesson.upsert({
          where: { moduleId_order: { moduleId: dbModule.id, order: quizOrder } },
          update: { title: quizTitle, type: LessonType.QUIZ, isPremium: spec.isPremium },
          create: {
            moduleId: dbModule.id,
            order: quizOrder,
            title: quizTitle,
            type: LessonType.QUIZ,
            isPremium: spec.isPremium
          }
        });
        result.lessons += 2;

        // Replace LessonItems for both lessons. Cheaper and simpler than
        // diffing — and any progress on the parent Lesson row is preserved
        // because we keep the lesson id stable.
        for (const lesson of [flash, quiz]) {
          await prisma.lessonItem.deleteMany({ where: { lessonId: lesson.id } });
          if (chunk.length === 0) continue;
          await prisma.lessonItem.createMany({
            data: chunk.map((f, position) => ({
              lessonId: lesson.id,
              dialectFormId: f.id,
              conceptId: f.conceptId,
              position
            }))
          });
          result.items += chunk.length;
        }
      }
    }
  }

  return result;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const prisma = new PrismaClient();
  buildLessons(prisma)
    .then((r) => {
      console.log(
        `✦ lessons rebuilt: ${r.courses} courses · ${r.modules} modules · ${r.lessons} lessons · ${r.items} items`
      );
      if (r.prunedModules || r.prunedEmptyLessons) {
        console.log(
          `  ✂ pruned: ${r.prunedModules} stale modules, ${r.prunedEmptyLessons} surplus lessons`
        );
      }
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
