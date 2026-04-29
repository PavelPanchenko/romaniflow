/**
 * Vlax/Kalderash dialect forms — Phase 3b. See servy.ts for conventions.
 */
import { Dialect, FormConfidence } from "@prisma/client";
import type { FormSeed } from "../concepts/types";

export const VLAX_FORMS: FormSeed[] = [
  // — Семья (canonical forms — раньше жили только в legacy backfill) —
  { conceptSlug: "brat",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phral", transcription: "пхрал", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },

  { conceptSlug: "loshad", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Grast", transcription: "граст",  sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dengi",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Love",  transcription: "ловэ́",   sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tabor",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tábor", transcription: "та́бор",  sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },
  { conceptSlug: "rabotat",dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te kerel butji", transcription: "тэ кэрэ́л бу́тьи", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "venitelní 'butji' — заимствование рум. 'butea'" },
  { conceptSlug: "pesnya", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Gilí",  transcription: "гили́",   sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },

  // — Местоимения (PRONOUN) —
  { conceptSlug: "ya",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Me",    transcription: "мэ",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ty",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tu",    transcription: "ту",    sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "on",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Vov",   transcription: "вов",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "my",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Ame",   transcription: "амэ́",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tume",  transcription: "тумэ́", sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "oni",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Von",   transcription: "вон",   sources: ["BOR1994"],              confidence: FormConfidence.DRAFT },
  { conceptSlug: "etot", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kado",  transcription: "ка́до",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tot",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kodo",  transcription: "ко́до",  sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kto",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kon",   transcription: "кон",   sources: ["MATRAS2002"],           confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto", dialect: Dialect.VLAX_KALDERASH, romaniWord: "So",    transcription: "со",    sources: ["MATRAS2002"],           confidence: FormConfidence.VERIFIED },

  // — Части тела (BODY) —
  { conceptSlug: "golova",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šero",  transcription: "шэ́ро",  sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ruka",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Vast",  transcription: "васт",   sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "noga",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Punro", transcription: "пунро́", sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "glaz",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Jakh",  transcription: "якх",    sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ukho",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kan",   transcription: "кан",    sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rot",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Muj",   transcription: "муй",    sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zub",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Dand",  transcription: "данд",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "serdtse", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Ilo",   transcription: "ило́",   sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krov",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Rat",   transcription: "рат",    sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },
  { conceptSlug: "volosy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bal",   transcription: "бал",    sources: ["BOR1994"],              confidence: FormConfidence.VERIFIED },

  // — Цвета —
  { conceptSlug: "krasnyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Lolo",   transcription: "ло́ло",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chernyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kalo",   transcription: "ка́ло",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "belyy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Parno",  transcription: "па́рно",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zelenyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Zeleno", transcription: "зэлэ́но", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "zheltyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Galbeno",transcription: "галбэ́но",sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм" },

  // — Бытовые —
  { conceptSlug: "segodnya", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Adádžes",   transcription: "ада́джес",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "vchera",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Aratji",    transcription: "арат́жи",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zavtra",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tehára",    transcription: "тэха́ра",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "utro",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tehára",    transcription: "тэха́ра",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vecher",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Rači",      transcription: "ра́чи",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "вечер и ночь — одно слово" },
  { conceptSlug: "golodnyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bokhalo",   transcription: "бокхало́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolnoy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Nasvalo",   transcription: "насвало́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ustalyy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Khino",     transcription: "кхино́",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "lyubov",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kamipe",    transcription: "камипэ́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kupit",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te kinel",  transcription: "тэ кинэ́л", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prodat",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te bikinel",transcription: "тэ бикинэ́л",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsena",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pretso",    transcription: "прэ́цо",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм 'preț'" },
  { conceptSlug: "bogatyy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Barvalo",   transcription: "барвало́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bednyy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čoro",      transcription: "чоро́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khotet",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te kamel",  transcription: "тэ камэ́л", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "moch",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te dašťi",  transcription: "тэ дашти́", sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pomoch",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te žutil",  transcription: "тэ жути́л", sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "prosit",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te mangel", transcription: "тэ мангэ́л",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные качества (Swadesh) —
  { conceptSlug: "novyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Nevo",   transcription: "нэво́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phuro",  transcription: "пхуро́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khoroshiy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Lačho",  transcription: "лачо́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "plokhoy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Žungalo",transcription: "жунгало́",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "также 'злой', 'дурной'" },
  { conceptSlug: "teplyy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tato",   transcription: "тато́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kholodnyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šudro",  transcription: "шудро́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "mokryy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kingo",  transcription: "кинго́",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "sukhoy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šuko",   transcription: "шуко́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolshoy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Baro",   transcription: "баро́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "malenkiy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Cikno",  transcription: "цикно́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "sobaka",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Žukel",  transcription: "жукэ́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ryba",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Mačho",  transcription: "мачо́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ptitsa",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čiriklo",transcription: "чирикло́",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevo",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kašt",   transcription: "кашт",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "trava",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čar",    transcription: "чар",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsvetok",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Luludji",transcription: "лулу́джи",sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "kamen",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bar",    transcription: "бар",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Доп. части тела —
  { conceptSlug: "sheya",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kor",    transcription: "кор",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spina",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Dumo",   transcription: "думо́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "koleno",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čang",   transcription: "чанг",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Расширенная семья —
  { conceptSlug: "babushka",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phuri daj", transcription: "пхури́ дай", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dedushka",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phuro dad", transcription: "пхуро́ дад", sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyotya",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bibi",      transcription: "би́би",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dyadya",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kako",      transcription: "ка́ко",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "molodoy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Terno",      transcription: "тэрно́",    sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starik",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phuro manuš",transcription: "пхуро́ ману́ш",sources: ["BOR1994"],             confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starukha",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phuri romni",transcription: "пхури́ ро́мни",sources: ["BOR1994"],             confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nevestka",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bori",       transcription: "бори́",     sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "semja",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Familija",   transcription: "фами́лия",  sources: ["BOR1994"],             confidence: FormConfidence.DRAFT },
  { conceptSlug: "rod",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Vica",       transcription: "ви́ца",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sosed",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pasoro",     transcription: "пасоро́",   sources: ["BOR1994"],             confidence: FormConfidence.DRAFT },
  { conceptSlug: "gost",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Musafiri",   transcription: "мусафи́ри", sources: ["BOR1994"],             confidence: FormConfidence.VERIFIED, notes: "вариант с конечным -i, типичный для vlax" },
  { conceptSlug: "gospodin",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Raj",        transcription: "рай",       sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gospozha",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Rani",       transcription: "ра́ни",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gadzho",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Gažo",       transcription: "гажо́",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "vlax: čh→š в gadžo→gažo" },

  // — Город / деревня —
  { conceptSlug: "gorod",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Foros",      transcription: "фо́рос",   sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevnya",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Gav",        transcription: "гав",      sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },

  // — Местоимения / вопросы —
  { conceptSlug: "ona",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Voj",        transcription: "вой",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nichego",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Khanč",      transcription: "кханч",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "otkuda",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Katar",      transcription: "ка́тар",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pochemu",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Soske",      transcription: "со́скэ",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Время / наречия —
  { conceptSlug: "seychas",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Akana",      transcription: "ака́на",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "potom",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pala",       transcription: "па́ла",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chas",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Časo",       transcription: "ча́со",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "bystro",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sig",        transcription: "сиг",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "medlenno",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Polokes",    transcription: "поло́кэс", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные —
  { conceptSlug: "krasivyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šukar",   transcription: "шу́кар",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zloy",         dialect: Dialect.VLAX_KALDERASH, romaniWord: "Žungalo", transcription: "жунгало́", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: dž→ž; то же слово, что 'плохой'" },
  { conceptSlug: "vesyolyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Lošalo",  transcription: "лошало́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grustnyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tristo",  transcription: "три́сто",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм" },
  { conceptSlug: "silnyy",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Zuralo",  transcription: "зурало́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chistyy",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Žužo",    transcription: "жужо́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "goryachiy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Tato",    transcription: "тато́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy-veshch",dialect: Dialect.VLAX_KALDERASH, romaniWord: "Purano",  transcription: "пурано́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Глаголы —
  { conceptSlug: "plakat",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te rovel",transcription: "тэ ровэ́л",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "smeyatsya",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te asal", transcription: "тэ аса́л", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Еда —
  { conceptSlug: "yabloko",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phabaj",    transcription: "пхаба́й",    sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED },

  // — Бог и судьба, музыка, дорога, время —
  { conceptSlug: "bog",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Del",       transcription: "дэл",        sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "udacha",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Baxt",      transcription: "бахт",       sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skripka",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Lavuta",    transcription: "лаву́та",     sources: ["BOR1994"],                 confidence: FormConfidence.VERIFIED, notes: "румынизм; характерно для vlax-зоны" },
  { conceptSlug: "gitara",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Gitara",    transcription: "гита́ра",     sources: ["MATRAS2002"],              confidence: FormConfidence.DRAFT },
  { conceptSlug: "povozka",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Vurdon",    transcription: "вурдо́н",     sources: ["BOR1994", "MATRAS2002"],   confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nedelya",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kurko",     transcription: "ку́рко",      sources: ["BOR1994", "MATRAS2002"],   confidence: FormConfidence.VERIFIED },

  // — Живые фразы —
  { conceptSlug: "kak-tebya-zovut", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sar tut bušol?", transcription: "сар тут бушо́л", sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "ne-ponimayu",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Či hatjarav",   transcription: "чи ха́тярав",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax-отрицание 'či' вместо 'na' перед глаголом" },
  { conceptSlug: "menya-zovut",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Muro anav si", transcription: "му́ро ана́в си", sources: ["MATRAS2002"], confidence: FormConfidence.DRAFT, notes: "vlax: 'si' (есть) вместо 'hin'" },
  { conceptSlug: "ya-znayu",        dialect: Dialect.VLAX_KALDERASH, romaniWord: "Me žanav",     transcription: "мэ жа́нав",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: 'ž' вместо 'dž'" },
  { conceptSlug: "ya-ne-znayu",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Či žanav",     transcription: "чи жа́нав",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skolko-stoit",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sode mol?",    transcription: "со́дэ мол",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "idi-syuda",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Av kade",      transcription: "ав ка́дэ",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "podozhdi",        dialect: Dialect.VLAX_KALDERASH, romaniWord: "Užar",         transcription: "у́жар",        sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pomogi-mne",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Žutil ma",     transcription: "жу́тил ма",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "prosti",          dialect: Dialect.VLAX_KALDERASH, romaniWord: "Iertisar ma",  transcription: "иэртиса́р ма", sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм через 'iertare'" },
  { conceptSlug: "pozhaluysta",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Mangav tu",    transcription: "ма́нгав ту",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "da",              dialect: Dialect.VLAX_KALDERASH, romaniWord: "Va",           transcription: "ва",            sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "konechno",        dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čačes",        transcription: "чачэ́с",        sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ochen",           dialect: Dialect.VLAX_KALDERASH, romaniWord: "But",          transcription: "бут",           sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nemnogo",         dialect: Dialect.VLAX_KALDERASH, romaniWord: "Xancik",       transcription: "ха́нцик",       sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vmeste",          dialect: Dialect.VLAX_KALDERASH, romaniWord: "Khetane",      transcription: "кхэта́нэ",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skazhi-mne",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phen mange",   transcription: "пхэн ма́нгэ",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-khochu",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Me kamav",     transcription: "мэ ка́мав",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-ne-khochu",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Či kamav",     transcription: "чи ка́мав",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: 'či' вместо 'na'" },
  { conceptSlug: "chto-novogo",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "So nevo?",     transcription: "со нэво́",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT },

  // — Дом —
  { conceptSlug: "okno",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Filjastra",  transcription: "фьля́стра",  sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "stol",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Mesalja",    transcription: "мэса́ля",    sources: ["BOR1994", "ROMLEX:vlx"], confidence: FormConfidence.VERIFIED, notes: "румынизм 'masă'" },
  { conceptSlug: "stul",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Skamín",     transcription: "сками́н",    sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krovat",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pato",       transcription: "па́то",      sources: ["BOR1994"],               confidence: FormConfidence.DRAFT },
  { conceptSlug: "nozh",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čhuri",      transcription: "чхури́",     sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "lozhka",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Roj",        transcription: "рой",         sources: ["BOR1994"],               confidence: FormConfidence.VERIFIED },

  // — Части тела (Swadesh) —
  { conceptSlug: "nos",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Nakh",     transcription: "накх",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yazyk",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šib",      transcription: "шиб",       sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: čh→š" },
  { conceptSlug: "zhivot",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Per",      transcription: "пэр",       sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kozha",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Morthi",   transcription: "мо́ртхи",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kost",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kokalo",   transcription: "кока́ло",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grud",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kolin",    transcription: "коли́н",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pechen",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bukno",    transcription: "бу́кно",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "stupnya",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Punro",    transcription: "пунро́",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },

  // — Прилагательные качества —
  { conceptSlug: "tolstyy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Thulo",    transcription: "тхуло́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyazhelyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pharo",    transcription: "пхаро́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tonkiy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sano",     transcription: "сано́",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "uzkiy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sano",     transcription: "сано́",     sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "то же слово, что 'тонкий'" },
  { conceptSlug: "dlinnyy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Lungo",    transcription: "лунго́",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм" },
  { conceptSlug: "korotkiy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Skurto",   transcription: "ску́рто",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "gryaznyy",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Melalo",   transcription: "мэлало́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "polnyy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pherdo",   transcription: "пхэрдо́",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ostryy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Skuto",    transcription: "ску́то",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "tupoy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Khaslo",   transcription: "кхасло́",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pryamoy",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravilnyy", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravyy",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čačo",     transcription: "ча́чо",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "levyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Bango",    transcription: "ба́нго",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sytyy",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čalo",     transcription: "ча́ло",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Глаголы —
  { conceptSlug: "videt",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te dikhel",  transcription: "тэ дикхэ́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "slyshat",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te šunel",   transcription: "тэ шунэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "govorit",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te phenel",  transcription: "тэ пхэнэ́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pet",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te djilavel",transcription: "тэ джилавэ́л",sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spat",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te sovel",   transcription: "тэ совэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhit",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te trail",   transcription: "тэ траи́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "румынизм 'a trăi'; в сэрвитском — 'te dživel'" },
  { conceptSlug: "umirat",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te merel",   transcription: "тэ мэрэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "idti",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te žal",     transcription: "тэ жал",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax j-произношение, без dž" },
  { conceptSlug: "prikhodit", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te avel",    transcription: "тэ авэ́л",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "davat",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te del",     transcription: "тэ дэл",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "igrat",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te khelel",  transcription: "тэ кхэлэ́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "myt",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te thovel",  transcription: "тэ тховэ́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dumat",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te gindil",  transcription: "тэ гинди́л",  sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "boyatsya",  dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te daral",   transcription: "тэ дара́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "znat",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te žanel",   transcription: "тэ жанэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "est",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te xal",     transcription: "тэ хал",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pit",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te pijel",   transcription: "тэ пиэ́л",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sidet",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te bešel",   transcription: "тэ бэшэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "stoyat",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te ačhel",   transcription: "тэ ачхэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "lezhat",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te pašlol",  transcription: "тэ пашло́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "padat",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te perel",   transcription: "тэ пэрэ́л",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "veter",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Balval",   transcription: "балва́л",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nebo",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čeri",     transcription: "че́ри",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sneg",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Jiv",      transcription: "джив",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dym",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Thuv",     transcription: "тхув",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gora",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Plaj",     transcription: "плай",    sources: ["BOR1994"], confidence: FormConfidence.DRAFT, notes: "румынизм" },
  { conceptSlug: "reka",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Len",      transcription: "лэн",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "more",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Derijav",  transcription: "дэрия́в",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "oblako",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Norji",    transcription: "норьи́",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "dozhd",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Brišind",  transcription: "бриши́нд", sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zmeya",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sap",      transcription: "сап",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "list",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Patrin",   transcription: "патри́н",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yaytso",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Anro",     transcription: "анро́",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: jandro→anro" },
  { conceptSlug: "rog",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šing",     transcription: "шинг",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khvost",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Pori",     transcription: "по́ри",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krylo",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Phak",     transcription: "пхак",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pero",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Por",      transcription: "пор",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Время —
  { conceptSlug: "god",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Berš",     transcription: "бэрш",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },

  // — Семья —
  { conceptSlug: "zhenshchina", dialect: Dialect.VLAX_KALDERASH, romaniWord: "Romni",   transcription: "ро́мни",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "muzhchina",   dialect: Dialect.VLAX_KALDERASH, romaniWord: "Manuš",   transcription: "ману́ш",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rebenok",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Šavoro",  transcription: "шаворо́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: čh→š" },

  // — Эмоции / отвлечённые —
  { conceptSlug: "imya",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Anav",     transcription: "ана́в",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "radost",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Loš",      transcription: "лош",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grust",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Briga",    transcription: "бри́га",   sources: ["BOR1994"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "strakh",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Dar",      transcription: "дар",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravda",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Čačipe",   transcription: "чачипэ́",  sources: ["BOR1994"], confidence: FormConfidence.VERIFIED, notes: "vlax: -ipe вместо -ipen" },

  // — Местоимения / союзы —
  { conceptSlug: "vse",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sa",       transcription: "са",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "i",         dialect: Dialect.VLAX_KALDERASH, romaniWord: "Thaj",     transcription: "тхай",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ne",        dialect: Dialect.VLAX_KALDERASH, romaniWord: "Či",       transcription: "чи",      sources: ["BOR1994", "MATRAS2002"], confidence: FormConfidence.VERIFIED, notes: "vlax-форма; в сэрвитском — 'na'" },
  { conceptSlug: "esli",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Te",       transcription: "тэ",      sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zdes",      dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kade",     transcription: "ка́дэ",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tam",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kothe",    transcription: "ко́тхэ",   sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gde",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kaj",      transcription: "кай",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kogda",     dialect: Dialect.VLAX_KALDERASH, romaniWord: "Kana",     transcription: "ка́на",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kak",       dialect: Dialect.VLAX_KALDERASH, romaniWord: "Sar",      transcription: "сар",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "blizko",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Paše",     transcription: "па́шэ",    sources: ["BOR1994"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "daleko",    dialect: Dialect.VLAX_KALDERASH, romaniWord: "Dur",      transcription: "дур",     sources: ["BOR1994"], confidence: FormConfidence.VERIFIED }
];
