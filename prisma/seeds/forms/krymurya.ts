/**
 * Krymurya (крымские рома) forms — Phase 3e. Smaller coverage by design;
 * see servy.ts for conventions. Default to UNCERTAIN until a native speaker
 * has reviewed.
 */
import { Dialect, FormConfidence } from "@prisma/client";
import type { FormSeed } from "../concepts/types";

export const KRYMURYA_FORMS: FormSeed[] = [
  // — Семья (canonical forms — раньше жили только в legacy backfill) —
  { conceptSlug: "brat",   dialect: Dialect.KRYMURYA, romaniWord: "Phral", transcription: "пхрал", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN, notes: "общеромани, ожидается тот же корень" },

  { conceptSlug: "loshad", dialect: Dialect.KRYMURYA, romaniWord: "Grast", transcription: "граст", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN, notes: "общеромани, ожидается тот же корень" },
  { conceptSlug: "dengi",  dialect: Dialect.KRYMURYA, romaniWord: "Love",  transcription: "ловэ́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "pesnya", dialect: Dialect.KRYMURYA, romaniWord: "Gilí",  transcription: "гили́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Местоимения (общеромани, ожидаются те же корни) —
  { conceptSlug: "ya",   dialect: Dialect.KRYMURYA, romaniWord: "Me",   transcription: "мэ",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "ty",   dialect: Dialect.KRYMURYA, romaniWord: "Tu",   transcription: "ту",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "on",   dialect: Dialect.KRYMURYA, romaniWord: "Vov",  transcription: "вов",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "my",   dialect: Dialect.KRYMURYA, romaniWord: "Ame",  transcription: "амэ́", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "vy",   dialect: Dialect.KRYMURYA, romaniWord: "Tume", transcription: "тумэ́",sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "kto",  dialect: Dialect.KRYMURYA, romaniWord: "Kon",  transcription: "кон",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "chto", dialect: Dialect.KRYMURYA, romaniWord: "So",   transcription: "со",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Части тела (общеромани) —
  { conceptSlug: "golova",  dialect: Dialect.KRYMURYA, romaniWord: "Šero",  transcription: "шэ́ро",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "ruka",    dialect: Dialect.KRYMURYA, romaniWord: "Vast",  transcription: "васт",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "glaz",    dialect: Dialect.KRYMURYA, romaniWord: "Jakh",  transcription: "якх",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "ukho",    dialect: Dialect.KRYMURYA, romaniWord: "Kan",   transcription: "кан",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "rot",     dialect: Dialect.KRYMURYA, romaniWord: "Muj",   transcription: "муй",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "krov",    dialect: Dialect.KRYMURYA, romaniWord: "Rat",   transcription: "рат",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "volosy",  dialect: Dialect.KRYMURYA, romaniWord: "Bal",   transcription: "бал",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Цвета —
  { conceptSlug: "krasnyy", dialect: Dialect.KRYMURYA, romaniWord: "Lolo",  transcription: "ло́ло",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "chernyy", dialect: Dialect.KRYMURYA, romaniWord: "Kalo",  transcription: "ка́ло",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "belyy",   dialect: Dialect.KRYMURYA, romaniWord: "Parno", transcription: "па́рно", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Бытовые (с заметным тюркским влиянием) —
  {
    conceptSlug: "zavtra",
    dialect: Dialect.KRYMURYA,
    romaniWord: "Tehára",
    transcription: "тэха́ра",
    sources: ["LEGACY"],
    confidence: FormConfidence.UNCERTAIN,
    notes: "нужен носитель/источник по крым. рома: сейчас лемма совпадает с utro"
  },
  {
    conceptSlug: "utro",
    dialect: Dialect.KRYMURYA,
    romaniWord: "Tehára",
    transcription: "тэха́ра",
    sources: ["LEGACY"],
    confidence: FormConfidence.UNCERTAIN,
    notes: "коллизия с zavtra — не считать финальной; ревью"
  },
  { conceptSlug: "golodnyy", dialect: Dialect.KRYMURYA, romaniWord: "Bokhalo",  transcription: "бокхало́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "bolnoy",   dialect: Dialect.KRYMURYA, romaniWord: "Nasvalo",  transcription: "насвало́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "lyubov",   dialect: Dialect.KRYMURYA, romaniWord: "Kamipe",   transcription: "камипэ́",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "khotet",   dialect: Dialect.KRYMURYA, romaniWord: "Te kamel", transcription: "тэ камэ́л", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Прилагательные (общеромани) —
  { conceptSlug: "novyy",     dialect: Dialect.KRYMURYA, romaniWord: "Nevo",   transcription: "нэво́",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "staryy",    dialect: Dialect.KRYMURYA, romaniWord: "Phuro",  transcription: "пхуро́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "khoroshiy", dialect: Dialect.KRYMURYA, romaniWord: "Lačho",  transcription: "лачо́",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "bolshoy",   dialect: Dialect.KRYMURYA, romaniWord: "Baro",   transcription: "баро́",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "malenkiy",  dialect: Dialect.KRYMURYA, romaniWord: "Cikno",  transcription: "цикно́",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Природа —
  { conceptSlug: "sobaka",    dialect: Dialect.KRYMURYA, romaniWord: "Žukel",  transcription: "жукэ́л",  sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "ryba",      dialect: Dialect.KRYMURYA, romaniWord: "Mačho",  transcription: "мачо́",   sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "derevo",    dialect: Dialect.KRYMURYA, romaniWord: "Kašt",   transcription: "кашт",    sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "kamen",     dialect: Dialect.KRYMURYA, romaniWord: "Bar",    transcription: "бар",     sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Общероманийское ядро (родство, Бог, удача) — ожидается без отклонений —
  { conceptSlug: "babushka",  dialect: Dialect.KRYMURYA, romaniWord: "Phuri daj", transcription: "пхури́ дай", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN, notes: "общероманийский калькированный термин" },
  { conceptSlug: "dedushka",  dialect: Dialect.KRYMURYA, romaniWord: "Phuro dad", transcription: "пхуро́ дад", sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "tyotya",    dialect: Dialect.KRYMURYA, romaniWord: "Bibi",      transcription: "би́би",      sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "dyadya",    dialect: Dialect.KRYMURYA, romaniWord: "Kako",      transcription: "ка́ко",      sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "bog",       dialect: Dialect.KRYMURYA, romaniWord: "Del",       transcription: "дэл",        sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },
  { conceptSlug: "udacha",    dialect: Dialect.KRYMURYA, romaniWord: "Baxt",      transcription: "бахт",       sources: ["LEGACY"], confidence: FormConfidence.UNCERTAIN },

  // — Фраза (количество; проверка у носителей) —
  {
    conceptSlug: "skolko-kolichestvo",
    dialect: Dialect.KRYMURYA,
    romaniWord: "Keci?",
    transcription: "ке́ци",
    sources: ["LEGACY"],
    confidence: FormConfidence.UNCERTAIN,
    notes: "заглушка по аналогии с сэрвами; уточнить у носителей крымских рома"
  }
];
