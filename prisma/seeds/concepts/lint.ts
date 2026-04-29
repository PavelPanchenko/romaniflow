/**
 * Validates `master.ts` (and any future per-dialect form files) before seed.
 * Run via `npx tsx prisma/seeds/concepts/lint.ts`.
 *
 * Checks today:
 *   • slug uniqueness, slug shape (kebab-case ASCII)
 *   • non-empty translationRu, valid category, sane frequencyRank
 * Future (when forms files exist):
 *   • every FormSeed.conceptSlug resolves to a ConceptSeed
 *   • per-dialect coverage thresholds
 */
import { ConceptCategory } from "@prisma/client";
import { CONCEPTS } from "./master";

const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
const VALID_CATEGORIES = new Set(Object.values(ConceptCategory));

const errors: string[] = [];
const warnings: string[] = [];

const seenSlugs = new Set<string>();
const seenRanks = new Map<number, string>();

for (const c of CONCEPTS) {
  if (!SLUG_RE.test(c.slug)) {
    errors.push(`slug "${c.slug}" is not kebab-case ASCII`);
  }
  if (seenSlugs.has(c.slug)) {
    errors.push(`duplicate slug "${c.slug}"`);
  }
  seenSlugs.add(c.slug);

  if (!c.translationRu.trim()) {
    errors.push(`empty translationRu on "${c.slug}"`);
  }
  if (!VALID_CATEGORIES.has(c.category)) {
    errors.push(`invalid category "${c.category}" on "${c.slug}"`);
  }
  if (c.frequencyRank !== undefined) {
    if (!Number.isInteger(c.frequencyRank) || c.frequencyRank < 1) {
      errors.push(`bad frequencyRank ${c.frequencyRank} on "${c.slug}"`);
    } else if (seenRanks.has(c.frequencyRank)) {
      warnings.push(
        `duplicate frequencyRank ${c.frequencyRank} on "${c.slug}" (also "${seenRanks.get(c.frequencyRank)}")`
      );
    } else {
      seenRanks.set(c.frequencyRank, c.slug);
    }
  }
  if (c.swadeshIndex !== undefined) {
    if (!Number.isInteger(c.swadeshIndex) || c.swadeshIndex < 1 || c.swadeshIndex > 207) {
      errors.push(`bad swadeshIndex ${c.swadeshIndex} on "${c.slug}"`);
    }
  }
}

// Category distribution
const dist = new Map<ConceptCategory, number>();
for (const c of CONCEPTS) dist.set(c.category, (dist.get(c.category) ?? 0) + 1);
console.log(`✦ ${CONCEPTS.length} concepts, ${dist.size} categories used:`);
for (const [cat, n] of [...dist.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`    ${cat.padEnd(15)} ${n}`);
}
const swadeshCovered = CONCEPTS.filter((c) => c.swadeshIndex !== undefined).length;
console.log(`✦ Swadesh-207 coverage: ${swadeshCovered} / 207`);

if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warnings:`);
  for (const w of warnings) console.log(`    ${w}`);
}
if (errors.length) {
  console.error(`\n✗ ${errors.length} errors:`);
  for (const e of errors) console.error(`    ${e}`);
  process.exit(1);
}
console.log("\n✓ master.ts is clean");
