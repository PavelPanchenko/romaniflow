/**
 * Upserts every concept in `master.ts` into the DB. Run after the legacy
 * seed + backfill so existing concepts get enriched (slug, category,
 * frequencyRank, swadeshIndex, senseNote) and any new concepts in master.ts
 * get created with no forms (forms are filled by `prisma/seeds/forms/*` in
 * Phase 3).
 *
 * Standalone:  npx tsx prisma/seeds/concepts/seed.ts
 * Embedded:    import { seedConcepts } from "./seeds/concepts/seed"
 */
import { PrismaClient } from "@prisma/client";
import { CONCEPTS } from "./master";
import type { ConceptSeed } from "./types";

export type ConceptSeedResult = {
  enriched: number;     // concepts already in DB, updated in place
  created: number;      // new concepts inserted (no forms yet)
  reslugged: number;    // concepts found by translationRu but slug changed
};

// Two pass match: prefer slug, fall back to translationRu so that legacy
// concepts (which got auto-slugs from the backfill) get adopted by the
// canonical slug from master.ts.
async function findExisting(prisma: PrismaClient, c: ConceptSeed) {
  const bySlug = await prisma.concept.findUnique({ where: { slug: c.slug } });
  if (bySlug) return { match: bySlug, mode: "slug" as const };
  const byRu = await prisma.concept.findFirst({
    where: { translationRu: c.translationRu }
  });
  if (byRu) return { match: byRu, mode: "translation" as const };
  return null;
}

export async function seedConcepts(
  prisma: PrismaClient
): Promise<ConceptSeedResult> {
  let enriched = 0;
  let created = 0;
  let reslugged = 0;

  for (const c of CONCEPTS) {
    const found = await findExisting(prisma, c);
    if (found) {
      await prisma.concept.update({
        where: { id: found.match.id },
        data: {
          slug: c.slug,
          translationRu: c.translationRu,
          senseNote: c.senseNote ?? null,
          category: c.category,
          frequencyRank: c.frequencyRank ?? null,
          swadeshIndex: c.swadeshIndex ?? null
        }
      });
      enriched++;
      if (found.mode === "translation" && found.match.slug !== c.slug) {
        reslugged++;
      }
    } else {
      await prisma.concept.create({
        data: {
          slug: c.slug,
          translationRu: c.translationRu,
          senseNote: c.senseNote ?? null,
          category: c.category,
          frequencyRank: c.frequencyRank ?? null,
          swadeshIndex: c.swadeshIndex ?? null
        }
      });
      created++;
    }
  }

  return { enriched, created, reslugged };
}

if (process.argv[1] && import.meta.url === new URL(`file://${process.argv[1]}`).href) {
  const prisma = new PrismaClient();
  seedConcepts(prisma)
    .then(({ enriched, created, reslugged }) => {
      console.log(
        `✦ concepts: ${enriched} enriched · ${created} created · ${reslugged} reslugged`
      );
    })
    .catch((e) => {
      console.error(e);
      process.exit(1);
    })
    .finally(() => prisma.$disconnect());
}
