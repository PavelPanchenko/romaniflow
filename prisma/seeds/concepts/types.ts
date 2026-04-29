import type { ConceptCategory, FormConfidence, Dialect, Register } from "@prisma/client";

export type ConceptSeed = {
  slug: string;
  translationRu: string;
  senseNote?: string;
  category: ConceptCategory;
  frequencyRank?: number;     // 1..1000 (1 = most useful)
  swadeshIndex?: number;      // 1..207 if part of Swadesh list
  // Optional grouping label that drives module/lesson layout in
  // build-lessons.ts. If omitted, falls back to `category`.
  module?: string;
};

export type FormSeed = {
  conceptSlug: string;
  dialect: Dialect;
  romaniWord: string;
  transcription: string;       // Cyrillic with combining-acute stress marks
  ipa?: string;
  sources: string[];           // ["ROMLEX:vlx", "BOR1994:p.117", ...]
  confidence: FormConfidence;
  // Реестр: STANDARD идёт в карточки, COLLOQUIAL/LITERARY — сноской
  // на STANDARD-карточке этого же концепта-диалекта.
  register?: Register;
  notes?: string;
};
