-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Dialect" ADD VALUE 'SERVY';
ALTER TYPE "Dialect" ADD VALUE 'RUSSKA_ROMA';
ALTER TYPE "Dialect" ADD VALUE 'VLAX_KALDERASH';
ALTER TYPE "Dialect" ADD VALUE 'LOVARI';
ALTER TYPE "Dialect" ADD VALUE 'KRYMURYA';

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "dialect" "Dialect" NOT NULL DEFAULT 'EASTERN_EUROPEAN',
ADD COLUMN     "isAvailable" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "shortLabel" TEXT NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "preferredDialect" "Dialect";
