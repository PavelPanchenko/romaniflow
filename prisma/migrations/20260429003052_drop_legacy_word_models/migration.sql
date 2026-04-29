-- DropForeignKey
ALTER TABLE "LessonWord" DROP CONSTRAINT "LessonWord_lessonId_fkey";

-- DropForeignKey
ALTER TABLE "LessonWord" DROP CONSTRAINT "LessonWord_wordId_fkey";

-- DropTable
DROP TABLE "LessonWord";

-- DropTable
DROP TABLE "Word";
