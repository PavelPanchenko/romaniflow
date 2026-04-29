/**
 * Печатает чек-лист концепт → Servy-форма по данным сидов (без БД).
 * Запуск: npx tsx prisma/seeds/report-servy-coverage.ts
 * Опции: --tsv — только TSV с колонками slug, ru, romani, transcription, confidence, register
 */
import { Dialect, FormConfidence, Register } from "@prisma/client";
import { CONCEPTS } from "./concepts/master";
import { SERVY_FORMS } from "./forms/servy";

const tsv = process.argv.includes("--tsv");

const ruBySlug = new Map(CONCEPTS.map((c) => [c.slug, c.translationRu]));

const servy = SERVY_FORMS.filter((f) => f.dialect === Dialect.SERVY);
const bySlug = new Map<string, typeof servy>();
for (const f of servy) {
  const a = bySlug.get(f.conceptSlug) ?? [];
  a.push(f);
  bySlug.set(f.conceptSlug, a);
}

const allSlugs = [...new Set(CONCEPTS.map((c) => c.slug))].sort();
const withForm = new Set(bySlug.keys());
const missing = allSlugs.filter((s) => !withForm.has(s));

if (!tsv) {
  console.log("=== Servy: покрытие (источник — prisma/seeds, не БД) ===\n");
  console.log(`Всего концептов: ${allSlugs.length}`);
  console.log(`С ≥1 Servy-формой: ${withForm.size}`);
  console.log(`Без Servy-формы: ${missing.length}`);
  console.log(`Всего строк DialectForm (Servy): ${servy.length}\n`);
  console.log("— Концепты без Servy-формы —\n");
  for (const slug of missing) {
    console.log(`  ${slug}\t${ruBySlug.get(slug) ?? "?"}`);
  }
  console.log("\n— Концепт → forma (STANDARD; COLLOQUIAL/LITERARY — отдельные строки) —\n");
}

if (tsv) {
  console.log(["slug", "ru", "romani", "transcription", "confidence", "register"].join("\t"));
} else {
  // human table header
  console.log(
    "slug".padEnd(22) + "romani".padEnd(20) + "transcription".padEnd(22) + "conf".padEnd(10) + "reg"
  );
  console.log("-".repeat(90));
}

const confShort = (c: FormConfidence) =>
  c === FormConfidence.VERIFIED ? "VER" : c === FormConfidence.DRAFT ? "DRA" : "UNC";

for (const slug of allSlugs) {
  const list = bySlug.get(slug);
  if (!list) continue;
  for (const f of list) {
    const reg = f.register ?? Register.STANDARD;
    if (tsv) {
      console.log(
        [
          slug,
          (ruBySlug.get(slug) ?? "").replace(/\t/g, " "),
          f.romaniWord,
          f.transcription,
          f.confidence,
          reg
        ].join("\t")
      );
    } else {
      console.log(
        slug.slice(0, 21).padEnd(22) +
          f.romaniWord.slice(0, 19).padEnd(20) +
          f.transcription.slice(0, 20).padEnd(22) +
          confShort(f.confidence).padEnd(10) +
          reg
      );
    }
  }
}

if (!tsv) {
  console.log(`\n(${withForm.size} концептов, ${servy.length} карточек-строк в сиде)`);
}
