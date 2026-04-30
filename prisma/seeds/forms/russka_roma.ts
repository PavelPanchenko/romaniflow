/**
 * Russka roma (Xaladytka Roma) forms — Phase 3c. See servy.ts for conventions.
 * This dialect is traditionally written in Cyrillic; transcription mirrors
 * the romaniWord but adds explicit stress marks.
 */
import { Dialect, FormConfidence } from "@prisma/client";
import type { FormSeed } from "../concepts/types";

export const RUSSKA_ROMA_FORMS: FormSeed[] = [
  // — Семья и обращения (canonical forms — раньше жили только в legacy backfill) —
  { conceptSlug: "brat",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пшал",   transcription: "пшал",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северная вариация: 'phr-' даёт 'пш-'" },
  { conceptSlug: "kak-ty", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сар ту?", transcription: "сар ту", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  { conceptSlug: "loshad", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Граст", transcription: "граст", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dengi",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ловэ",  transcription: "ловэ́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tabor",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Табор", transcription: "та́бор", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rabotat",dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ кэрэс бутя", transcription: "тэ кэрэ́с бу́тя", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pesnya", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Гилы", transcription: "гилы́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северная вариация: 'и' даёт 'ы'" },

  // — Местоимения (PRONOUN) —
  { conceptSlug: "ya",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэ",   transcription: "мэ",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ty",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ту",   transcription: "ту",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "on",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ёв",   transcription: "ёв",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "my",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Амэ",  transcription: "амэ́", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тумэ", transcription: "тумэ́",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "oni",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ёнэ",  transcription: "ёнэ́", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "etot", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Адава",transcription: "адава́",sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "tot",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Адова",transcription: "адова́",sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "kto",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кон",  transcription: "кон",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Со",   transcription: "со",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Части тела —
  { conceptSlug: "golova",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Шэро",  transcription: "шэ́ро",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ruka",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Васт",  transcription: "васт",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "noga",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пыро",  transcription: "пыро́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "ы вместо и — северная фонетика" },
  { conceptSlug: "glaz",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Якх",   transcription: "якх",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ukho",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кан",   transcription: "кан",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rot",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Муй",   transcription: "муй",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zub",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Данд",  transcription: "данд",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "serdtse", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Йило",  transcription: "йило́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krov",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Рат",   transcription: "рат",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "volosy",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бал",   transcription: "бал",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Цвета —
  { conceptSlug: "krasnyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лоло",  transcription: "ло́ло",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chernyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кало",  transcription: "ка́ло",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "belyy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Парно", transcription: "па́рно", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zelenyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Зэлэно",transcription: "зэлэ́но",sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zheltyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Жолто", transcription: "жо́лто", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "русизм" },

  // — Бытовые —
  { conceptSlug: "segodnya", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Адарик",   transcription: "адари́к",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "vchera",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Идж",      transcription: "идж",       sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zavtra",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тасья",    transcription: "тасья́",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "utro",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дэсыто",   transcription: "дэсы́то",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "vecher",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сарато",   transcription: "сара́то",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "golodnyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бокхало",  transcription: "бокхало́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolnoy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Насвало",  transcription: "насвало́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ustalyy",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кхино",    transcription: "кхино́",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "lyubov",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Камипэ",   transcription: "камипэ́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kupit",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ кинэл", transcription: "тэ кинэ́л", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prodat",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ бикнэл",transcription: "тэ бикнэ́л",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsena",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пэна",     transcription: "пэ́на",     sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "русизм" },
  { conceptSlug: "bogatyy",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Барвало",  transcription: "барвало́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bednyy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чёро",     transcription: "чёро́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khotet",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ камэл", transcription: "тэ камэ́л", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "moch",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ исы",   transcription: "тэ исы́",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pomoch",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ ужутякирэл",transcription: "тэ ужутякирэ́л",sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "prosit",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ мангэл",transcription: "тэ мангэ́л",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные качества —
  { conceptSlug: "novyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Нэво",   transcription: "нэво́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхуро",  transcription: "пхуро́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khoroshiy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лачё",   transcription: "лачё́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "plokhoy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Билачё", transcription: "билачё́", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "teplyy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тато",   transcription: "тато́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kholodnyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Шылало", transcription: "шылало́", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "mokryy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кинго",  transcription: "кинго́",  sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "sukhoy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Шуко",   transcription: "шуко́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "bolshoy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Баро",   transcription: "баро́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "malenkiy",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Цыкно",  transcription: "цыкно́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "sobaka",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Жуко",   transcription: "жуко́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ryba",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мачо",   transcription: "мачо́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ptitsa",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чириклы",transcription: "чириклы́",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevo",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кашт",   transcription: "кашт",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "trava",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чар",    transcription: "чар",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tsvetok",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лулуджы",transcription: "лулу́джы",sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "kamen",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бар",    transcription: "бар",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Доп. части тела —
  { conceptSlug: "sheya",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кор",    transcription: "кор",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "spina",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Думо",   transcription: "думо́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "koleno",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чанг",   transcription: "чанг",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Расширенная семья —
  { conceptSlug: "babushka",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхури дай", transcription: "пхури́ дай", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "буквально 'старая мать'" },
  { conceptSlug: "dedushka",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхуро дад", transcription: "пхуро́ дад", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyotya",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Биби",      transcription: "би́би",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dyadya",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Како",      transcription: "ка́ко",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "molodoy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэрно",       transcription: "тэрно́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starik",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхуро мануш", transcription: "пхуро́ ману́ш",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "starukha",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхуры ромны", transcription: "пхуры́ ромны́",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и" },
  { conceptSlug: "nevestka",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бори",        transcription: "бори́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "semja",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Семня",       transcription: "сэ́мня",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "русизм" },
  { conceptSlug: "rod",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Вы́ца",       transcription: "вы́ца",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и" },
  { conceptSlug: "sosed",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пашо́ро",     transcription: "пашо́ро",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "gost",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мусафи́р",    transcription: "мусафи́р",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gospodin",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Рай",         transcription: "рай",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "в северной традиции 'rajka' — богатый барин" },
  { conceptSlug: "gospozha",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ра́ны",       transcription: "ра́ны",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и" },
  { conceptSlug: "gadzho",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Гаджо",       transcription: "гаджо́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Город / деревня —
  { conceptSlug: "gorod",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Фо́рос",     transcription: "фо́рос",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "derevnya",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Гав",         transcription: "гав",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Местоимения / вопросы —
  { conceptSlug: "ona",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ёй",          transcription: "ёй",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. палатализация: voj→ёй" },
  { conceptSlug: "nichego",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кханчи́",    transcription: "кханчи́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "otkuda",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Катыр",       transcription: "ка́тыр",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и: katar→катыр" },
  { conceptSlug: "pochemu",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Соскэ́",      transcription: "соскэ́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Время / наречия —
  { conceptSlug: "seychas",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кана́",       transcription: "кана́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "то же слово, что 'когда'; в речи различается интонацией" },
  { conceptSlug: "potom",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Палэ́",       transcription: "палэ́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chas",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Часо́",       transcription: "часо́",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "bystro",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сы́г",        transcription: "сыг",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы" },
  { conceptSlug: "medlenno",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Поло́кэс",   transcription: "поло́кэс", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Прилагательные —
  { conceptSlug: "krasivyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Шукар",    transcription: "шу́кар",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zloy",         dialect: Dialect.RUSSKA_ROMA, romaniWord: "Джунгало", transcription: "джунгало́",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "vesyolyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лошало",   transcription: "лошало́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grustnyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бри́гало", transcription: "бри́гало", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "от briga; в речи также калькированный 'тристо'" },
  { conceptSlug: "silnyy",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Зурало́",  transcription: "зурало́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chistyy",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Жужо́",    transcription: "жужо́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "goryachiy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тато́",    transcription: "тато́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "staryy-veshch",dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пурано́",  transcription: "пурано́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Глаголы —
  { conceptSlug: "plakat",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ ровэ́с",transcription: "тэ ровэ́с",sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "smeyatsya",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ аса́с", transcription: "тэ аса́с", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. -эс окончание" },
  { conceptSlug: "bezhat",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ нашэ́с",      transcription: "тэ нашэ́с",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "iskat",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ родэ́с",      transcription: "тэ родэ́с",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nakhodit",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ аракхэ́с",    transcription: "тэ аракхэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "brat-v-ruki",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ лэс",         transcription: "тэ лэс",         sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prinosit",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ анэ́с",       transcription: "тэ анэ́с",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "posylat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ бичха́с",     transcription: "тэ бичха́с",     sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "otkryvat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ путрэ́с",     transcription: "тэ путрэ́с",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zakryvat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пхандэ́с",    transcription: "тэ пхандэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sprashivat",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пучхэ́с",     transcription: "тэ пучхэ́с",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhdat",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ аджукэрэ́с",  transcription: "тэ аджукэрэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "chitat",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ гинэ́с",      transcription: "тэ гинэ́с",      sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "северная форма; также 'считать'" },
  { conceptSlug: "pisat",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ искиринэ́с",  transcription: "тэ искиринэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "zabyvat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ бистэрэ́с",   transcription: "тэ бистэрэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pokazyvat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ сыкавэ́с",    transcription: "тэ сыкавэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "северная фонетика: ы вместо и" },
  { conceptSlug: "uchit",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ сыкавэ́с",    transcription: "тэ сыкавэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "в значении 'обучать'" },
  { conceptSlug: "ponimat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ полэ́с",      transcription: "тэ полэ́с",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северный глагол 'понимать'" },
  { conceptSlug: "nazyvat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ кхарэ́с",     transcription: "тэ кхарэ́с",     sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "звать, называть" },
  { conceptSlug: "otvechat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ отпхэнэ́с",   transcription: "тэ отпхэнэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "povtoryat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ палэ́ пхэнэ́с", transcription: "тэ палэ́ пхэнэ́с", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'сказать снова'" },
  { conceptSlug: "obyasnyat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ мотхавэ́с",   transcription: "тэ мотхавэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "soglashatsya", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ чячярэ́с",    transcription: "тэ чячярэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "подтверждать как 'верно'" },
  { conceptSlug: "otkazyvatsya", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ на камэ́с",   transcription: "тэ на камэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'не хотеть'" },
  { conceptSlug: "razreshat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ мукэ́с",      transcription: "тэ мукэ́с",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "пускать, позволять" },
  { conceptSlug: "zapreshchat",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ на мукэ́с",   transcription: "тэ на мукэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'не позволять'" },
  { conceptSlug: "preduprezhdat",dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ англа́л пхэнэ́с", transcription: "тэ англа́л пхэнэ́с", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'сказать заранее'" },
  { conceptSlug: "izvinyatsya",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ простиса́рэл пэс", transcription: "тэ простиса́рэл пэс", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "blagodarit",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ паликэрэ́с",  transcription: "тэ паликэрэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "формула благодарности: паликэрав" },

  // — Еда —
  { conceptSlug: "yabloko",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхабай",    transcription: "пхаба́й",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Бог, удача, дорога, время —
  { conceptSlug: "bog",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дэл",       transcription: "дэл",        sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "также с артиклем: 'О Дэл'" },
  { conceptSlug: "udacha",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бахт",      transcription: "бахт",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "povozka",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Урдо́н",     transcription: "урдо́н",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северная вариация: 'в-' опускается" },
  { conceptSlug: "nedelya",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Курко́",     transcription: "курко́",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Живые фразы —
  { conceptSlug: "kak-tebya-zovut", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сыр тут кхарэ́н?", transcription: "сыр тут кхарэ́н", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "ne-ponimayu",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "На полав",         transcription: "на пола́в",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "от тэ полэ́с — понимать" },
  { conceptSlug: "menya-zovut",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Муро лав",         transcription: "му́ро лав",       sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "'lav' — слово/имя в северной традиции" },
  { conceptSlug: "ya-znayu",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэ джинав",        transcription: "мэ джи́нав",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. джи́нав вместо общеромани джанав" },
  { conceptSlug: "ya-ne-znayu",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэ на джинав",     transcription: "мэ на джи́нав",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skolko-stoit",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кицик молы́?",     transcription: "ки́цик молы́",   sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  {
    conceptSlug: "skolko-kolichestvo",
    dialect: Dialect.RUSSKA_ROMA,
    romaniWord: "Кеци?",
    transcription: "ке́ци",
    sources: ["DEMETER1990"],
    confidence: FormConfidence.DRAFT,
    notes: "количество; орфография как в славяно-контактных учебных списках (keci); у Demeter для цены — отдельный оборот с mol"
  },
  { conceptSlug: "idi-syuda",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Яв адари́к",       transcription: "яв адари́к",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "'яв' — императив тэ авэ́с (приходить); 'адарик' — сюда" },
  { conceptSlug: "podozhdi",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Поджукир",         transcription: "поджу́кир",       sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "славянизм" },
  { conceptSlug: "pomogi-mne",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дэ ман васт",      transcription: "дэ ман васт",     sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'дай мне руку' — северный идиоматический оборот" },
  { conceptSlug: "prosti",          dialect: Dialect.RUSSKA_ROMA, romaniWord: "Простисáр ман",    transcription: "простиса́р ман",  sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "русизм" },
  { conceptSlug: "pozhaluysta",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Манга́в тут",      transcription: "манга́в тут",      sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "буквально 'прошу тебя'" },
  { conceptSlug: "da",              dialect: Dialect.RUSSKA_ROMA, romaniWord: "Я",                transcription: "я",                sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северная утвердительная частица; общеромани 'va/ova'" },
  { conceptSlug: "konechno",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чячэ́с",           transcription: "чячэ́с",           sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ochen",           dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бут",              transcription: "бут",              sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nemnogo",         dialect: Dialect.RUSSKA_ROMA, romaniWord: "Хадзы́к",          transcription: "хадзы́к",          sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "сев. вариант 'xancik'" },
  { conceptSlug: "vmeste",          dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кхэтанэ́",         transcription: "кхэтанэ́",         sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "skazhi-mne",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхэн ма́нгэ",      transcription: "пхэн ма́нгэ",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ya-khochu",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэ камам",         transcription: "мэ ка́мам",        sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. 1-е л. ед.ч. камам вместо kamav" },
  { conceptSlug: "ya-ne-khochu",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэ на камам",      transcription: "мэ на ка́мам",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "chto-novogo",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Со нэво́?",        transcription: "со нэво́",         sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },

  // — Дом —
  { conceptSlug: "okno",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Уны́ска",  transcription: "уны́ска",  sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "stol",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Скаминд",  transcription: "ска́минд", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "в Russka roma 'скамин' охватывает и стул, и стол" },
  { conceptSlug: "stul",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Скаминд",  transcription: "ска́минд", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krovat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пато",     transcription: "па́то",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "nozh",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чури",     transcription: "чури́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северный диалект: придыхание 'чх' часто упрощается" },
  { conceptSlug: "lozhka",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Рой",      transcription: "рой",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Части тела —
  { conceptSlug: "nos",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Накх",     transcription: "накх",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yazyk",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чиб",      transcription: "чиб",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhivot",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пэр",      transcription: "пэр",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kozha",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мортхи́",  transcription: "мортхи́",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kost",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кокало́",  transcription: "кока́ло",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grud",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Колы́н",   transcription: "колы́н",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и" },
  { conceptSlug: "stupnya",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пыро́",    transcription: "пыро́",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "тот же корень, что 'нога'" },

  // — Прилагательные —
  { conceptSlug: "tolstyy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тхуло",    transcription: "тхуло́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tyazhelyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхаро",    transcription: "пхаро́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tonkiy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сано",     transcription: "сано́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dlinnyy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лунго",    transcription: "лунго́",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "gryaznyy",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мэлало",   transcription: "мэлало́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "polnyy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхэрдо",   transcription: "пхэрдо́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "ostryy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Скуто",    transcription: "ску́то",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "pryamoy",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чячё",     transcription: "чячё́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. палатализация ча→чя" },
  { conceptSlug: "pravilnyy", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чячё",     transcription: "чячё́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravyy",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чячё",     transcription: "чячё́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "levyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Банго",    transcription: "ба́нго",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sytyy",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чяло",     transcription: "чя́ло",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Глаголы —
  { conceptSlug: "videt",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ дыкхэс",  transcription: "тэ дыкхэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. ы вместо и" },
  { conceptSlug: "slyshat",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ шунэс",   transcription: "тэ шунэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "govorit",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пхэнэс",  transcription: "тэ пхэнэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pet",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ багас",   transcription: "тэ бага́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северный вариант: gilavel→bagas" },
  { conceptSlug: "spat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ совэс",   transcription: "тэ совэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zhit",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ дживэс",  transcription: "тэ дживэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "umirat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ мэрэс",   transcription: "тэ мэрэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "idti",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ джяс",    transcription: "тэ джяс",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "prikhodit", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ авэс",    transcription: "тэ авэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "davat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ дэс",     transcription: "тэ дэс",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "igrat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ кхэлэс",  transcription: "тэ кхэлэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "myt",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ хала́вэс",transcription: "тэ хала́вэс", sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. xalavel вместо thovel" },
  { conceptSlug: "dumat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ годли́с",transcription: "тэ годли́с", sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "от 'годи' — ум" },
  { conceptSlug: "boyatsya",  dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ дара́с",  transcription: "тэ дара́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "znat",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ джинэс",  transcription: "тэ джинэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "est",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ хас",     transcription: "тэ хас",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pit",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пьес",    transcription: "тэ пьес",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sidet",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ бэшэс",   transcription: "тэ бэшэ́с",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "stoyat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ ачэс",    transcription: "тэ ачэ́с",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "lezhat",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пашлёс",  transcription: "тэ пашлё́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "padat",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ пэрэ́с",  transcription: "тэ пэрэ́с",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Природа —
  { conceptSlug: "veter",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Балва́л",   transcription: "балва́л",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "nebo",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чери́",     transcription: "чери́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "sneg",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ив",        transcription: "ив",        sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. вариант: jiv→ив (без палатализации)" },
  { conceptSlug: "dym",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тхув",      transcription: "тхув",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "reka",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лэн",       transcription: "лэн",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "more",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дэрья́в",   transcription: "дэрья́в",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "dozhd",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бришы́нд",  transcription: "бришы́нд",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zmeya",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сап",       transcription: "сап",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "list",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Патри́н",   transcription: "патри́н",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "yaytso",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Я́ндро",    transcription: "я́ндро",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rog",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Шынг",      transcription: "шынг",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "khvost",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "По́ры",     transcription: "по́ры",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "krylo",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пхак",      transcription: "пхак",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pero",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пор",       transcription: "пор",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Время —
  { conceptSlug: "god",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бэрш",     transcription: "бэрш",      sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Семья —
  { conceptSlug: "zhenshchina", dialect: Dialect.RUSSKA_ROMA, romaniWord: "Ромны́",   transcription: "ромны́",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "muzhchina",   dialect: Dialect.RUSSKA_ROMA, romaniWord: "Мануш",    transcription: "ману́ш",    sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "rebenok",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чяворо́",  transcription: "чяворо́",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Эмоции / отвлечённые —
  { conceptSlug: "imya",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лав",       transcription: "лав",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "северная традиция: 'lav' (слово/имя) вместо общеромани 'anav'" },
  { conceptSlug: "radost",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Лош",       transcription: "лош",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "grust",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Бри́га",    transcription: "бри́га",    sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT },
  { conceptSlug: "strakh",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дар",       transcription: "дар",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "pravda",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Чячипэ́н",  transcription: "чячипэ́н",  sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },

  // — Местоимения / союзы —
  { conceptSlug: "vse",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сарэ́",     transcription: "сарэ́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. форма; общеромани — 'sa/savorre'" },
  { conceptSlug: "i",         dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ",        transcription: "тэ",        sources: ["DEMETER1990"], confidence: FormConfidence.DRAFT, notes: "сев. соединительный союз; в русско-цыганской также часто 'и'" },
  { conceptSlug: "ne",        dialect: Dialect.RUSSKA_ROMA, romaniWord: "На",        transcription: "на",        sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "esli",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Тэ",        transcription: "тэ",        sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "zdes",      dialect: Dialect.RUSSKA_ROMA, romaniWord: "Адари́к",   transcription: "адари́к",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "tam",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Одори́к",   transcription: "одори́к",   sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "gde",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кай",       transcription: "кай",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kogda",     dialect: Dialect.RUSSKA_ROMA, romaniWord: "Кэдэ́",     transcription: "кэдэ́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "kak",       dialect: Dialect.RUSSKA_ROMA, romaniWord: "Сыр",       transcription: "сыр",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED, notes: "сев. вариант: sar→сыр" },
  { conceptSlug: "blizko",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Пашэ́",     transcription: "пашэ́",     sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED },
  { conceptSlug: "daleko",    dialect: Dialect.RUSSKA_ROMA, romaniWord: "Дур",       transcription: "дур",       sources: ["DEMETER1990"], confidence: FormConfidence.VERIFIED }
];
