/**
 * Master concept catalog. Source of truth for `/dictionary` content. Each
 * row defines one Russian-side meaning that can have up to 5 dialect forms
 * (see `prisma/seeds/forms/*.ts`).
 *
 * Status: BOOTSTRAP. The first ~40 entries below are the spine for
 * Phase 2 — high-frequency cross-dialect basics + a few showcase concepts
 * that already have rich data from the legacy seed. Continue expanding
 * toward Swadesh-207 + thematic fields per the plan.
 *
 * Conventions:
 *   • `slug` is ASCII transliteration of the Russian (kebab-case).
 *   • `frequencyRank` is hand-assigned, 1 = most needed for a beginner.
 *     Free vs Pro lessons are derived from rank in build-lessons.ts.
 *   • `swadeshIndex` only set if the concept is on the standard
 *     Swadesh-207 list (numbering per Comrie & Smith 1977).
 */
import { ConceptCategory } from "@prisma/client";
import type { ConceptSeed } from "./types";
import { SWADESH_207 } from "./swadesh";

const PROJECT_CONCEPTS: ConceptSeed[] = [
  // — Greetings & courtesy —
  { slug: "dobry-den",       translationRu: "Добрый день",   category: ConceptCategory.GREETING,  frequencyRank: 1 },
  { slug: "dobroe-utro",     translationRu: "Доброе утро",   category: ConceptCategory.GREETING,  frequencyRank: 2 },
  { slug: "dobroy-nochi",    translationRu: "Доброй ночи",   category: ConceptCategory.GREETING,  frequencyRank: 3 },
  { slug: "spasibo",         translationRu: "Спасибо",       category: ConceptCategory.GREETING,  frequencyRank: 4 },
  { slug: "spasibo-tebe",    translationRu: "Спасибо тебе",  category: ConceptCategory.GREETING,  frequencyRank: 5 },
  { slug: "zdorove",         translationRu: "Здоровье",      category: ConceptCategory.GREETING,  frequencyRank: 6, senseNote: "пожелание, не идиоматическое 'здравствуй'" },
  { slug: "bud-schastliv",   translationRu: "Будь счастлив", category: ConceptCategory.GREETING,  frequencyRank: 7 },
  { slug: "s-bogom",         translationRu: "С Богом",       category: ConceptCategory.GREETING,  frequencyRank: 8, senseNote: "при прощании" },
  { slug: "khorosho",        translationRu: "Хорошо",        category: ConceptCategory.GREETING,  frequencyRank: 9 },
  { slug: "kak-ty",          translationRu: "Как ты?",       category: ConceptCategory.PHRASE,    frequencyRank: 10 },

  // — Family —
  { slug: "chelovek",  translationRu: "Человек",      category: ConceptCategory.KINSHIP,  frequencyRank: 11, swadeshIndex: 38 },
  { slug: "tsygan-muzh",   translationRu: "Цыган, муж",   category: ConceptCategory.KINSHIP,  frequencyRank: 12, senseNote: "одно слово для 'цыгана' и 'мужа'" },
  { slug: "tsyganka-zhena",translationRu: "Цыганка, жена", category: ConceptCategory.KINSHIP, frequencyRank: 13, senseNote: "одно слово для 'цыганки' и 'жены'" },
  { slug: "brat",      translationRu: "Брат",         category: ConceptCategory.KINSHIP,  frequencyRank: 14 },
  { slug: "sestra",    translationRu: "Сестра",       category: ConceptCategory.KINSHIP,  frequencyRank: 15 },
  { slug: "otets",     translationRu: "Отец",         category: ConceptCategory.KINSHIP,  frequencyRank: 16, swadeshIndex: 43 },
  { slug: "mat",       translationRu: "Мать",         category: ConceptCategory.KINSHIP,  frequencyRank: 17, swadeshIndex: 42 },
  { slug: "syn",       translationRu: "Сын, мальчик", category: ConceptCategory.KINSHIP,  frequencyRank: 18 },
  { slug: "doch",      translationRu: "Дочь, девочка",category: ConceptCategory.KINSHIP,  frequencyRank: 19 },
  { slug: "drug",      translationRu: "Друг",         category: ConceptCategory.KINSHIP,  frequencyRank: 20 },
  { slug: "babushka",  translationRu: "Бабушка",      category: ConceptCategory.KINSHIP,  frequencyRank: 25 },
  { slug: "dedushka",  translationRu: "Дедушка",      category: ConceptCategory.KINSHIP,  frequencyRank: 26 },
  { slug: "tyotya",    translationRu: "Тётя",         category: ConceptCategory.KINSHIP,  frequencyRank: 27 },
  { slug: "dyadya",    translationRu: "Дядя",         category: ConceptCategory.KINSHIP,  frequencyRank: 28 },
  { slug: "molodoy",   translationRu: "Молодой",      category: ConceptCategory.KINSHIP,  frequencyRank: 29, senseNote: "также 'жених, молодожён' в свадебном контексте" },
  { slug: "starik",    translationRu: "Старик",       category: ConceptCategory.KINSHIP,  frequencyRank: 30, senseNote: "буквально 'старый человек'; в романи 'phuro' покрывает и прилагательное 'старый', и существительное 'старик'" },
  { slug: "starukha",  translationRu: "Старуха",      category: ConceptCategory.KINSHIP,  frequencyRank: 31, senseNote: "буквально 'старая женщина'" },
  { slug: "nevestka",  translationRu: "Невестка",     category: ConceptCategory.KINSHIP,  frequencyRank: 32, senseNote: "также 'невеста' в свадебном контексте; общеромани, индоарийск." },
  { slug: "semja",     translationRu: "Семья",        category: ConceptCategory.KINSHIP,  frequencyRank: 33, senseNote: "также 'род', 'родня'" },
  { slug: "rod",       translationRu: "Род",          category: ConceptCategory.KINSHIP,  frequencyRank: 34, senseNote: "клан, большой родственный круг — ключевое понятие у рома" },
  { slug: "sosed",     translationRu: "Сосед",        category: ConceptCategory.KINSHIP,  frequencyRank: 35 },
  { slug: "gost",      translationRu: "Гость",        category: ConceptCategory.KINSHIP,  frequencyRank: 36 },
  { slug: "gospodin",  translationRu: "Господин",     category: ConceptCategory.KINSHIP,  frequencyRank: 37, senseNote: "также 'барин', обращение к старшему уважаемому мужчине" },
  { slug: "gospozha",  translationRu: "Госпожа",      category: ConceptCategory.KINSHIP,  frequencyRank: 38, senseNote: "также 'барыня'" },
  { slug: "gadzho",    translationRu: "Не-цыган",     category: ConceptCategory.KINSHIP,  frequencyRank: 39, senseNote: "ключевое романи-различение: rom (рома) vs gadžo (нерома)" },

  // — Home & food —
  { slug: "dom",       translationRu: "Дом",          category: ConceptCategory.HOME,  frequencyRank: 21 },
  { slug: "dver",      translationRu: "Дверь",        category: ConceptCategory.HOME,  frequencyRank: 22 },
  { slug: "okno",      translationRu: "Окно",         category: ConceptCategory.HOME,  frequencyRank: 33 },
  { slug: "stol",      translationRu: "Стол",         category: ConceptCategory.HOME,  frequencyRank: 34 },
  { slug: "stul",      translationRu: "Стул",         category: ConceptCategory.HOME,  frequencyRank: 35 },
  { slug: "krovat",    translationRu: "Кровать",      category: ConceptCategory.HOME,  frequencyRank: 36 },
  { slug: "nozh",      translationRu: "Нож",          category: ConceptCategory.HOME,  frequencyRank: 37 },
  { slug: "lozhka",    translationRu: "Ложка",        category: ConceptCategory.HOME,  frequencyRank: 38 },
  { slug: "gorod",     translationRu: "Город",        category: ConceptCategory.HOME,  frequencyRank: 39 },
  { slug: "derevnya",  translationRu: "Деревня",      category: ConceptCategory.HOME,  frequencyRank: 40 },
  { slug: "voda",      translationRu: "Вода",         category: ConceptCategory.HOME,  frequencyRank: 23, swadeshIndex: 150 },
  { slug: "khleb",     translationRu: "Хлеб",         category: ConceptCategory.FOOD,  frequencyRank: 24 },
  { slug: "myaso",     translationRu: "Мясо",         category: ConceptCategory.FOOD,  frequencyRank: 25, swadeshIndex: 63 },
  { slug: "moloko",    translationRu: "Молоко",       category: ConceptCategory.FOOD,  frequencyRank: 26 },
  { slug: "sol",       translationRu: "Соль",         category: ConceptCategory.FOOD,  frequencyRank: 27, swadeshIndex: 155 },
  { slug: "vino",      translationRu: "Вино",         category: ConceptCategory.FOOD,  frequencyRank: 28 },
  { slug: "chay",      translationRu: "Чай",          category: ConceptCategory.FOOD,  frequencyRank: 29 },
  { slug: "yabloko",   translationRu: "Яблоко",       category: ConceptCategory.FOOD,  frequencyRank: 31 },
  { slug: "syr",       translationRu: "Сыр",          category: ConceptCategory.FOOD,  frequencyRank: 32 },

  // — Nature & time —
  { slug: "solntse",   translationRu: "Солнце",       category: ConceptCategory.NATURE, frequencyRank: 30, swadeshIndex: 147 },
  { slug: "luna",      translationRu: "Луна, месяц",  category: ConceptCategory.NATURE, frequencyRank: 31, swadeshIndex: 148 },
  { slug: "zvezda",    translationRu: "Звезда",       category: ConceptCategory.NATURE, frequencyRank: 32, swadeshIndex: 149 },
  { slug: "dozhd",     translationRu: "Дождь",        category: ConceptCategory.NATURE, frequencyRank: 33, swadeshIndex: 151 },
  { slug: "zemlya",    translationRu: "Земля",        category: ConceptCategory.NATURE, frequencyRank: 34, swadeshIndex: 159 },
  { slug: "doroga",    translationRu: "Путь, дорога", category: ConceptCategory.ROAD_HORSE, frequencyRank: 35, swadeshIndex: 170 },
  { slug: "ogon",      translationRu: "Огонь",        category: ConceptCategory.NATURE, frequencyRank: 36, swadeshIndex: 167 },
  { slug: "den",       translationRu: "День",         category: ConceptCategory.TIME,   frequencyRank: 37, swadeshIndex: 178 },
  { slug: "noch",      translationRu: "Ночь",         category: ConceptCategory.TIME,   frequencyRank: 38, swadeshIndex: 177 },

  // — Numerals (Swadesh 22-26) —
  { slug: "odin",      translationRu: "Один",         category: ConceptCategory.NUMERAL, frequencyRank: 40, swadeshIndex: 22 },
  { slug: "dva",       translationRu: "Два",          category: ConceptCategory.NUMERAL, frequencyRank: 41, swadeshIndex: 23 },
  { slug: "tri",       translationRu: "Три",          category: ConceptCategory.NUMERAL, frequencyRank: 42, swadeshIndex: 24 },
  { slug: "chetyre",   translationRu: "Четыре",       category: ConceptCategory.NUMERAL, frequencyRank: 43, swadeshIndex: 25 },
  { slug: "pyat",      translationRu: "Пять",         category: ConceptCategory.NUMERAL, frequencyRank: 44, swadeshIndex: 26 },

  // — Romani-specific cultural lexicon (showcases the new forms pipeline) —
  { slug: "loshad",   translationRu: "Лошадь",  category: ConceptCategory.ROAD_HORSE,   frequencyRank: 60, senseNote: "ключевое слово ремесла; ловари = 'конники'" },
  { slug: "dengi",    translationRu: "Деньги",  category: ConceptCategory.ROAD_HORSE,   frequencyRank: 61 },
  { slug: "tabor",    translationRu: "Табор",   category: ConceptCategory.ROAD_HORSE,   frequencyRank: 62, senseNote: "цыганский лагерь, кочевая стоянка" },
  { slug: "rabotat",  translationRu: "Работать",category: ConceptCategory.VERB_ACTION,  frequencyRank: 63 },
  { slug: "pesnya",   translationRu: "Песня",   category: ConceptCategory.MUSIC_CRAFT,  frequencyRank: 64 },
  { slug: "tanets",   translationRu: "Танец",   category: ConceptCategory.MUSIC_CRAFT,  frequencyRank: 67 },
  { slug: "gitara",   translationRu: "Гитара",  category: ConceptCategory.MUSIC_CRAFT,  frequencyRank: 69 },
  { slug: "skripka",  translationRu: "Скрипка", category: ConceptCategory.MUSIC_CRAFT,  frequencyRank: 70, senseNote: "центральный инструмент в романи-музыке" },

  // Религия и судьба — ключевые культурные понятия
  { slug: "bog",      translationRu: "Бог",     category: ConceptCategory.RELIGION_FATE, frequencyRank: 65, senseNote: "часто с артиклем: 'O Del'" },
  { slug: "udacha",   translationRu: "Удача",   category: ConceptCategory.RELIGION_FATE, frequencyRank: 66, senseNote: "ключевое понятие культуры рома; пожелание 'Te aves baxtalo'" },
  { slug: "molitva",  translationRu: "Молитва", category: ConceptCategory.RELIGION_FATE, frequencyRank: 71 },

  // Дорога, ремесло — расширение
  { slug: "povozka",  translationRu: "Повозка", category: ConceptCategory.ROAD_HORSE,  frequencyRank: 72, senseNote: "кочевая телега; ключевой образ традиционной жизни" },

  // Время суток уже было ниже; добавим неделю в общую секцию рангов
  { slug: "nedelya",  translationRu: "Неделя",  category: ConceptCategory.TIME,        frequencyRank: 73 },

  // Живые фразы для разговора
  { slug: "kak-tebya-zovut", translationRu: "Как тебя зовут?", category: ConceptCategory.PHRASE, frequencyRank: 11 },
  { slug: "ne-ponimayu",     translationRu: "Не понимаю",      category: ConceptCategory.PHRASE, frequencyRank: 12 },
  { slug: "menya-zovut",     translationRu: "Меня зовут",      category: ConceptCategory.PHRASE, frequencyRank: 13, senseNote: "буквально 'имя моё (есть)…'" },
  { slug: "ya-znayu",        translationRu: "Я знаю",          category: ConceptCategory.PHRASE, frequencyRank: 14 },
  { slug: "ya-ne-znayu",     translationRu: "Я не знаю",       category: ConceptCategory.PHRASE, frequencyRank: 15 },
  { slug: "skolko-stoit",    translationRu: "Сколько стоит?",  category: ConceptCategory.PHRASE, frequencyRank: 16 },
  { slug: "idi-syuda",       translationRu: "Иди сюда",        category: ConceptCategory.PHRASE, frequencyRank: 17, senseNote: "буквально 'приходи сюда' (av — императив te avel)" },
  { slug: "podozhdi",        translationRu: "Подожди",         category: ConceptCategory.PHRASE, frequencyRank: 18 },
  { slug: "pomogi-mne",      translationRu: "Помоги мне",      category: ConceptCategory.PHRASE, frequencyRank: 19 },
  { slug: "prosti",          translationRu: "Прости",          category: ConceptCategory.PHRASE, frequencyRank: 20 },
  { slug: "pozhaluysta",     translationRu: "Пожалуйста",      category: ConceptCategory.PHRASE, frequencyRank: 21, senseNote: "буквально 'прошу тебя'" },
  { slug: "da",              translationRu: "Да",              category: ConceptCategory.PHRASE, frequencyRank: 22 },
  { slug: "konechno",        translationRu: "Точно, правильно", category: ConceptCategory.PHRASE, frequencyRank: 23, senseNote: "наречие от čačo 'истинный'; в речи как реакция согласия — там, где русский говорит 'точно!', 'именно!', 'конечно!' (по функции, не по букве)" },
  { slug: "ochen",           translationRu: "Очень",           category: ConceptCategory.PHRASE, frequencyRank: 24, senseNote: "то же слово, что 'много' — but/zorales" },
  { slug: "nemnogo",         translationRu: "Немного",         category: ConceptCategory.PHRASE, frequencyRank: 25 },
  { slug: "vmeste",          translationRu: "Вместе",          category: ConceptCategory.PHRASE, frequencyRank: 26 },
  { slug: "skazhi-mne",      translationRu: "Скажи мне",       category: ConceptCategory.PHRASE, frequencyRank: 27 },
  { slug: "ya-khochu",       translationRu: "Я хочу",          category: ConceptCategory.PHRASE, frequencyRank: 28 },
  { slug: "ya-ne-khochu",    translationRu: "Я не хочу",       category: ConceptCategory.PHRASE, frequencyRank: 29 },
  { slug: "chto-novogo",     translationRu: "Что нового?",     category: ConceptCategory.PHRASE, frequencyRank: 30 },

  // — Бытовая лексика за пределами Swadesh (Phase «В») —
  // Время суток и календарь
  { slug: "segodnya", translationRu: "Сегодня", category: ConceptCategory.TIME, frequencyRank: 250 },
  { slug: "vchera",   translationRu: "Вчера",   category: ConceptCategory.TIME, frequencyRank: 251 },
  { slug: "zavtra",   translationRu: "Завтра",  category: ConceptCategory.TIME, frequencyRank: 252 },
  { slug: "utro",     translationRu: "Утро",    category: ConceptCategory.TIME, frequencyRank: 253 },
  { slug: "vecher",   translationRu: "Вечер",   category: ConceptCategory.TIME, frequencyRank: 254 },

  // Состояния и самочувствие
  { slug: "golodnyy", translationRu: "Голодный", category: ConceptCategory.ADJECTIVE, frequencyRank: 260 },
  { slug: "sytyy",    translationRu: "Сытый",    category: ConceptCategory.ADJECTIVE, frequencyRank: 261 },
  { slug: "ustalyy",  translationRu: "Уставший", category: ConceptCategory.ADJECTIVE, frequencyRank: 262 },
  { slug: "bolnoy",   translationRu: "Больной",  category: ConceptCategory.ADJECTIVE, frequencyRank: 263 },

  // Местоимения / вопросы / время — пропуски Swadesh
  { slug: "ona",      translationRu: "Она",      category: ConceptCategory.PRONOUN, frequencyRank: 47 },
  { slug: "nichego",  translationRu: "Ничего",   category: ConceptCategory.PRONOUN, frequencyRank: 51 },
  { slug: "otkuda",   translationRu: "Откуда",   category: ConceptCategory.PREPOSITION, frequencyRank: 60 },
  { slug: "pochemu",  translationRu: "Почему",   category: ConceptCategory.PREPOSITION, frequencyRank: 61 },
  { slug: "seychas",  translationRu: "Сейчас",   category: ConceptCategory.TIME, frequencyRank: 255 },
  { slug: "potom",    translationRu: "Потом",    category: ConceptCategory.TIME, frequencyRank: 256 },
  { slug: "chas",     translationRu: "Час",      category: ConceptCategory.TIME, frequencyRank: 257 },

  // Прилагательные — расширение
  { slug: "krasivyy",    translationRu: "Красивый",  category: ConceptCategory.ADJECTIVE, frequencyRank: 290 },
  { slug: "zloy",        translationRu: "Злой",      category: ConceptCategory.ADJECTIVE, frequencyRank: 291 },
  { slug: "vesyolyy",    translationRu: "Весёлый",   category: ConceptCategory.ADJECTIVE, frequencyRank: 292 },
  { slug: "grustnyy",    translationRu: "Грустный",  category: ConceptCategory.ADJECTIVE, frequencyRank: 293 },
  { slug: "silnyy",      translationRu: "Сильный",   category: ConceptCategory.ADJECTIVE, frequencyRank: 294 },
  { slug: "chistyy",     translationRu: "Чистый",    category: ConceptCategory.ADJECTIVE, frequencyRank: 295 },
  { slug: "goryachiy",   translationRu: "Горячий",   category: ConceptCategory.ADJECTIVE, frequencyRank: 296, senseNote: "в романи `tato` покрывает 'тёплый/горячий'; различение по контексту" },
  { slug: "staryy-veshch", translationRu: "Старый (про вещь)", category: ConceptCategory.ADJECTIVE, frequencyRank: 297, senseNote: "семантический сплит: phuro = старый одушевл. (старик), purano = старый неодушевл. (поношенное, ветхое)" },

  // Глаголы — пропуски эмоциональных
  { slug: "plakat",      translationRu: "Плакать",   category: ConceptCategory.VERB_ACTION, frequencyRank: 200 },

  // Наречия скорости
  { slug: "bystro",      translationRu: "Быстро",    category: ConceptCategory.OTHER, frequencyRank: 285 },
  { slug: "medlenno",    translationRu: "Медленно",  category: ConceptCategory.OTHER, frequencyRank: 286 },

  // Эмоции
  { slug: "radost",   translationRu: "Радость",  category: ConceptCategory.OTHER, frequencyRank: 270 },
  { slug: "grust",    translationRu: "Грусть",   category: ConceptCategory.OTHER, frequencyRank: 271 },
  { slug: "lyubov",   translationRu: "Любовь",   category: ConceptCategory.OTHER, frequencyRank: 272 },
  { slug: "strakh",   translationRu: "Страх",    category: ConceptCategory.OTHER, frequencyRank: 273 },
  { slug: "pravda",   translationRu: "Правда",   category: ConceptCategory.OTHER, frequencyRank: 274 },

  // Торговля, деньги
  { slug: "kupit",    translationRu: "Купить",   category: ConceptCategory.VERB_ACTION,  frequencyRank: 280 },
  { slug: "prodat",   translationRu: "Продать",  category: ConceptCategory.VERB_ACTION,  frequencyRank: 281 },
  { slug: "tsena",    translationRu: "Цена",     category: ConceptCategory.ROAD_HORSE,   frequencyRank: 282 },
  { slug: "bogatyy",  translationRu: "Богатый",  category: ConceptCategory.ADJECTIVE,    frequencyRank: 283 },
  { slug: "bednyy",   translationRu: "Бедный",   category: ConceptCategory.ADJECTIVE,    frequencyRank: 284 },

  // Ещё несколько важных глаголов
  { slug: "khotet",   translationRu: "Хотеть",   category: ConceptCategory.VERB_SPEECH,  frequencyRank: 290 },
  { slug: "moch",     translationRu: "Мочь",     category: ConceptCategory.VERB_ACTION,  frequencyRank: 291 },
  { slug: "pomoch",   translationRu: "Помочь",   category: ConceptCategory.VERB_ACTION,  frequencyRank: 292 },
  { slug: "prosit",   translationRu: "Просить",  category: ConceptCategory.VERB_SPEECH,  frequencyRank: 293 }
];

// Combined export. Project concepts come first; Swadesh-207 expansion fills
// the remaining ranks. The lint script enforces global slug uniqueness.
export const CONCEPTS: ConceptSeed[] = [...PROJECT_CONCEPTS, ...SWADESH_207];
