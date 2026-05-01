import { LessonType, type Dialect, type Prisma } from "@prisma/client";
import { db } from "@/lib/db";
import { CURRENT_COURSE_SLUGS } from "../../prisma/seeds/course-catalog";

const WORD_COUNT_ROUNDING_STEP = 50;

function flashcardWordWhere(dialect?: Dialect): Prisma.LessonItemWhereInput {
  return {
    lesson: {
      type: LessonType.FLASHCARDS,
      module: {
        course: {
          slug: { in: CURRENT_COURSE_SLUGS },
          ...(dialect ? { dialect } : {})
        }
      }
    }
  };
}

export function roundContentCount(value: number): number {
  return Math.floor(value / WORD_COUNT_ROUNDING_STEP) * WORD_COUNT_ROUNDING_STEP;
}

export async function countFlashcardWords(dialect?: Dialect): Promise<number> {
  return db.lessonItem.count({
    where: flashcardWordWhere(dialect)
  });
}

export async function getRoundedFlashcardWordCount(dialect?: Dialect): Promise<number> {
  return roundContentCount(await countFlashcardWords(dialect));
}
