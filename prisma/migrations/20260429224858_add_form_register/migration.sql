-- CreateEnum
CREATE TYPE "Register" AS ENUM ('STANDARD', 'COLLOQUIAL', 'LITERARY');

-- AlterTable
ALTER TABLE "DialectForm" ADD COLUMN     "register" "Register" NOT NULL DEFAULT 'STANDARD';
