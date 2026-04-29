-- CreateEnum
CREATE TYPE "ConceptCategory" AS ENUM ('GREETING', 'KINSHIP', 'HOME', 'FOOD', 'NATURE', 'BODY', 'TIME', 'NUMERAL', 'VERB_ACTION', 'VERB_SPEECH', 'ADJECTIVE', 'PRONOUN', 'PREPOSITION', 'PHRASE', 'ROAD_HORSE', 'RELIGION_FATE', 'MUSIC_CRAFT', 'OTHER');

-- CreateEnum
CREATE TYPE "FormConfidence" AS ENUM ('VERIFIED', 'DRAFT', 'UNCERTAIN');

-- CreateTable
CREATE TABLE "Concept" (
    "id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "translationRu" TEXT NOT NULL,
    "senseNote" TEXT,
    "category" "ConceptCategory" NOT NULL,
    "frequencyRank" INTEGER,
    "swadeshIndex" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DialectForm" (
    "id" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "dialect" "Dialect" NOT NULL,
    "romaniWord" TEXT NOT NULL,
    "transcription" TEXT NOT NULL,
    "ipa" TEXT,
    "audioUrl" TEXT,
    "sources" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "confidence" "FormConfidence" NOT NULL DEFAULT 'DRAFT',
    "notes" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DialectForm_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LessonItem" (
    "lessonId" TEXT NOT NULL,
    "dialectFormId" TEXT NOT NULL,
    "conceptId" TEXT NOT NULL,
    "position" INTEGER NOT NULL,

    CONSTRAINT "LessonItem_pkey" PRIMARY KEY ("lessonId","dialectFormId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Concept_slug_key" ON "Concept"("slug");

-- CreateIndex
CREATE INDEX "Concept_category_idx" ON "Concept"("category");

-- CreateIndex
CREATE INDEX "Concept_frequencyRank_idx" ON "Concept"("frequencyRank");

-- CreateIndex
CREATE INDEX "DialectForm_dialect_idx" ON "DialectForm"("dialect");

-- CreateIndex
CREATE UNIQUE INDEX "DialectForm_conceptId_dialect_romaniWord_key" ON "DialectForm"("conceptId", "dialect", "romaniWord");

-- CreateIndex
CREATE INDEX "LessonItem_lessonId_position_idx" ON "LessonItem"("lessonId", "position");

-- AddForeignKey
ALTER TABLE "DialectForm" ADD CONSTRAINT "DialectForm_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonItem" ADD CONSTRAINT "LessonItem_lessonId_fkey" FOREIGN KEY ("lessonId") REFERENCES "Lesson"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonItem" ADD CONSTRAINT "LessonItem_dialectFormId_fkey" FOREIGN KEY ("dialectFormId") REFERENCES "DialectForm"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LessonItem" ADD CONSTRAINT "LessonItem_conceptId_fkey" FOREIGN KEY ("conceptId") REFERENCES "Concept"("id") ON DELETE CASCADE ON UPDATE CASCADE;
