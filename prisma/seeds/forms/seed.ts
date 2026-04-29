/**
 * Upserts every FormSeed in the per-dialect form files into `DialectForm`.
 * Each form is matched by `(conceptId, dialect, romaniWord)`. Forms whose
 * `conceptSlug` does not resolve to an existing Concept are skipped and
 * reported — usually that means the concept is missing from
 * `prisma/seeds/concepts/master.ts`.
 *
 * Standalone:  npx tsx prisma/seeds/forms/seed.ts
 * Embedded:    import { seedForms } from "./seeds/forms/seed"
 */
import { Dialect, PrismaClient } from "@prisma/client";
import type { FormSeed } from "../concepts/types";
import { SERVY_FORMS } from "./servy";
import { VLAX_FORMS } from "./vlax";
import { RUSSKA_ROMA_FORMS } from "./russka_roma";
import { LOVARI_FORMS } from "./lovari";
import { KRYMURYA_FORMS } from "./krymurya";

export type FormSeedResult = {
  upserted: number;
  skipped: { conceptSlug: string; dialect: Dialect; romaniWord: string }[];
};

const ALL_FORMS: FormSeed[] = [
  ...SERVY_FORMS,
  ...VLAX_FORMS,
  ...RUSSKA_ROMA_FORMS,
  ...LOVARI_FORMS,
  ...KRYMURYA_FORMS
];

export async function seedForms(
  prisma: PrismaClient
): Promise<FormSeedResult> {
  const result: FormSeedResult = { upserted: 0, skipped: [] };

  // Cache slug → conceptId so we don't hammer Postgres on large batches.
  const slugToId = new Map<string, string>();

  for (const f of ALL_FORMS) {
    let conceptId = slugToId.get(f.conceptSlug);
    if (!conceptId) {
      const c = await prisma.concept.findUnique({
        where: { slug: f.conceptSlug },
        select: { id: true }
      });
      if (!c) {
        result.skipped.push({
          conceptSlug: f.conceptSlug,
          dialect: f.dialect,
          romaniWord: f.romaniWord
        });
        continue;
      }
      conceptId = c.id;
      slugToId.set(f.conceptSlug, conceptId);
    }

    await prisma.dialectForm.upsert({
      where: {
        conceptId_dialect_romaniWord: {
          conceptId,
          dialect: f.dialect,
          romaniWord: f.romaniWord
        }
      },
      update: {
        transcription: f.transcription,
        ipa: f.ipa ?? null,
        sources: f.sources,
        confidence: f.confidence,
        register: f.register ?? "STANDARD",
        notes: f.notes ?? null
      },
      create: {
        conceptId,
        dialect: f.dialect,
        romaniWord: f.romaniWord,
        transcription: f.transcription,
        ipa: f.ipa ?? null,
        sources: f.sources,
        confidence: f.confidence,
        register: f.register ?? "STANDARD",
        notes: f.notes ?? null
      }
    });
    result.upserted++;
  }

  return result;
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const prisma = new PrismaClient();
  seedForms(prisma)
    .then(({ upserted, skipped }) => {
      console.log(`✦ forms: ${upserted} upserted`);
      if (skipped.length) {
        console.log(`  ⚠ ${skipped.length} skipped (missing concept):`);
        for (const s of skipped) {
          console.log(`    ${s.conceptSlug} [${s.dialect}] ${s.romaniWord}`);
        }
      }
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
