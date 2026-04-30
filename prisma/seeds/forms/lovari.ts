/**
 * Lovari forms — Phase 3d. See servy.ts for conventions.
 */
import { Dialect, FormConfidence } from "@prisma/client";
import type { FormSeed } from "../concepts/types";

export const LOVARI_FORMS: FormSeed[] = [
  // — Семья (canonical forms — раньше жили только в legacy backfill) —
  { conceptSlug: "brat",   dialect: Dialect.LOVARI, romaniWord: "Phral",   transcription: "пхрал",  sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  { conceptSlug: "loshad", dialect: Dialect.LOVARI, romaniWord: "Grast",   transcription: "граст",  sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED, notes: "ловари — буквально 'конники' (от 'lo' < венг. 'ló' = лошадь)" },
  { conceptSlug: "dengi",  dialect: Dialect.LOVARI, romaniWord: "Love",    transcription: "ловэ́",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tabor",  dialect: Dialect.LOVARI, romaniWord: "Tábor",   transcription: "та́бор",  sources: ["ROMLEX:lov"],            confidence: FormConfidence.DRAFT },
  { conceptSlug: "rabotat",dialect: Dialect.LOVARI, romaniWord: "Te kerel butji", transcription: "тэ кэрэ́л бу́тьи", sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pesnya", dialect: Dialect.LOVARI, romaniWord: "Gilí",    transcription: "гили́",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },

  // — Местоимения —
  { conceptSlug: "ya",   dialect: Dialect.LOVARI, romaniWord: "Me",   transcription: "мэ",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ty",   dialect: Dialect.LOVARI, romaniWord: "Tu",   transcription: "ту",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "on",   dialect: Dialect.LOVARI, romaniWord: "Vov",  transcription: "вов",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "my",   dialect: Dialect.LOVARI, romaniWord: "Ame",  transcription: "амэ́", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vy",   dialect: Dialect.LOVARI, romaniWord: "Tume", transcription: "тумэ́",sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "oni",  dialect: Dialect.LOVARI, romaniWord: "Von",  transcription: "вон",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "etot", dialect: Dialect.LOVARI, romaniWord: "Kado", transcription: "ка́до", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tot",  dialect: Dialect.LOVARI, romaniWord: "Kodo", transcription: "ко́до", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kto",  dialect: Dialect.LOVARI, romaniWord: "Kon",  transcription: "кон",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto", dialect: Dialect.LOVARI, romaniWord: "So",   transcription: "со",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Части тела —
  { conceptSlug: "golova",  dialect: Dialect.LOVARI, romaniWord: "Šero",  transcription: "шэ́ро",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ruka",    dialect: Dialect.LOVARI, romaniWord: "Vast",  transcription: "васт",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "noga",    dialect: Dialect.LOVARI, romaniWord: "Punro", transcription: "пунро́", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "glaz",    dialect: Dialect.LOVARI, romaniWord: "Jakh",  transcription: "якх",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ukho",    dialect: Dialect.LOVARI, romaniWord: "Kan",   transcription: "кан",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rot",     dialect: Dialect.LOVARI, romaniWord: "Muj",   transcription: "муй",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zub",     dialect: Dialect.LOVARI, romaniWord: "Dand",  transcription: "данд",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "serdtse", dialect: Dialect.LOVARI, romaniWord: "Ilo",   transcription: "ило́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krov",    dialect: Dialect.LOVARI, romaniWord: "Rat",   transcription: "рат",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "volosy",  dialect: Dialect.LOVARI, romaniWord: "Bal",   transcription: "бал",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Цвета —
  { conceptSlug: "krasnyy", dialect: Dialect.LOVARI, romaniWord: "Lolo",   transcription: "ло́ло",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chernyy", dialect: Dialect.LOVARI, romaniWord: "Kalo",   transcription: "ка́ло",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "belyy",   dialect: Dialect.LOVARI, romaniWord: "Parno",  transcription: "па́рно",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zelenyy", dialect: Dialect.LOVARI, romaniWord: "Zöldo",  transcription: "зё́лдо",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "венгеризм 'zöld'" },
  { conceptSlug: "zheltyy", dialect: Dialect.LOVARI, romaniWord: "Šárgo",  transcription: "ша́рго",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "венгеризм 'sárga'" },

  // — Бытовые —
  { conceptSlug: "segodnya", dialect: Dialect.LOVARI, romaniWord: "Adádžes",   transcription: "ада́джес",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "vchera",   dialect: Dialect.LOVARI, romaniWord: "Aratji",    transcription: "арат́жи",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zavtra",   dialect: Dialect.LOVARI, romaniWord: "Tehára",    transcription: "тэха́ра",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "utro",     dialect: Dialect.LOVARI, romaniWord: "Tehára",    transcription: "тэха́ра",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vecher",   dialect: Dialect.LOVARI, romaniWord: "Rači",      transcription: "ра́чи",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "golodnyy", dialect: Dialect.LOVARI, romaniWord: "Bokhalo",   transcription: "бокхало́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolnoy",   dialect: Dialect.LOVARI, romaniWord: "Nasvalo",   transcription: "насвало́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ustalyy",  dialect: Dialect.LOVARI, romaniWord: "Khino",     transcription: "кхино́",    sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "lyubov",   dialect: Dialect.LOVARI, romaniWord: "Kamipe",    transcription: "камипэ́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kupit",    dialect: Dialect.LOVARI, romaniWord: "Te kinel",  transcription: "тэ кинэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prodat",   dialect: Dialect.LOVARI, romaniWord: "Te bikinel",transcription: "тэ бикинэ́л",sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsena",    dialect: Dialect.LOVARI, romaniWord: "Áro",       transcription: "а́ро",      sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "венгеризм 'ár'" },
  { conceptSlug: "bogatyy",  dialect: Dialect.LOVARI, romaniWord: "Barvalo",   transcription: "барвало́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bednyy",   dialect: Dialect.LOVARI, romaniWord: "Čoro",      transcription: "чоро́",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khotet",   dialect: Dialect.LOVARI, romaniWord: "Te kamel",  transcription: "тэ камэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "moch",     dialect: Dialect.LOVARI, romaniWord: "Te birinel",transcription: "тэ биринэ́л",sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "венгеризм 'bír'" },
  { conceptSlug: "pomoch",   dialect: Dialect.LOVARI, romaniWord: "Te žutil",  transcription: "тэ жути́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "prosit",   dialect: Dialect.LOVARI, romaniWord: "Te mangel", transcription: "тэ мангэ́л",sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные —
  { conceptSlug: "novyy",     dialect: Dialect.LOVARI, romaniWord: "Nevo",   transcription: "нэво́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy",    dialect: Dialect.LOVARI, romaniWord: "Phuro",  transcription: "пхуро́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khoroshiy", dialect: Dialect.LOVARI, romaniWord: "Lačho",  transcription: "лачо́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "plokhoy",   dialect: Dialect.LOVARI, romaniWord: "Žungalo",transcription: "жунгало́",sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "teplyy",    dialect: Dialect.LOVARI, romaniWord: "Tato",   transcription: "тато́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kholodnyy", dialect: Dialect.LOVARI, romaniWord: "Šudro",  transcription: "шудро́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "mokryy",    dialect: Dialect.LOVARI, romaniWord: "Kingo",  transcription: "кинго́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "sukhoy",    dialect: Dialect.LOVARI, romaniWord: "Šuko",   transcription: "шуко́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolshoy",   dialect: Dialect.LOVARI, romaniWord: "Baro",   transcription: "баро́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "malenkiy",  dialect: Dialect.LOVARI, romaniWord: "Cikno",  transcription: "цикно́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "sobaka",    dialect: Dialect.LOVARI, romaniWord: "Žukel",  transcription: "жукэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ryba",      dialect: Dialect.LOVARI, romaniWord: "Mačho",  transcription: "мачо́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ptitsa",    dialect: Dialect.LOVARI, romaniWord: "Čiriklo",transcription: "чирикло́",sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevo",    dialect: Dialect.LOVARI, romaniWord: "Kašt",   transcription: "кашт",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "trava",     dialect: Dialect.LOVARI, romaniWord: "Čar",    transcription: "чар",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsvetok",   dialect: Dialect.LOVARI, romaniWord: "Luludji",transcription: "лулу́джи",sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "kamen",     dialect: Dialect.LOVARI, romaniWord: "Bar",    transcription: "бар",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Доп. части тела —
  { conceptSlug: "sheya",     dialect: Dialect.LOVARI, romaniWord: "Kor",    transcription: "кор",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spina",     dialect: Dialect.LOVARI, romaniWord: "Dumo",   transcription: "думо́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "koleno",    dialect: Dialect.LOVARI, romaniWord: "Čang",   transcription: "чанг",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Расширенная семья —
  { conceptSlug: "babushka",  dialect: Dialect.LOVARI, romaniWord: "Phuri daj", transcription: "пхури́ дай", sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dedushka",  dialect: Dialect.LOVARI, romaniWord: "Phuro dad", transcription: "пхуро́ дад", sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyotya",    dialect: Dialect.LOVARI, romaniWord: "Bibi",      transcription: "би́би",      sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dyadya",    dialect: Dialect.LOVARI, romaniWord: "Kako",      transcription: "ка́ко",      sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "molodoy",   dialect: Dialect.LOVARI, romaniWord: "Terno",       transcription: "тэрно́",    sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starik",    dialect: Dialect.LOVARI, romaniWord: "Phuro manuš", transcription: "пхуро́ ману́ш",sources: ["ROMLEX:lov"],          confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starukha",  dialect: Dialect.LOVARI, romaniWord: "Phuri romni", transcription: "пхури́ ро́мни",sources: ["ROMLEX:lov"],          confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nevestka",  dialect: Dialect.LOVARI, romaniWord: "Bori",        transcription: "бори́",     sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "semja",     dialect: Dialect.LOVARI, romaniWord: "Familija",    transcription: "фами́лия",  sources: ["ROMLEX:lov"],          confidence: FormConfidence.DRAFT },
  { conceptSlug: "rod",       dialect: Dialect.LOVARI, romaniWord: "Vica",        transcription: "ви́ца",     sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sosed",     dialect: Dialect.LOVARI, romaniWord: "Pasoro",      transcription: "пасоро́",   sources: ["ROMLEX:lov"],          confidence: FormConfidence.DRAFT },
  { conceptSlug: "gost",      dialect: Dialect.LOVARI, romaniWord: "Musafiri",    transcription: "мусафи́ри", sources: ["ROMLEX:lov"],          confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gospodin",  dialect: Dialect.LOVARI, romaniWord: "Raj",         transcription: "рай",       sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gospozha",  dialect: Dialect.LOVARI, romaniWord: "Rani",        transcription: "ра́ни",     sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gadzho",    dialect: Dialect.LOVARI, romaniWord: "Gažo",        transcription: "гажо́",     sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Город / деревня —
  { conceptSlug: "gorod",     dialect: Dialect.LOVARI, romaniWord: "Foros",       transcription: "фо́рос",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevnya",  dialect: Dialect.LOVARI, romaniWord: "Gav",         transcription: "гав",      sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Местоимения / вопросы —
  { conceptSlug: "ona",       dialect: Dialect.LOVARI, romaniWord: "Voj",         transcription: "вой",      sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nichego",   dialect: Dialect.LOVARI, romaniWord: "Khanč",       transcription: "кханч",    sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "otkuda",    dialect: Dialect.LOVARI, romaniWord: "Katar",       transcription: "ка́тар",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pochemu",   dialect: Dialect.LOVARI, romaniWord: "Soske",       transcription: "со́скэ",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },

  // — Время / наречия —
  { conceptSlug: "seychas",   dialect: Dialect.LOVARI, romaniWord: "Akana",       transcription: "ака́на",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "potom",     dialect: Dialect.LOVARI, romaniWord: "Pala",        transcription: "па́ла",    sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chas",      dialect: Dialect.LOVARI, romaniWord: "Óra",         transcription: "о́ра",     sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED, notes: "венгеризм 'óra'" },
  { conceptSlug: "bystro",    dialect: Dialect.LOVARI, romaniWord: "Sig",         transcription: "сиг",      sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "medlenno",  dialect: Dialect.LOVARI, romaniWord: "Lassan",      transcription: "ла́ссан",  sources: ["ROMLEX:lov"],            confidence: FormConfidence.DRAFT, notes: "венгеризм 'lassan'" },

  // — Прилагательные —
  { conceptSlug: "krasivyy",     dialect: Dialect.LOVARI, romaniWord: "Šukar",   transcription: "шу́кар",   sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zloy",         dialect: Dialect.LOVARI, romaniWord: "Žungalo", transcription: "жунгало́", sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vesyolyy",     dialect: Dialect.LOVARI, romaniWord: "Lošalo",  transcription: "лошало́",  sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grustnyy",     dialect: Dialect.LOVARI, romaniWord: "Tristo",  transcription: "три́сто",  sources: ["ROMLEX:lov"],            confidence: FormConfidence.DRAFT },
  { conceptSlug: "silnyy",       dialect: Dialect.LOVARI, romaniWord: "Zuralo",  transcription: "зурало́",  sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chistyy",      dialect: Dialect.LOVARI, romaniWord: "Žužo",    transcription: "жужо́",    sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "goryachiy",    dialect: Dialect.LOVARI, romaniWord: "Tato",    transcription: "тато́",    sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy-veshch",dialect: Dialect.LOVARI, romaniWord: "Purano",  transcription: "пурано́",  sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Глаголы —
  { conceptSlug: "plakat",       dialect: Dialect.LOVARI, romaniWord: "Te rovel",transcription: "тэ ровэ́л",sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "smeyatsya",    dialect: Dialect.LOVARI, romaniWord: "Te asal", transcription: "тэ аса́л", sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bezhat",       dialect: Dialect.LOVARI, romaniWord: "Te našel",    transcription: "тэ нашэ́л",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "iskat",        dialect: Dialect.LOVARI, romaniWord: "Te rodel",    transcription: "тэ родэ́л",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nakhodit",     dialect: Dialect.LOVARI, romaniWord: "Te arakhel",  transcription: "тэ аракхэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "brat-v-ruki",  dialect: Dialect.LOVARI, romaniWord: "Te lel",      transcription: "тэ лэл",       sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prinosit",     dialect: Dialect.LOVARI, romaniWord: "Te anel",     transcription: "тэ анэ́л",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "posylat",      dialect: Dialect.LOVARI, romaniWord: "Te bičhal",   transcription: "тэ бичха́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "otkryvat",     dialect: Dialect.LOVARI, romaniWord: "Te putrel",   transcription: "тэ путрэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zakryvat",     dialect: Dialect.LOVARI, romaniWord: "Te phandel",  transcription: "тэ пхандэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sprashivat",   dialect: Dialect.LOVARI, romaniWord: "Te pučhel",   transcription: "тэ пучхэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhdat",        dialect: Dialect.LOVARI, romaniWord: "Te ažukerel", transcription: "тэ ажукэрэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "chitat",       dialect: Dialect.LOVARI, romaniWord: "Te ginel",    transcription: "тэ гинэ́л",    sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "то же слово, что 'считать' в ряде контекстов" },
  { conceptSlug: "pisat",        dialect: Dialect.LOVARI, romaniWord: "Te iskirinel",transcription: "тэ искиринэ́л",sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zabyvat",      dialect: Dialect.LOVARI, romaniWord: "Te bisterel", transcription: "тэ бистэрэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pokazyvat",    dialect: Dialect.LOVARI, romaniWord: "Te sikavel",  transcription: "тэ сикавэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "uchit",        dialect: Dialect.LOVARI, romaniWord: "Te sikavel",  transcription: "тэ сикавэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "в значении 'обучать'" },
  { conceptSlug: "ponimat",      dialect: Dialect.LOVARI, romaniWord: "Te hatjarel", transcription: "тэ хатярэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nazyvat",      dialect: Dialect.LOVARI, romaniWord: "Te bušol",    transcription: "тэ бушо́л",     sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "букв. 'зваться, называться'" },
  { conceptSlug: "otvechat",     dialect: Dialect.LOVARI, romaniWord: "Te odphenel", transcription: "тэ одпхэнэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "povtoryat",    dialect: Dialect.LOVARI, romaniWord: "Te pala phenel", transcription: "тэ па́ла пхэнэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "буквально 'сказать снова'" },
  { conceptSlug: "obyasnyat",    dialect: Dialect.LOVARI, romaniWord: "Te mothavel", transcription: "тэ мотхавэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "soglashatsya", dialect: Dialect.LOVARI, romaniWord: "Te čačarel",  transcription: "тэ чачарэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "подтверждать как 'верно'" },
  { conceptSlug: "otkazyvatsya", dialect: Dialect.LOVARI, romaniWord: "Te či kamel", transcription: "тэ чи камэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "буквально 'не хотеть'" },
  { conceptSlug: "razreshat",    dialect: Dialect.LOVARI, romaniWord: "Te mukel",    transcription: "тэ мукэ́л",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED, notes: "пускать, позволять" },
  { conceptSlug: "zapreshchat",  dialect: Dialect.LOVARI, romaniWord: "Te či mukel", transcription: "тэ чи мукэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "буквально 'не позволять'" },
  { conceptSlug: "preduprezhdat",dialect: Dialect.LOVARI, romaniWord: "Te anglal phenel", transcription: "тэ англа́л пхэнэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT, notes: "буквально 'сказать заранее'" },
  { conceptSlug: "izvinyatsya",  dialect: Dialect.LOVARI, romaniWord: "Te iertisarel pes", transcription: "тэ иэртиса́рэл пэс", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "blagodarit",   dialect: Dialect.LOVARI, romaniWord: "Te palikerel", transcription: "тэ паликэрэ́л", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED, notes: "формула благодарности: palikerav" },

  // — Еда —
  { conceptSlug: "yabloko",   dialect: Dialect.LOVARI, romaniWord: "Phabaj",    transcription: "пхаба́й",    sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Бог, удача, музыка, дорога, время —
  { conceptSlug: "bog",       dialect: Dialect.LOVARI, romaniWord: "Del",       transcription: "дэл",        sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "udacha",    dialect: Dialect.LOVARI, romaniWord: "Baxt",      transcription: "бахт",       sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skripka",   dialect: Dialect.LOVARI, romaniWord: "Lavuta",    transcription: "лаву́та",     sources: ["ROMLEX:lov"],            confidence: FormConfidence.VERIFIED, notes: "румыно-венгерская традиция; центральный инструмент ловари" },
  { conceptSlug: "gitara",    dialect: Dialect.LOVARI, romaniWord: "Gitara",    transcription: "гита́ра",     sources: ["ROMLEX:lov"],            confidence: FormConfidence.DRAFT },
  { conceptSlug: "povozka",   dialect: Dialect.LOVARI, romaniWord: "Vurdon",    transcription: "вурдо́н",     sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nedelya",   dialect: Dialect.LOVARI, romaniWord: "Kurko",     transcription: "ку́рко",      sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Живые фразы —
  { conceptSlug: "kak-tebya-zovut", dialect: Dialect.LOVARI, romaniWord: "Sar bušol tu?", transcription: "сар бушо́л ту", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "ne-ponimayu",     dialect: Dialect.LOVARI, romaniWord: "Či hatjarav",   transcription: "чи ха́тярав",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "menya-zovut",     dialect: Dialect.LOVARI, romaniWord: "Muro anav si", transcription: "му́ро ана́в си", sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "ya-znayu",        dialect: Dialect.LOVARI, romaniWord: "Me žanav",     transcription: "мэ жа́нав",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-ne-znayu",     dialect: Dialect.LOVARI, romaniWord: "Či žanav",     transcription: "чи жа́нав",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skolko-stoit",    dialect: Dialect.LOVARI, romaniWord: "Sode mol?",    transcription: "со́дэ мол",    sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  {
    conceptSlug: "skolko-kolichestvo",
    dialect: Dialect.LOVARI,
    romaniWord: "Keti?",
    transcription: "ке́ти",
    sources: ["ROMLEX:lov"],
    confidence: FormConfidence.DRAFT,
    notes: "количество; см. Early Romani keti; в живой речи Lovari уточнять по носителю"
  },
  { conceptSlug: "idi-syuda",       dialect: Dialect.LOVARI, romaniWord: "Av kade",      transcription: "ав ка́дэ",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "podozhdi",        dialect: Dialect.LOVARI, romaniWord: "Užar",         transcription: "у́жар",        sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pomogi-mne",      dialect: Dialect.LOVARI, romaniWord: "Žutil ma",     transcription: "жу́тил ма",    sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "prosti",          dialect: Dialect.LOVARI, romaniWord: "Iertin ma",    transcription: "иэ́ртин ма",   sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pozhaluysta",     dialect: Dialect.LOVARI, romaniWord: "Mangav tu",    transcription: "ма́нгав ту",   sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "da",              dialect: Dialect.LOVARI, romaniWord: "Va",           transcription: "ва",            sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "konechno",        dialect: Dialect.LOVARI, romaniWord: "Čačes",        transcription: "чачэ́с",        sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ochen",           dialect: Dialect.LOVARI, romaniWord: "But",          transcription: "бут",           sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nemnogo",         dialect: Dialect.LOVARI, romaniWord: "Xancik",       transcription: "ха́нцик",       sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vmeste",          dialect: Dialect.LOVARI, romaniWord: "Khetane",      transcription: "кхэта́нэ",      sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skazhi-mne",      dialect: Dialect.LOVARI, romaniWord: "Phen mange",   transcription: "пхэн ма́нгэ",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-khochu",       dialect: Dialect.LOVARI, romaniWord: "Me kamav",     transcription: "мэ ка́мав",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-ne-khochu",    dialect: Dialect.LOVARI, romaniWord: "Či kamav",     transcription: "чи ка́мав",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto-novogo",     dialect: Dialect.LOVARI, romaniWord: "So nevo?",     transcription: "со нэво́",     sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },

  // — Дом —
  { conceptSlug: "okno",      dialect: Dialect.LOVARI, romaniWord: "Abláka",   transcription: "абла́ка",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED, notes: "венгеризм 'ablak'" },
  { conceptSlug: "stol",      dialect: Dialect.LOVARI, romaniWord: "Mesalja",  transcription: "мэса́ля",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "stul",      dialect: Dialect.LOVARI, romaniWord: "Skamín",   transcription: "сками́н",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krovat",    dialect: Dialect.LOVARI, romaniWord: "Pato",     transcription: "па́то",     sources: ["ROMLEX:lov"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "nozh",      dialect: Dialect.LOVARI, romaniWord: "Čhuri",    transcription: "чхури́",    sources: ["BOR1994", "ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "lozhka",    dialect: Dialect.LOVARI, romaniWord: "Roj",      transcription: "рой",        sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Части тела —
  { conceptSlug: "nos",       dialect: Dialect.LOVARI, romaniWord: "Nakh",     transcription: "накх",      sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yazyk",     dialect: Dialect.LOVARI, romaniWord: "Šib",      transcription: "шиб",       sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhivot",    dialect: Dialect.LOVARI, romaniWord: "Per",      transcription: "пэр",       sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kozha",     dialect: Dialect.LOVARI, romaniWord: "Morthi",   transcription: "мо́ртхи",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kost",      dialect: Dialect.LOVARI, romaniWord: "Kokalo",   transcription: "кока́ло",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grud",      dialect: Dialect.LOVARI, romaniWord: "Kolin",    transcription: "коли́н",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные —
  { conceptSlug: "tolstyy",   dialect: Dialect.LOVARI, romaniWord: "Thulo",    transcription: "тхуло́",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyazhelyy", dialect: Dialect.LOVARI, romaniWord: "Pharo",    transcription: "пхаро́",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tonkiy",    dialect: Dialect.LOVARI, romaniWord: "Sano",     transcription: "сано́",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gryaznyy",  dialect: Dialect.LOVARI, romaniWord: "Melalo",   transcription: "мэлало́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "polnyy",    dialect: Dialect.LOVARI, romaniWord: "Pherdo",   transcription: "пхэрдо́",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pryamoy",   dialect: Dialect.LOVARI, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravyy",    dialect: Dialect.LOVARI, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "levyy",     dialect: Dialect.LOVARI, romaniWord: "Bango",    transcription: "ба́нго",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sytyy",     dialect: Dialect.LOVARI, romaniWord: "Čalo",     transcription: "ча́ло",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Глаголы (основные) —
  { conceptSlug: "videt",     dialect: Dialect.LOVARI, romaniWord: "Te dikhel",  transcription: "тэ дикхэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "govorit",   dialect: Dialect.LOVARI, romaniWord: "Te phenel",  transcription: "тэ пхэнэ́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spat",      dialect: Dialect.LOVARI, romaniWord: "Te sovel",   transcription: "тэ совэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhit",      dialect: Dialect.LOVARI, romaniWord: "Te trail",   transcription: "тэ траи́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "umirat",    dialect: Dialect.LOVARI, romaniWord: "Te merel",   transcription: "тэ мэрэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "idti",      dialect: Dialect.LOVARI, romaniWord: "Te žal",     transcription: "тэ жал",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prikhodit", dialect: Dialect.LOVARI, romaniWord: "Te avel",    transcription: "тэ авэ́л",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "davat",     dialect: Dialect.LOVARI, romaniWord: "Te del",     transcription: "тэ дэл",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "znat",      dialect: Dialect.LOVARI, romaniWord: "Te žanel",   transcription: "тэ жанэ́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "est",       dialect: Dialect.LOVARI, romaniWord: "Te xal",     transcription: "тэ хал",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pit",       dialect: Dialect.LOVARI, romaniWord: "Te pijel",   transcription: "тэ пиэ́л",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "boyatsya",  dialect: Dialect.LOVARI, romaniWord: "Te daral",   transcription: "тэ дара́л",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "veter",     dialect: Dialect.LOVARI, romaniWord: "Balval",   transcription: "балва́л",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sneg",      dialect: Dialect.LOVARI, romaniWord: "Jiv",      transcription: "джив",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dym",       dialect: Dialect.LOVARI, romaniWord: "Thuv",     transcription: "тхув",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dozhd",     dialect: Dialect.LOVARI, romaniWord: "Brišind",  transcription: "бриши́нд", sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zmeya",     dialect: Dialect.LOVARI, romaniWord: "Sap",      transcription: "сап",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "list",      dialect: Dialect.LOVARI, romaniWord: "Patrin",   transcription: "патри́н",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yaytso",    dialect: Dialect.LOVARI, romaniWord: "Anro",     transcription: "анро́",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Время / семья / эмоции —
  { conceptSlug: "god",       dialect: Dialect.LOVARI, romaniWord: "Berš",     transcription: "бэрш",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhenshchina", dialect: Dialect.LOVARI, romaniWord: "Romni",   transcription: "ро́мни",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "muzhchina",   dialect: Dialect.LOVARI, romaniWord: "Manuš",   transcription: "ману́ш",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rebenok",     dialect: Dialect.LOVARI, romaniWord: "Šavoro",  transcription: "шаворо́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "imya",      dialect: Dialect.LOVARI, romaniWord: "Anav",     transcription: "ана́в",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "strakh",    dialect: Dialect.LOVARI, romaniWord: "Dar",      transcription: "дар",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravda",    dialect: Dialect.LOVARI, romaniWord: "Čačipe",   transcription: "чачипэ́",  sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },

  // — Местоимения / союзы —
  { conceptSlug: "vse",       dialect: Dialect.LOVARI, romaniWord: "Sa",       transcription: "са",      sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "i",         dialect: Dialect.LOVARI, romaniWord: "Thaj",     transcription: "тхай",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ne",        dialect: Dialect.LOVARI, romaniWord: "Či",       transcription: "чи",      sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zdes",      dialect: Dialect.LOVARI, romaniWord: "Kade",     transcription: "ка́дэ",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tam",       dialect: Dialect.LOVARI, romaniWord: "Kothe",    transcription: "ко́тхэ",   sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gde",       dialect: Dialect.LOVARI, romaniWord: "Kaj",      transcription: "кай",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kogda",     dialect: Dialect.LOVARI, romaniWord: "Kana",     transcription: "ка́на",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kak",       dialect: Dialect.LOVARI, romaniWord: "Sar",      transcription: "сар",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "blizko",    dialect: Dialect.LOVARI, romaniWord: "Paše",     transcription: "па́шэ",    sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "daleko",    dialect: Dialect.LOVARI, romaniWord: "Dur",      transcription: "дур",     sources: ["ROMLEX:lov"], confidence: FormConfidence.VERIFIED }
];
