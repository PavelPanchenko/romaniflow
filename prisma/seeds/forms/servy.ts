/**
 * Servy (Сэрвитка рома) dialect forms — Phase 3a authoring file.
 *
 * Each entry maps to a `Concept` by `conceptSlug` (see
 * `prisma/seeds/concepts/master.ts`). The seed pipeline upserts these into
 * `DialectForm` rows; running multiple times is safe.
 *
 * Conventions:
 *   • `transcription` — Cyrillic with combining-acute stress marks (e.g.
 *     "лачо́" not "лачо"). Romani native vocabulary is oxytonic by default;
 *     mark non-final stress explicitly.
 *   • `sources` — codes from `docs/sources.md` (forthcoming). Every form
 *     should have ≥1 source. Use "verified" only when ≥2 independent
 *     sources agree (or a native speaker has reviewed).
 */
import { Dialect, FormConfidence, Register } from "@prisma/client";
import type { FormSeed } from "../concepts/types";

export const SERVY_FORMS: FormSeed[] = [
  // — Семья (canonical forms — раньше жили только в legacy backfill) —
  { conceptSlug: "brat",   dialect: Dialect.SERVY, romaniWord: "Phral", transcription: "пхрал", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },

  // — Showcase Romani-specific concepts that the legacy seed didn't cover —
  { conceptSlug: "loshad", dialect: Dialect.SERVY, romaniWord: "Grast", transcription: "граст", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dengi",  dialect: Dialect.SERVY, romaniWord: "Love",  transcription: "ловэ́", sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "pluralia tantum: формально мн.ч." },
  { conceptSlug: "tabor",  dialect: Dialect.SERVY, romaniWord: "Tábor", transcription: "та́бор", sources: ["DEMETER1990"],            confidence: FormConfidence.DRAFT,    notes: "славянизм, общеромани" },
  { conceptSlug: "rabotat",dialect: Dialect.SERVY, romaniWord: "Te buťi kerel", transcription: "тэ бу́ти кэрэ́л", sources: ["MATRAS2002"], confidence: FormConfidence.DRAFT, notes: "буквально 'делать дело'" },
  { conceptSlug: "pesnya", dialect: Dialect.SERVY, romaniWord: "Gilí",  transcription: "гили́",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },

  // — Демо: новые Swadesh-формы для Servy (показывает что новый концепт в master.ts
  //   автоматически появится в нужном уроке после следующего seed) —
  { conceptSlug: "ya",      dialect: Dialect.SERVY, romaniWord: "Me",   transcription: "мэ",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ty",      dialect: Dialect.SERVY, romaniWord: "Tu",   transcription: "ту",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "on",      dialect: Dialect.SERVY, romaniWord: "Vov",  transcription: "вов", sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "my",      dialect: Dialect.SERVY, romaniWord: "Ame",  transcription: "амэ́", sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vy",      dialect: Dialect.SERVY, romaniWord: "Tume", transcription: "тумэ́",sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "oni",     dialect: Dialect.SERVY, romaniWord: "Vone", transcription: "вонэ́",sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },
  { conceptSlug: "etot",    dialect: Dialect.SERVY, romaniWord: "Akava",transcription: "акава́",sources: ["BOR1994"],              confidence: FormConfidence.DRAFT },
  { conceptSlug: "tot",     dialect: Dialect.SERVY, romaniWord: "Adava",transcription: "адава́",sources: ["BOR1994"],              confidence: FormConfidence.DRAFT },
  { conceptSlug: "kto",     dialect: Dialect.SERVY, romaniWord: "Kon",  transcription: "кон", sources: ["MATRAS2002"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto",    dialect: Dialect.SERVY, romaniWord: "So",   transcription: "со",  sources: ["MATRAS2002"],            confidence: FormConfidence.VERIFIED },

  // — Части тела (BODY) —
  { conceptSlug: "golova",  dialect: Dialect.SERVY, romaniWord: "Šero",  transcription: "шэ́ро", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ruka",    dialect: Dialect.SERVY, romaniWord: "Vast",  transcription: "васт",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "noga",    dialect: Dialect.SERVY, romaniWord: "Pinro", transcription: "пинро́", sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "glaz",    dialect: Dialect.SERVY, romaniWord: "Jakh",  transcription: "якх",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ukho",    dialect: Dialect.SERVY, romaniWord: "Kan",   transcription: "кан",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rot",     dialect: Dialect.SERVY, romaniWord: "Muj",   transcription: "муй",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zub",     dialect: Dialect.SERVY, romaniWord: "Dand",  transcription: "данд",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "serdtse", dialect: Dialect.SERVY, romaniWord: "Jilo",  transcription: "йило́", sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krov",    dialect: Dialect.SERVY, romaniWord: "Rat",   transcription: "рат",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED, notes: "омоним: 'кровь' и 'ночь'" },
  { conceptSlug: "volosy",  dialect: Dialect.SERVY, romaniWord: "Bal",   transcription: "бал",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },

  // — Цвета (ADJECTIVE) —
  { conceptSlug: "krasnyy", dialect: Dialect.SERVY, romaniWord: "Lolo",   transcription: "ло́ло",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chernyy", dialect: Dialect.SERVY, romaniWord: "Kalo",   transcription: "ка́ло",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "belyy",   dialect: Dialect.SERVY, romaniWord: "Parno",  transcription: "па́рно",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zelenyy", dialect: Dialect.SERVY, romaniWord: "Zeleno", transcription: "зэлэ́но", sources: ["BOR1994"],              confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "zheltyy", dialect: Dialect.SERVY, romaniWord: "Galbeno",transcription: "галбэ́но",sources: ["BOR1994"],              confidence: FormConfidence.DRAFT, notes: "румынизм через венгерский путь" },

  // — Бытовые концепты (Phase «В») —
  { conceptSlug: "segodnya", dialect: Dialect.SERVY, romaniWord: "Adadives",  transcription: "адади́вэс",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "буквально 'этот день'" },
  { conceptSlug: "vchera",   dialect: Dialect.SERVY, romaniWord: "Idž",       transcription: "идж",         sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zavtra",   dialect: Dialect.SERVY, romaniWord: "Tehára",    transcription: "тэха́ра",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "то же слово, что 'утро'" },
  { conceptSlug: "utro",     dialect: Dialect.SERVY, romaniWord: "Tehára",    transcription: "тэха́ра",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vecher",   dialect: Dialect.SERVY, romaniWord: "Beľvel",    transcription: "бэ́львэл",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "golodnyy", dialect: Dialect.SERVY, romaniWord: "Bokhalo",   transcription: "бокхало́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolnoy",   dialect: Dialect.SERVY, romaniWord: "Nasvalo",   transcription: "насвало́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ustalyy",  dialect: Dialect.SERVY, romaniWord: "Khino",     transcription: "кхино́",       sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "lyubov",   dialect: Dialect.SERVY, romaniWord: "Kamipe",    transcription: "камипэ́",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "от глагола te kamel — любить" },
  { conceptSlug: "kupit",    dialect: Dialect.SERVY, romaniWord: "Te kinel",  transcription: "тэ кинэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prodat",   dialect: Dialect.SERVY, romaniWord: "Te bikinel",transcription: "тэ бикинэ́л", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "bi- = 'с', приставка отдаления" },
  { conceptSlug: "tsena",    dialect: Dialect.SERVY, romaniWord: "Móľ",       transcription: "моль",        sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "буквально 'стоит', от te molel" },
  { conceptSlug: "bogatyy",  dialect: Dialect.SERVY, romaniWord: "Barvalo",   transcription: "барвало́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bednyy",   dialect: Dialect.SERVY, romaniWord: "Čororó",    transcription: "чороро́",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khotet",   dialect: Dialect.SERVY, romaniWord: "Te kamel",  transcription: "тэ камэ́л",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "то же слово, что 'любить'" },
  { conceptSlug: "moch",     dialect: Dialect.SERVY, romaniWord: "Te dašťi",  transcription: "тэ дашти́",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pomoch",   dialect: Dialect.SERVY, romaniWord: "Te žutinel",transcription: "тэ жутинэ́л", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "prosit",   dialect: Dialect.SERVY, romaniWord: "Te mangel", transcription: "тэ мангэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "также 'просить милостыню'" },

  // — Прилагательные качества (Swadesh) —
  { conceptSlug: "novyy",     dialect: Dialect.SERVY, romaniWord: "Nevo",   transcription: "нэво́",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy",    dialect: Dialect.SERVY, romaniWord: "Phuro",  transcription: "пхуро́",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khoroshiy", dialect: Dialect.SERVY, romaniWord: "Lačho",  transcription: "лачо́",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "plokhoy",   dialect: Dialect.SERVY, romaniWord: "Bilačho",transcription: "билачо́", sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED, notes: "bi- = отрицательная приставка (лексикализованная); словарная форма" },
  { conceptSlug: "plokhoy",   dialect: Dialect.SERVY, romaniWord: "Nalačho",transcription: "налачо́", sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED, register: Register.COLLOQUIAL, notes: "аналитическое отрицание na- 'не-хороший'; в речи звучит чаще, в учебниках подаётся вариантом" },
  { conceptSlug: "teplyy",    dialect: Dialect.SERVY, romaniWord: "Tato",   transcription: "тато́",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kholodnyy", dialect: Dialect.SERVY, romaniWord: "Šilalo", transcription: "шилало́", sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kholodnyy", dialect: Dialect.SERVY, romaniWord: "Šilo",   transcription: "ши́ло",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED, register: Register.COLLOQUIAL, notes: "разговорная стянутая форма от šilalo" },
  { conceptSlug: "mokryy",    dialect: Dialect.SERVY, romaniWord: "Kingo",  transcription: "кинго́",  sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },
  { conceptSlug: "sukhoy",    dialect: Dialect.SERVY, romaniWord: "Šuko",   transcription: "шуко́",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolshoy",   dialect: Dialect.SERVY, romaniWord: "Baro",   transcription: "баро́",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "malenkiy",  dialect: Dialect.SERVY, romaniWord: "Cikno",  transcription: "цикно́",  sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },

  // — Природа: животные, растения, элементы —
  { conceptSlug: "sobaka",    dialect: Dialect.SERVY, romaniWord: "Žukel",  transcription: "жукэ́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ryba",      dialect: Dialect.SERVY, romaniWord: "Mačho",  transcription: "мачо́",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ptitsa",    dialect: Dialect.SERVY, romaniWord: "Čiriklo",transcription: "чирикло́",sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevo",    dialect: Dialect.SERVY, romaniWord: "Kašt",   transcription: "кашт",    sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED, notes: "также 'дерево' как материал и 'дрова'" },
  { conceptSlug: "trava",     dialect: Dialect.SERVY, romaniWord: "Čar",    transcription: "чар",     sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsvetok",   dialect: Dialect.SERVY, romaniWord: "Lulugji",transcription: "лулу́джи",sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },
  { conceptSlug: "kamen",     dialect: Dialect.SERVY, romaniWord: "Bar",    transcription: "бар",     sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },

  // — Доп. части тела —
  { conceptSlug: "sheya",     dialect: Dialect.SERVY, romaniWord: "Kor",    transcription: "кор",     sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spina",     dialect: Dialect.SERVY, romaniWord: "Dumo",   transcription: "думо́",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "koleno",    dialect: Dialect.SERVY, romaniWord: "Čang",   transcription: "чанг",    sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },

  // — Расширенная семья —
  { conceptSlug: "babushka",  dialect: Dialect.SERVY, romaniWord: "Phuri daj", transcription: "пхури́ дай", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "буквально 'старая мать'" },
  { conceptSlug: "dedushka",  dialect: Dialect.SERVY, romaniWord: "Phuro dad", transcription: "пхуро́ дад", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "буквально 'старый отец'" },
  { conceptSlug: "tyotya",    dialect: Dialect.SERVY, romaniWord: "Bibi",      transcription: "би́би",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общероманийское обращение к старшей женщине" },
  { conceptSlug: "dyadya",    dialect: Dialect.SERVY, romaniWord: "Kako",      transcription: "ка́ко",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "также уважительное обращение к старшему мужчине" },
  { conceptSlug: "molodoy",   dialect: Dialect.SERVY, romaniWord: "Terno",     transcription: "тэрно́",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общеромани, индоарийск.; также 'нежный, новый'" },
  { conceptSlug: "starik",    dialect: Dialect.SERVY, romaniWord: "Phuro manuš",transcription: "пхуро́ ману́ш",sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED, notes: "также просто 'phuro' — субстантивированное прилагательное" },
  { conceptSlug: "starukha",  dialect: Dialect.SERVY, romaniWord: "Phuri romni",transcription: "пхури́ ро́мни",sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nevestka",  dialect: Dialect.SERVY, romaniWord: "Bori",      transcription: "бори́",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общеромани; покрывает и 'невестку', и 'невесту'" },
  { conceptSlug: "semja",     dialect: Dialect.SERVY, romaniWord: "Familija",  transcription: "фами́лия",  sources: ["BOR1994"],              confidence: FormConfidence.DRAFT, notes: "интернациональный loan через лат." },
  { conceptSlug: "rod",       dialect: Dialect.SERVY, romaniWord: "Vica",      transcription: "ви́ца",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "клан, большой родственный круг" },
  { conceptSlug: "sosed",     dialect: Dialect.SERVY, romaniWord: "Pasoro",    transcription: "пасоро́",   sources: ["BOR1994"],              confidence: FormConfidence.DRAFT, notes: "от paš 'рядом'" },
  { conceptSlug: "gost",      dialect: Dialect.SERVY, romaniWord: "Musafir",   transcription: "мусафи́р",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED, notes: "тюркизм через арабский 'musāfir' — 'путник'" },
  { conceptSlug: "gospodin",  dialect: Dialect.SERVY, romaniWord: "Raj",       transcription: "рай",       sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "индоарийск.; в романи традиционно — нецыган-господин, барин" },
  { conceptSlug: "gospozha",  dialect: Dialect.SERVY, romaniWord: "Rani",      transcription: "ра́ни",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "женск. от raj" },
  { conceptSlug: "gadzho",    dialect: Dialect.SERVY, romaniWord: "Gadžo",     transcription: "гаджо́",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "ключевой романи-этноним; женск. gadži, мн. gadže" },

  // — Дом / география —
  { conceptSlug: "gorod",     dialect: Dialect.SERVY, romaniWord: "Foros",     transcription: "фо́рос",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "греческий loan, общеромани" },
  { conceptSlug: "derevnya",  dialect: Dialect.SERVY, romaniWord: "Gav",       transcription: "гав",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "индоарийск.; также 'село'" },

  // — Местоимения / вопросы / союзы (пропуски) —
  { conceptSlug: "ona",       dialect: Dialect.SERVY, romaniWord: "Voj",       transcription: "вой",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nichego",   dialect: Dialect.SERVY, romaniWord: "Khanči",    transcription: "кха́нчи",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'нечего, ничто'" },
  { conceptSlug: "otkuda",    dialect: Dialect.SERVY, romaniWord: "Katar",     transcription: "ка́тар",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pochemu",   dialect: Dialect.SERVY, romaniWord: "Soske",     transcription: "со́скэ",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "буквально 'для чего'; дательный падеж от so" },

  // — Время / наречия —
  { conceptSlug: "seychas",   dialect: Dialect.SERVY, romaniWord: "Akana",     transcription: "ака́на",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "potom",     dialect: Dialect.SERVY, romaniWord: "Pale",      transcription: "па́ле",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также пространственное 'позади'" },
  { conceptSlug: "chas",      dialect: Dialect.SERVY, romaniWord: "Časo",      transcription: "ча́со",    sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "bystro",    dialect: Dialect.SERVY, romaniWord: "Sig",       transcription: "сиг",      sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "общеромани" },
  { conceptSlug: "medlenno",  dialect: Dialect.SERVY, romaniWord: "Polokes",   transcription: "поло́кэс", sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },

  // — Прилагательные (расширение) —
  { conceptSlug: "krasivyy",     dialect: Dialect.SERVY, romaniWord: "Šukar",   transcription: "шу́кар",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "индоарийск.; также наречие 'красиво'" },
  { conceptSlug: "zloy",         dialect: Dialect.SERVY, romaniWord: "Džungalo",transcription: "джунгало́",sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'дурной, плохой'" },
  { conceptSlug: "vesyolyy",     dialect: Dialect.SERVY, romaniWord: "Lošalo",  transcription: "лошало́",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "от loš 'радость'" },
  { conceptSlug: "grustnyy",     dialect: Dialect.SERVY, romaniWord: "Tristo",  transcription: "три́сто",  sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "румынизм 'trist'" },
  { conceptSlug: "silnyy",       dialect: Dialect.SERVY, romaniWord: "Zuralo",  transcription: "зурало́",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chistyy",      dialect: Dialect.SERVY, romaniWord: "Žužo",    transcription: "жужо́",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'светлый, ясный'" },
  { conceptSlug: "goryachiy",    dialect: Dialect.SERVY, romaniWord: "Tato",    transcription: "тато́",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "то же слово, что 'тёплый' — контекст уточняет температуру" },
  { conceptSlug: "staryy-veshch",dialect: Dialect.SERVY, romaniWord: "Purano",  transcription: "пурано́",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "phuro = старый человек, purano = старая вещь — параллель с одушевлённостью" },

  // — Глаголы (пропуски) —
  { conceptSlug: "plakat",       dialect: Dialect.SERVY, romaniWord: "Te rovel", transcription: "тэ ровэ́л", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "smeyatsya",    dialect: Dialect.SERVY, romaniWord: "Te asal",  transcription: "тэ аса́л", sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "от te asanel; в речи часто стянуто до te asal" },

  // — Еда —
  { conceptSlug: "yabloko",   dialect: Dialect.SERVY, romaniWord: "Phabaj", transcription: "пхаба́й",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "индоарийское наследие; мн.ч. — phabaja" },
  { conceptSlug: "syr",       dialect: Dialect.SERVY, romaniWord: "Kiral",  transcription: "кира́л",   sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },

  // — Бог и судьба —
  { conceptSlug: "bog",       dialect: Dialect.SERVY, romaniWord: "Del",    transcription: "дэл",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "косв. падежи: 'Devleske' (Богу), 'Devleha' (с Богом). С артиклем: 'O Del'" },
  { conceptSlug: "udacha",    dialect: Dialect.SERVY, romaniWord: "Baxt",   transcription: "бахт",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "ключевая концепция; в пожелании 'Baxt thaj sastipe'" },

  // — Музыка —
  { conceptSlug: "tanets",    dialect: Dialect.SERVY, romaniWord: "Khelipen", transcription: "кхэлипэ́н", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "от te khelel — играть/танцевать; абстрактное существительное на -ipen" },
  { conceptSlug: "gitara",    dialect: Dialect.SERVY, romaniWord: "Gitara",   transcription: "гита́ра",  sources: ["MATRAS2002"], confidence: FormConfidence.DRAFT, notes: "интернациональный заимствованный термин" },
  { conceptSlug: "skripka",   dialect: Dialect.SERVY, romaniWord: "Lavuta",   transcription: "лаву́та",  sources: ["BOR1994"],    confidence: FormConfidence.DRAFT, notes: "румынизм; общая для vlax-зоны и сэрвов" },

  // — Религия / повседневная жизнь / время —
  { conceptSlug: "molitva",   dialect: Dialect.SERVY, romaniWord: "Mangipen", transcription: "мангипэ́н", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "от te mangel — просить; -ipen абстрактное существительное" },
  { conceptSlug: "povozka",   dialect: Dialect.SERVY, romaniWord: "Vurdon",   transcription: "вурдо́н",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общероманийский индоарийский термин" },
  { conceptSlug: "nedelya",   dialect: Dialect.SERVY, romaniWord: "Kurko",    transcription: "ку́рко",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "также 'воскресенье'; индоарийское наследие" },

  // — Живые фразы —
  { conceptSlug: "kak-tebya-zovut", dialect: Dialect.SERVY, romaniWord: "Sar tut bušon?", transcription: "сар тут бушо́н", sources: ["MATRAS2002"], confidence: FormConfidence.DRAFT, notes: "буквально '(они) как тебя зовут'; 3-е л. мн.ч. как безличная форма" },
  { conceptSlug: "ne-ponimayu",     dialect: Dialect.SERVY, romaniWord: "Na hatjarav",   transcription: "на ха́тярав",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "от te hatjarel — понимать, чувствовать" },
  { conceptSlug: "menya-zovut",     dialect: Dialect.SERVY, romaniWord: "Muro anav hin", transcription: "му́ро ана́в хин", sources: ["MATRAS2002"],            confidence: FormConfidence.DRAFT, notes: "буквально 'имя моё есть'; muro — притяж. 'мой', anav — имя" },
  { conceptSlug: "ya-znayu",        dialect: Dialect.SERVY, romaniWord: "Me džanav",     transcription: "мэ джа́нав",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "te džanel — знать, индоарийский корень" },
  { conceptSlug: "ya-ne-znayu",     dialect: Dialect.SERVY, romaniWord: "Na džanav",     transcription: "на джа́нав",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skolko-stoit",    dialect: Dialect.SERVY, romaniWord: "Sode mol?",     transcription: "со́дэ мол",    sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "буквально 'сколько стоит'; te molel — стоить" },
  { conceptSlug: "idi-syuda",       dialect: Dialect.SERVY, romaniWord: "Av kate",       transcription: "ав ка́тэ",     sources: ["BOR1994", "MATRAS2002"],   confidence: FormConfidence.VERIFIED, notes: "av — императив te avel; kate — локатив 'здесь', который в балканском Romani нейтрально покрывает и направление" },
  { conceptSlug: "idi-syuda",       dialect: Dialect.SERVY, romaniWord: "Av kárde",      transcription: "ав ка́рдэ",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, register: Register.COLLOQUIAL, notes: "разговорная форма с явным направительным падежом kárde 'сюда' (пара: kate 'здесь' / kárde 'сюда', kothe 'там' / kórde 'туда') — в речи живёт активно, в учебных нормах подменяется простым локативом" },
  { conceptSlug: "podozhdi",        dialect: Dialect.SERVY, romaniWord: "Adžuker",       transcription: "аджу́кэр",    sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "также часто звучит 'užari', славянизм" },
  { conceptSlug: "pomogi-mne",      dialect: Dialect.SERVY, romaniWord: "Žutin man",     transcription: "жу́тин ман",   sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "славянизм; man — меня (вин.п.)" },
  { conceptSlug: "prosti",          dialect: Dialect.SERVY, romaniWord: "Iertin man",    transcription: "иэ́ртин ман",  sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "румынизм через церковнослав 'iertare'" },
  { conceptSlug: "pozhaluysta",     dialect: Dialect.SERVY, romaniWord: "Mangav tut",    transcription: "ма́нгав тут",  sources: ["MATRAS2002"],              confidence: FormConfidence.DRAFT, notes: "буквально '(я) прошу тебя'" },
  { conceptSlug: "da",              dialect: Dialect.SERVY, romaniWord: "Va",            transcription: "ва",            sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'ova'; общее утверждение" },
  { conceptSlug: "konechno",        dialect: Dialect.SERVY, romaniWord: "Čačes",         transcription: "чачэ́с",        sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "наречие от čačo 'истинный'" },
  { conceptSlug: "ochen",           dialect: Dialect.SERVY, romaniWord: "But",           transcription: "бут",           sources: ["BOR1994", "MATRAS2002"],   confidence: FormConfidence.VERIFIED, notes: "омоним: 'много' и 'очень'" },
  { conceptSlug: "nemnogo",         dialect: Dialect.SERVY, romaniWord: "Xancik",        transcription: "ха́нцик",       sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vmeste",          dialect: Dialect.SERVY, romaniWord: "Khetane",       transcription: "кхэта́нэ",      sources: ["BOR1994", "MATRAS2002"],   confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skazhi-mne",      dialect: Dialect.SERVY, romaniWord: "Phen mange",    transcription: "пхэн ма́нгэ",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "phen — императив te phenel; mange — мне (дат.п.)" },
  { conceptSlug: "ya-khochu",       dialect: Dialect.SERVY, romaniWord: "Me kamav",      transcription: "мэ ка́мав",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'я люблю' — омоним" },
  { conceptSlug: "ya-ne-khochu",    dialect: Dialect.SERVY, romaniWord: "Me na kamav",   transcription: "мэ на ка́мав", sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto-novogo",     dialect: Dialect.SERVY, romaniWord: "So nevo?",      transcription: "со нэво́",     sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "буквально 'что новое'" },

  // — Дом (HOME) — расширение бытовой лексики —
  { conceptSlug: "okno",      dialect: Dialect.SERVY, romaniWord: "Filjastra", transcription: "фьля́стра", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "балканский loan через греч. 'phenestra'" },
  { conceptSlug: "stol",      dialect: Dialect.SERVY, romaniWord: "Mesalja",   transcription: "мэса́ля",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'masă'" },
  { conceptSlug: "stul",      dialect: Dialect.SERVY, romaniWord: "Skamín",    transcription: "сками́н",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "общеромани через греч.; некоторые источники дают значение 'скамья'" },
  { conceptSlug: "krovat",    dialect: Dialect.SERVY, romaniWord: "Pato",      transcription: "па́то",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'pat'" },
  { conceptSlug: "nozh",      dialect: Dialect.SERVY, romaniWord: "Čhuri",     transcription: "чхури́",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "индоарийское наследие" },
  { conceptSlug: "lozhka",    dialect: Dialect.SERVY, romaniWord: "Roj",       transcription: "рой",        sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Части тела (Swadesh) — расширение —
  { conceptSlug: "nos",       dialect: Dialect.SERVY, romaniWord: "Nakh",     transcription: "накх",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yazyk",     dialect: Dialect.SERVY, romaniWord: "Čhib",     transcription: "чхиб",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "и анатомический язык, и язык как речь — одно слово" },
  { conceptSlug: "zhivot",    dialect: Dialect.SERVY, romaniWord: "Per",      transcription: "пэр",       sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kozha",     dialect: Dialect.SERVY, romaniWord: "Morthi",   transcription: "мо́ртхи",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kost",      dialect: Dialect.SERVY, romaniWord: "Kokalo",   transcription: "кока́ло",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "греческий loan, утвердившийся как общеромани" },
  { conceptSlug: "zhir",      dialect: Dialect.SERVY, romaniWord: "Thulipe",  transcription: "тхулипэ́",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "от thulo — толстый; абстрактное существительное на -ipe" },
  { conceptSlug: "grud",      dialect: Dialect.SERVY, romaniWord: "Kolin",    transcription: "коли́н",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pechen",    dialect: Dialect.SERVY, romaniWord: "Bukno",    transcription: "бу́кно",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "stupnya",   dialect: Dialect.SERVY, romaniWord: "Punro",    transcription: "пунро́",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "тот же корень, что 'нога'; в сэрвитском часто синонимы" },

  // — Прилагательные качества (Swadesh) — закрытие дыр —
  { conceptSlug: "tolstyy",   dialect: Dialect.SERVY, romaniWord: "Thulo",    transcription: "тхуло́",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyazhelyy", dialect: Dialect.SERVY, romaniWord: "Pharo",    transcription: "пхаро́",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tonkiy",    dialect: Dialect.SERVY, romaniWord: "Sano",     transcription: "сано́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "uzkiy",     dialect: Dialect.SERVY, romaniWord: "Sano",     transcription: "сано́",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "то же слово, что 'тонкий'; контекст уточняет" },
  { conceptSlug: "dlinnyy",   dialect: Dialect.SERVY, romaniWord: "Lungo",    transcription: "лунго́",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'lung'" },
  { conceptSlug: "korotkiy",  dialect: Dialect.SERVY, romaniWord: "Skurto",   transcription: "ску́рто",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'scurt'" },
  { conceptSlug: "gryaznyy",  dialect: Dialect.SERVY, romaniWord: "Melalo",   transcription: "мэлало́",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "polnyy",    dialect: Dialect.SERVY, romaniWord: "Pherdo",   transcription: "пхэрдо́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ostryy",    dialect: Dialect.SERVY, romaniWord: "Skuto",    transcription: "ску́то",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "также 'острый ум'" },
  { conceptSlug: "tupoy",     dialect: Dialect.SERVY, romaniWord: "Khaslo",   transcription: "кхасло́",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "не острый (про лезвие)" },
  { conceptSlug: "pryamoy",   dialect: Dialect.SERVY, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "также 'правильный', 'правый', 'истинный'" },
  { conceptSlug: "pravilnyy", dialect: Dialect.SERVY, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravyy",    dialect: Dialect.SERVY, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "правый = 'правильный, истинный'; пространственное направление от того же корня" },
  { conceptSlug: "levyy",     dialect: Dialect.SERVY, romaniWord: "Bango",    transcription: "ба́нго",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "буквально 'кривой' — концептуальная пара čačo/bango" },
  { conceptSlug: "sytyy",     dialect: Dialect.SERVY, romaniWord: "Čalo",     transcription: "ча́ло",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "от te čaljol — наесться" },

  // — Глаголы (Swadesh) — закрытие критичных дыр —
  { conceptSlug: "videt",     dialect: Dialect.SERVY, romaniWord: "Te dikhel",  transcription: "тэ дикхэ́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "slyshat",   dialect: Dialect.SERVY, romaniWord: "Te šunel",   transcription: "тэ шунэ́л",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "govorit",   dialect: Dialect.SERVY, romaniWord: "Te phenel",  transcription: "тэ пхэнэ́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "также 'сказать'; общеромани" },
  { conceptSlug: "pet",       dialect: Dialect.SERVY, romaniWord: "Te gilavel", transcription: "тэ гилавэ́л", sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "однокоренное с gilí 'песня'" },
  { conceptSlug: "spat",      dialect: Dialect.SERVY, romaniWord: "Te sovel",   transcription: "тэ совэ́л",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhit",      dialect: Dialect.SERVY, romaniWord: "Te dživel",  transcription: "тэ дживэ́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "umirat",    dialect: Dialect.SERVY, romaniWord: "Te merel",   transcription: "тэ мэрэ́л",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "idti",      dialect: Dialect.SERVY, romaniWord: "Te džal",    transcription: "тэ джал",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prikhodit", dialect: Dialect.SERVY, romaniWord: "Te avel",    transcription: "тэ авэ́л",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "davat",     dialect: Dialect.SERVY, romaniWord: "Te del",     transcription: "тэ дэл",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "омоним с te del 'давать' и 'бить' в нек. контекстах" },
  { conceptSlug: "igrat",     dialect: Dialect.SERVY, romaniWord: "Te khelel",  transcription: "тэ кхэлэ́л",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'танцевать'" },
  { conceptSlug: "myt",       dialect: Dialect.SERVY, romaniWord: "Te thovel",  transcription: "тэ тховэ́л",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dumat",     dialect: Dialect.SERVY, romaniWord: "Te gindil",  transcription: "тэ гинди́л",  sources: ["BOR1994"],                 confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "boyatsya",  dialect: Dialect.SERVY, romaniWord: "Te daral",   transcription: "тэ дара́л",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "однокоренное с dar 'страх'" },
  { conceptSlug: "znat",      dialect: Dialect.SERVY, romaniWord: "Te džanel",  transcription: "тэ джанэ́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "est",       dialect: Dialect.SERVY, romaniWord: "Te xal",     transcription: "тэ хал",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pit",       dialect: Dialect.SERVY, romaniWord: "Te pijel",   transcription: "тэ пиэ́л",    sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sidet",     dialect: Dialect.SERVY, romaniWord: "Te bešel",   transcription: "тэ бэшэ́л",   sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "stoyat",    dialect: Dialect.SERVY, romaniWord: "Te ačhel",   transcription: "тэ ачхэ́л",   sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "также 'останавливаться, оставаться'" },
  { conceptSlug: "lezhat",    dialect: Dialect.SERVY, romaniWord: "Te pašlol",  transcription: "тэ пашло́л",  sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },
  { conceptSlug: "padat",     dialect: Dialect.SERVY, romaniWord: "Te perel",   transcription: "тэ пэрэ́л",   sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED },

  // — Природа (Swadesh) — расширение —
  { conceptSlug: "veter",     dialect: Dialect.SERVY, romaniWord: "Balval",   transcription: "балва́л",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nebo",      dialect: Dialect.SERVY, romaniWord: "Čeri",     transcription: "че́ри",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "также 'воздух'; в выр. 'O Del andre čeri' — Бог в небесах" },
  { conceptSlug: "sneg",      dialect: Dialect.SERVY, romaniWord: "Jiv",      transcription: "джив",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "lyod",      dialect: Dialect.SERVY, romaniWord: "Pajicaki", transcription: "паи́цаки", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "буквально 'водный' — производное от paji 'вода'" },
  { conceptSlug: "dym",       dialect: Dialect.SERVY, romaniWord: "Thuv",     transcription: "тхув",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gora",      dialect: Dialect.SERVY, romaniWord: "Plaj",     transcription: "плай",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'plai' (горный склон)" },
  { conceptSlug: "reka",      dialect: Dialect.SERVY, romaniWord: "Len",      transcription: "лэн",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "more",      dialect: Dialect.SERVY, romaniWord: "Derijav",  transcription: "дэрия́в",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "перс. через тур. 'derya'" },
  { conceptSlug: "ozero",     dialect: Dialect.SERVY, romaniWord: "Iazéri",   transcription: "иаз́эри",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'iaz/iazăr'" },
  { conceptSlug: "pesok",     dialect: Dialect.SERVY, romaniWord: "Posh",     transcription: "пош",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "oblako",    dialect: Dialect.SERVY, romaniWord: "Norj",     transcription: "норь",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'nor'" },
  { conceptSlug: "tuman",     dialect: Dialect.SERVY, romaniWord: "Magla",    transcription: "ма́гла",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "dozhd",     dialect: Dialect.SERVY, romaniWord: "Brišind",  transcription: "бриши́нд", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },

  // — Природа: животные/растения (Swadesh) —
  { conceptSlug: "zmeya",     dialect: Dialect.SERVY, romaniWord: "Sap",      transcription: "сап",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "list",      dialect: Dialect.SERVY, romaniWord: "Patrin",   transcription: "патри́н",  sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "лист дерева" },
  { conceptSlug: "yaytso",    dialect: Dialect.SERVY, romaniWord: "Jandro",   transcription: "я́ндро",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rog",       dialect: Dialect.SERVY, romaniWord: "Šing",     transcription: "шинг",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khvost",    dialect: Dialect.SERVY, romaniWord: "Pori",     transcription: "по́ри",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krylo",     dialect: Dialect.SERVY, romaniWord: "Phak",     transcription: "пхак",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pero",      dialect: Dialect.SERVY, romaniWord: "Por",      transcription: "пор",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "тот же корень, что pori 'хвост'" },

  // — Время —
  { conceptSlug: "god",       dialect: Dialect.SERVY, romaniWord: "Berš",     transcription: "бэрш",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },

  // — Семья (Swadesh-расширение) —
  { conceptSlug: "zhenshchina", dialect: Dialect.SERVY, romaniWord: "Romni",   transcription: "ро́мни",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общее слово для 'женщина' и 'жена'" },
  { conceptSlug: "muzhchina",   dialect: Dialect.SERVY, romaniWord: "Manuš",   transcription: "ману́ш",   sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "также 'человек' в общем смысле" },
  { conceptSlug: "rebenok",     dialect: Dialect.SERVY, romaniWord: "Čhavoro", transcription: "чхаворо́", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "уменьш. от čhavo 'мальчик/сын'" },

  // — Эмоции / отвлечённые —
  { conceptSlug: "imya",      dialect: Dialect.SERVY, romaniWord: "Anav",     transcription: "ана́в",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "radost",    dialect: Dialect.SERVY, romaniWord: "Loš",      transcription: "лош",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "также 'счастье'; от te lošavel — радоваться" },
  { conceptSlug: "grust",     dialect: Dialect.SERVY, romaniWord: "Briga",    transcription: "бри́га",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "strakh",    dialect: Dialect.SERVY, romaniWord: "Dar",      transcription: "дар",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "однокоренное с te daral 'бояться'" },
  { conceptSlug: "pravda",    dialect: Dialect.SERVY, romaniWord: "Čačipen",  transcription: "чачипэ́н", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "от čačo 'истинный, правильный'" },

  // — Местоимения / союзы (расширение) —
  { conceptSlug: "vse",       dialect: Dialect.SERVY, romaniWord: "Sa",       transcription: "са",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "перед существительным; полное 'savorre' для людей" },
  { conceptSlug: "i",         dialect: Dialect.SERVY, romaniWord: "Thaj",     transcription: "тхай",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "соединительный союз" },
  { conceptSlug: "ne",        dialect: Dialect.SERVY, romaniWord: "Na",       transcription: "на",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "общее отрицание перед глаголом" },
  { conceptSlug: "esli",      dialect: Dialect.SERVY, romaniWord: "Te",       transcription: "тэ",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "омоним с инфинитивной частицей 'te'" },
  { conceptSlug: "zdes",      dialect: Dialect.SERVY, romaniWord: "Kate",     transcription: "ка́тэ",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tam",       dialect: Dialect.SERVY, romaniWord: "Kothe",    transcription: "ко́тхэ",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gde",       dialect: Dialect.SERVY, romaniWord: "Kaj",      transcription: "кай",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kogda",     dialect: Dialect.SERVY, romaniWord: "Kana",     transcription: "ка́на",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kak",       dialect: Dialect.SERVY, romaniWord: "Sar",      transcription: "сар",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "blizko",    dialect: Dialect.SERVY, romaniWord: "Paše",     transcription: "па́шэ",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "daleko",    dialect: Dialect.SERVY, romaniWord: "Dur",      transcription: "дур",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED }
];
