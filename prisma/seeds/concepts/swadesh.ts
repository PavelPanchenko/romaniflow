/**
 * Swadesh-207 universal core vocabulary list, in Russian.
 *
 * This is the standard linguistic comparison list (Comrie & Smith 1977
 * arrangement of Swadesh 1955/1971). The numerical `swadeshIndex` is just
 * a unique 1..207 tag indicating membership — exact ordinal is not load-
 * bearing. Translations are literal per project convention.
 *
 * Phase 2 status: concepts here MAY or MAY NOT have dialect forms yet.
 * `/dictionary` hides formless concepts by default and exposes them via
 * `?show=all` for editorial work.
 *
 * Concepts already present in master.ts (e.g. "Брат", "Вода") should NOT
 * be duplicated here; they get their swadeshIndex updated in master.ts
 * directly. The lint script enforces slug uniqueness across all sources.
 */
import { ConceptCategory } from "@prisma/client";
import type { ConceptSeed } from "./types";

export const SWADESH_207: ConceptSeed[] = [
  // — Pronouns and deixis (1-15) —
  { slug: "ya",         translationRu: "Я",          category: ConceptCategory.PRONOUN,    frequencyRank: 45,  swadeshIndex: 1 },
  { slug: "ty",         translationRu: "Ты",         category: ConceptCategory.PRONOUN,    frequencyRank: 46,  swadeshIndex: 2 },
  { slug: "on",         translationRu: "Он",         category: ConceptCategory.PRONOUN,    frequencyRank: 47,  swadeshIndex: 3 },
  { slug: "my",         translationRu: "Мы",         category: ConceptCategory.PRONOUN,    frequencyRank: 48,  swadeshIndex: 4 },
  { slug: "vy",         translationRu: "Вы",         category: ConceptCategory.PRONOUN,    frequencyRank: 49,  swadeshIndex: 5 },
  { slug: "oni",        translationRu: "Они",        category: ConceptCategory.PRONOUN,    frequencyRank: 50,  swadeshIndex: 6 },
  { slug: "etot",       translationRu: "Этот",       category: ConceptCategory.PRONOUN,    frequencyRank: 51,  swadeshIndex: 7 },
  { slug: "tot",        translationRu: "Тот",        category: ConceptCategory.PRONOUN,    frequencyRank: 52,  swadeshIndex: 8 },
  { slug: "zdes",       translationRu: "Здесь",      category: ConceptCategory.PREPOSITION,frequencyRank: 53,  swadeshIndex: 9 },
  { slug: "tam",        translationRu: "Там",        category: ConceptCategory.PREPOSITION,frequencyRank: 54,  swadeshIndex: 10 },
  { slug: "kto",        translationRu: "Кто",        category: ConceptCategory.PRONOUN,    frequencyRank: 55,  swadeshIndex: 11 },
  { slug: "chto",       translationRu: "Что",        category: ConceptCategory.PRONOUN,    frequencyRank: 56,  swadeshIndex: 12 },
  { slug: "gde",        translationRu: "Где",        category: ConceptCategory.PREPOSITION,frequencyRank: 57,  swadeshIndex: 13 },
  { slug: "kogda",      translationRu: "Когда",      category: ConceptCategory.PREPOSITION,frequencyRank: 58,  swadeshIndex: 14 },
  { slug: "kak",        translationRu: "Как",        category: ConceptCategory.PREPOSITION,frequencyRank: 59,  swadeshIndex: 15 },

  // — Quantifiers and basic logic (16-21) —
  { slug: "ne",         translationRu: "Не",         category: ConceptCategory.PREPOSITION,frequencyRank: 65,  swadeshIndex: 16, senseNote: "отрицание" },
  { slug: "vse",        translationRu: "Все",        category: ConceptCategory.PRONOUN,    frequencyRank: 66,  swadeshIndex: 17 },
  { slug: "mnogo",      translationRu: "Много",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 67,  swadeshIndex: 18 },
  { slug: "neskolko",   translationRu: "Несколько",  category: ConceptCategory.ADJECTIVE,  frequencyRank: 68,  swadeshIndex: 19 },
  { slug: "malo",       translationRu: "Мало",       category: ConceptCategory.ADJECTIVE,  frequencyRank: 69,  swadeshIndex: 20 },
  { slug: "drugoy",     translationRu: "Другой",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 70,  swadeshIndex: 21 },

  // — Numerals (22-26): уже в master.ts (odin, dva, tri, chetyre, pyat) —

  // — Size adjectives (27-35) —
  { slug: "bolshoy",    translationRu: "Большой",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 71,  swadeshIndex: 27 },
  { slug: "dlinnyy",    translationRu: "Длинный",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 72,  swadeshIndex: 28 },
  { slug: "shirokiy",   translationRu: "Широкий",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 73,  swadeshIndex: 29 },
  { slug: "tolstyy",    translationRu: "Толстый",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 74,  swadeshIndex: 30 },
  { slug: "tyazhelyy",  translationRu: "Тяжёлый",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 75,  swadeshIndex: 31 },
  { slug: "malenkiy",   translationRu: "Маленький",  category: ConceptCategory.ADJECTIVE,  frequencyRank: 76,  swadeshIndex: 32 },
  { slug: "korotkiy",   translationRu: "Короткий",   category: ConceptCategory.ADJECTIVE,  frequencyRank: 77,  swadeshIndex: 33 },
  { slug: "uzkiy",      translationRu: "Узкий",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 78,  swadeshIndex: 34 },
  { slug: "tonkiy",     translationRu: "Тонкий",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 79,  swadeshIndex: 35 },

  // — Family extensions (36-43): mat/otets уже в master, добавляем остальные —
  { slug: "zhenshchina",translationRu: "Женщина",    category: ConceptCategory.KINSHIP,    frequencyRank: 80,  swadeshIndex: 36 },
  { slug: "muzhchina",  translationRu: "Мужчина",    category: ConceptCategory.KINSHIP,    frequencyRank: 81,  swadeshIndex: 37 },
  { slug: "rebenok",    translationRu: "Ребёнок",    category: ConceptCategory.KINSHIP,    frequencyRank: 82,  swadeshIndex: 39 },
  { slug: "zhena",      translationRu: "Жена",       category: ConceptCategory.KINSHIP,    frequencyRank: 83,  swadeshIndex: 40, senseNote: "у цыган часто покрывается общим словом 'romni'" },
  { slug: "muzh",       translationRu: "Муж",        category: ConceptCategory.KINSHIP,    frequencyRank: 84,  swadeshIndex: 41, senseNote: "у цыган часто покрывается общим словом 'rom'" },

  // — Animals and plants (44-55) —
  { slug: "zhivotnoe",  translationRu: "Животное",   category: ConceptCategory.NATURE,     frequencyRank: 100, swadeshIndex: 44 },
  { slug: "ryba",       translationRu: "Рыба",       category: ConceptCategory.NATURE,     frequencyRank: 101, swadeshIndex: 45 },
  { slug: "ptitsa",     translationRu: "Птица",      category: ConceptCategory.NATURE,     frequencyRank: 102, swadeshIndex: 46 },
  { slug: "sobaka",     translationRu: "Собака",     category: ConceptCategory.NATURE,     frequencyRank: 103, swadeshIndex: 47 },
  { slug: "vosh",       translationRu: "Вошь",       category: ConceptCategory.NATURE,     frequencyRank: 104, swadeshIndex: 48 },
  { slug: "zmeya",      translationRu: "Змея",       category: ConceptCategory.NATURE,     frequencyRank: 105, swadeshIndex: 49 },
  { slug: "cherv",      translationRu: "Червь",      category: ConceptCategory.NATURE,     frequencyRank: 106, swadeshIndex: 50 },
  { slug: "derevo",     translationRu: "Дерево",     category: ConceptCategory.NATURE,     frequencyRank: 107, swadeshIndex: 51 },
  { slug: "les",        translationRu: "Лес",        category: ConceptCategory.NATURE,     frequencyRank: 108, swadeshIndex: 52 },
  { slug: "palka",      translationRu: "Палка",      category: ConceptCategory.NATURE,     frequencyRank: 109, swadeshIndex: 53 },
  { slug: "plod",       translationRu: "Плод",       category: ConceptCategory.FOOD,       frequencyRank: 110, swadeshIndex: 54 },
  { slug: "semya",      translationRu: "Семя",       category: ConceptCategory.NATURE,     frequencyRank: 111, swadeshIndex: 55 },

  // — Body parts and substances (56-91): myaso уже в master —
  { slug: "list",       translationRu: "Лист",       category: ConceptCategory.NATURE,     frequencyRank: 112, swadeshIndex: 57, senseNote: "лист дерева" },
  { slug: "koren",      translationRu: "Корень",     category: ConceptCategory.NATURE,     frequencyRank: 113, swadeshIndex: 58 },
  { slug: "kora",       translationRu: "Кора",       category: ConceptCategory.NATURE,     frequencyRank: 114, swadeshIndex: 59 },
  { slug: "tsvetok",    translationRu: "Цветок",     category: ConceptCategory.NATURE,     frequencyRank: 115, swadeshIndex: 60 },
  { slug: "trava",      translationRu: "Трава",      category: ConceptCategory.NATURE,     frequencyRank: 116, swadeshIndex: 61 },
  { slug: "verevka",    translationRu: "Верёвка",    category: ConceptCategory.HOME,       frequencyRank: 117, swadeshIndex: 62 },
  { slug: "kozha",      translationRu: "Кожа",       category: ConceptCategory.BODY,       frequencyRank: 85,  swadeshIndex: 64 },
  { slug: "krov",       translationRu: "Кровь",      category: ConceptCategory.BODY,       frequencyRank: 86,  swadeshIndex: 65 },
  { slug: "kost",       translationRu: "Кость",      category: ConceptCategory.BODY,       frequencyRank: 87,  swadeshIndex: 66 },
  { slug: "zhir",       translationRu: "Жир",        category: ConceptCategory.BODY,       frequencyRank: 88,  swadeshIndex: 67 },
  { slug: "yaytso",     translationRu: "Яйцо",       category: ConceptCategory.FOOD,       frequencyRank: 118, swadeshIndex: 68 },
  { slug: "rog",        translationRu: "Рог",        category: ConceptCategory.NATURE,     frequencyRank: 119, swadeshIndex: 69 },
  { slug: "khvost",     translationRu: "Хвост",      category: ConceptCategory.NATURE,     frequencyRank: 120, swadeshIndex: 70 },
  { slug: "pero",       translationRu: "Перо",       category: ConceptCategory.NATURE,     frequencyRank: 121, swadeshIndex: 71 },
  { slug: "volosy",     translationRu: "Волосы",     category: ConceptCategory.BODY,       frequencyRank: 89,  swadeshIndex: 72 },
  { slug: "golova",     translationRu: "Голова",     category: ConceptCategory.BODY,       frequencyRank: 90,  swadeshIndex: 73 },
  { slug: "ukho",       translationRu: "Ухо",        category: ConceptCategory.BODY,       frequencyRank: 91,  swadeshIndex: 74 },
  { slug: "glaz",       translationRu: "Глаз",       category: ConceptCategory.BODY,       frequencyRank: 92,  swadeshIndex: 75 },
  { slug: "nos",        translationRu: "Нос",        category: ConceptCategory.BODY,       frequencyRank: 93,  swadeshIndex: 76 },
  { slug: "rot",        translationRu: "Рот",        category: ConceptCategory.BODY,       frequencyRank: 94,  swadeshIndex: 77 },
  { slug: "zub",        translationRu: "Зуб",        category: ConceptCategory.BODY,       frequencyRank: 95,  swadeshIndex: 78 },
  { slug: "yazyk",      translationRu: "Язык",       category: ConceptCategory.BODY,       frequencyRank: 96,  swadeshIndex: 79, senseNote: "анатомический орган и средство речи" },
  { slug: "nogot",      translationRu: "Ноготь",     category: ConceptCategory.BODY,       frequencyRank: 122, swadeshIndex: 80 },
  { slug: "stupnya",    translationRu: "Стопа",      category: ConceptCategory.BODY,       frequencyRank: 123, swadeshIndex: 81 },
  { slug: "noga",       translationRu: "Нога",       category: ConceptCategory.BODY,       frequencyRank: 97,  swadeshIndex: 82 },
  { slug: "koleno",     translationRu: "Колено",     category: ConceptCategory.BODY,       frequencyRank: 124, swadeshIndex: 83 },
  { slug: "ruka",       translationRu: "Рука",       category: ConceptCategory.BODY,       frequencyRank: 98,  swadeshIndex: 84 },
  { slug: "krylo",      translationRu: "Крыло",      category: ConceptCategory.NATURE,     frequencyRank: 125, swadeshIndex: 85 },
  { slug: "zhivot",     translationRu: "Живот",      category: ConceptCategory.BODY,       frequencyRank: 99,  swadeshIndex: 86 },
  { slug: "kishki",     translationRu: "Кишки",      category: ConceptCategory.BODY,       frequencyRank: 126, swadeshIndex: 87 },
  { slug: "sheya",      translationRu: "Шея",        category: ConceptCategory.BODY,       frequencyRank: 127, swadeshIndex: 88 },
  { slug: "spina",      translationRu: "Спина",      category: ConceptCategory.BODY,       frequencyRank: 128, swadeshIndex: 89 },
  { slug: "grud",       translationRu: "Грудь",      category: ConceptCategory.BODY,       frequencyRank: 129, swadeshIndex: 90 },
  { slug: "serdtse",    translationRu: "Сердце",     category: ConceptCategory.BODY,       frequencyRank: 130, swadeshIndex: 91 },
  { slug: "pechen",     translationRu: "Печень",     category: ConceptCategory.BODY,       frequencyRank: 131, swadeshIndex: 92 },

  // — Verbs (92-146) —
  { slug: "pit",        translationRu: "Пить",       category: ConceptCategory.VERB_ACTION,frequencyRank: 132, swadeshIndex: 93 },
  { slug: "est",        translationRu: "Есть, кушать",category: ConceptCategory.VERB_ACTION,frequencyRank: 133, swadeshIndex: 94 },
  { slug: "kusat",      translationRu: "Кусать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 134, swadeshIndex: 95 },
  { slug: "sosat",      translationRu: "Сосать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 135, swadeshIndex: 96 },
  { slug: "plevat",     translationRu: "Плевать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 136, swadeshIndex: 97 },
  { slug: "rvat",       translationRu: "Тошнить",    category: ConceptCategory.VERB_ACTION,frequencyRank: 137, swadeshIndex: 98, senseNote: "извергать съеденное" },
  { slug: "dut",        translationRu: "Дуть",       category: ConceptCategory.VERB_ACTION,frequencyRank: 138, swadeshIndex: 99 },
  { slug: "dyshat",     translationRu: "Дышать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 139, swadeshIndex: 100 },
  { slug: "smeyatsya",  translationRu: "Смеяться",   category: ConceptCategory.VERB_ACTION,frequencyRank: 140, swadeshIndex: 101 },
  { slug: "videt",      translationRu: "Видеть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 141, swadeshIndex: 102 },
  { slug: "slyshat",    translationRu: "Слышать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 142, swadeshIndex: 103 },
  { slug: "znat",       translationRu: "Знать",      category: ConceptCategory.VERB_SPEECH,frequencyRank: 143, swadeshIndex: 104 },
  { slug: "dumat",      translationRu: "Думать",     category: ConceptCategory.VERB_SPEECH,frequencyRank: 144, swadeshIndex: 105 },
  { slug: "nyukhat",    translationRu: "Нюхать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 145, swadeshIndex: 106 },
  { slug: "boyatsya",   translationRu: "Бояться",    category: ConceptCategory.VERB_SPEECH,frequencyRank: 146, swadeshIndex: 107 },
  { slug: "spat",       translationRu: "Спать",      category: ConceptCategory.VERB_ACTION,frequencyRank: 147, swadeshIndex: 108 },
  { slug: "zhit",       translationRu: "Жить",       category: ConceptCategory.VERB_ACTION,frequencyRank: 148, swadeshIndex: 109 },
  { slug: "umirat",     translationRu: "Умирать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 149, swadeshIndex: 110 },
  { slug: "ubivat",     translationRu: "Убивать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 150, swadeshIndex: 111 },
  { slug: "dratsya",    translationRu: "Драться",    category: ConceptCategory.VERB_ACTION,frequencyRank: 151, swadeshIndex: 112 },
  { slug: "okhotitsya", translationRu: "Охотиться",  category: ConceptCategory.VERB_ACTION,frequencyRank: 152, swadeshIndex: 113 },
  { slug: "udaryat",    translationRu: "Ударять",    category: ConceptCategory.VERB_ACTION,frequencyRank: 153, swadeshIndex: 114 },
  { slug: "rezat",      translationRu: "Резать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 154, swadeshIndex: 115 },
  { slug: "raskolot",   translationRu: "Расколоть",  category: ConceptCategory.VERB_ACTION,frequencyRank: 155, swadeshIndex: 116 },
  { slug: "kolot",      translationRu: "Колоть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 156, swadeshIndex: 117, senseNote: "острым предметом" },
  { slug: "tsarapat",   translationRu: "Царапать",   category: ConceptCategory.VERB_ACTION,frequencyRank: 157, swadeshIndex: 118 },
  { slug: "kopat",      translationRu: "Копать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 158, swadeshIndex: 119 },
  { slug: "plavat",     translationRu: "Плавать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 159, swadeshIndex: 120 },
  { slug: "letat",      translationRu: "Летать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 160, swadeshIndex: 121 },
  { slug: "idti",       translationRu: "Идти",       category: ConceptCategory.VERB_ACTION,frequencyRank: 161, swadeshIndex: 122 },
  { slug: "prikhodit",  translationRu: "Приходить",  category: ConceptCategory.VERB_ACTION,frequencyRank: 162, swadeshIndex: 123 },
  { slug: "lezhat",     translationRu: "Лежать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 163, swadeshIndex: 124 },
  { slug: "sidet",      translationRu: "Сидеть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 164, swadeshIndex: 125 },
  { slug: "stoyat",     translationRu: "Стоять",     category: ConceptCategory.VERB_ACTION,frequencyRank: 165, swadeshIndex: 126 },
  { slug: "povorachivat",translationRu: "Поворачивать",category: ConceptCategory.VERB_ACTION,frequencyRank: 166, swadeshIndex: 127 },
  { slug: "padat",      translationRu: "Падать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 167, swadeshIndex: 128 },
  { slug: "davat",      translationRu: "Давать",     category: ConceptCategory.VERB_ACTION,frequencyRank: 168, swadeshIndex: 129 },
  { slug: "derzhat",    translationRu: "Держать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 169, swadeshIndex: 130 },
  { slug: "szhimat",    translationRu: "Сжимать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 170, swadeshIndex: 131 },
  { slug: "teret",      translationRu: "Тереть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 171, swadeshIndex: 132 },
  { slug: "myt",        translationRu: "Мыть",       category: ConceptCategory.VERB_ACTION,frequencyRank: 172, swadeshIndex: 133 },
  { slug: "vytirat",    translationRu: "Вытирать",   category: ConceptCategory.VERB_ACTION,frequencyRank: 173, swadeshIndex: 134 },
  { slug: "tyanut",     translationRu: "Тянуть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 174, swadeshIndex: 135 },
  { slug: "tolkat",     translationRu: "Толкать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 175, swadeshIndex: 136 },
  { slug: "brosat",     translationRu: "Бросать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 176, swadeshIndex: 137 },
  { slug: "svyazyvat",  translationRu: "Связывать",  category: ConceptCategory.VERB_ACTION,frequencyRank: 177, swadeshIndex: 138 },
  { slug: "shit",       translationRu: "Шить",       category: ConceptCategory.VERB_ACTION,frequencyRank: 178, swadeshIndex: 139 },
  { slug: "schitat",    translationRu: "Считать",    category: ConceptCategory.VERB_ACTION,frequencyRank: 179, swadeshIndex: 140 },
  { slug: "govorit",    translationRu: "Говорить",   category: ConceptCategory.VERB_SPEECH,frequencyRank: 180, swadeshIndex: 141 },
  { slug: "pet",        translationRu: "Петь",       category: ConceptCategory.VERB_SPEECH,frequencyRank: 181, swadeshIndex: 142 },
  { slug: "igrat",      translationRu: "Играть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 182, swadeshIndex: 143 },
  { slug: "plyt",       translationRu: "Плыть",      category: ConceptCategory.VERB_ACTION,frequencyRank: 183, swadeshIndex: 144, senseNote: "двигаться по поверхности воды" },
  { slug: "tech",       translationRu: "Течь",       category: ConceptCategory.VERB_ACTION,frequencyRank: 184, swadeshIndex: 145 },
  { slug: "zamerzat",   translationRu: "Замерзать",  category: ConceptCategory.VERB_ACTION,frequencyRank: 185, swadeshIndex: 146 },
  { slug: "nabukhat",   translationRu: "Набухать",   category: ConceptCategory.VERB_ACTION,frequencyRank: 186, swadeshIndex: 147 },

  // — Geography & weather (148-171): solntse, luna, zvezda, voda, dozhd, sol, zemlya, ogon уже в master —
  { slug: "reka",       translationRu: "Река",       category: ConceptCategory.NATURE,     frequencyRank: 187, swadeshIndex: 152 },
  { slug: "ozero",      translationRu: "Озеро",      category: ConceptCategory.NATURE,     frequencyRank: 188, swadeshIndex: 153 },
  { slug: "more",       translationRu: "Море",       category: ConceptCategory.NATURE,     frequencyRank: 189, swadeshIndex: 154 },
  { slug: "kamen",      translationRu: "Камень",     category: ConceptCategory.NATURE,     frequencyRank: 190, swadeshIndex: 156 },
  { slug: "pesok",      translationRu: "Песок",      category: ConceptCategory.NATURE,     frequencyRank: 191, swadeshIndex: 157 },
  { slug: "pyl",        translationRu: "Пыль",       category: ConceptCategory.NATURE,     frequencyRank: 192, swadeshIndex: 158 },
  { slug: "oblako",     translationRu: "Облако",     category: ConceptCategory.NATURE,     frequencyRank: 193, swadeshIndex: 160 },
  { slug: "tuman",      translationRu: "Туман",      category: ConceptCategory.NATURE,     frequencyRank: 194, swadeshIndex: 161 },
  { slug: "nebo",       translationRu: "Небо",       category: ConceptCategory.NATURE,     frequencyRank: 195, swadeshIndex: 162 },
  { slug: "veter",      translationRu: "Ветер",      category: ConceptCategory.NATURE,     frequencyRank: 196, swadeshIndex: 163 },
  { slug: "sneg",       translationRu: "Снег",       category: ConceptCategory.NATURE,     frequencyRank: 197, swadeshIndex: 164 },
  { slug: "lyod",       translationRu: "Лёд",        category: ConceptCategory.NATURE,     frequencyRank: 198, swadeshIndex: 165 },
  { slug: "dym",        translationRu: "Дым",        category: ConceptCategory.NATURE,     frequencyRank: 199, swadeshIndex: 166 },
  { slug: "pepel",      translationRu: "Пепел",      category: ConceptCategory.NATURE,     frequencyRank: 200, swadeshIndex: 168 },
  { slug: "goret",      translationRu: "Гореть",     category: ConceptCategory.VERB_ACTION,frequencyRank: 201, swadeshIndex: 169 },
  { slug: "gora",       translationRu: "Гора",       category: ConceptCategory.NATURE,     frequencyRank: 202, swadeshIndex: 171 },

  // — Colours (172-176) —
  { slug: "krasnyy",    translationRu: "Красный",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 203, swadeshIndex: 172 },
  { slug: "zelenyy",    translationRu: "Зелёный",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 204, swadeshIndex: 173 },
  { slug: "zheltyy",    translationRu: "Жёлтый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 205, swadeshIndex: 174 },
  { slug: "belyy",      translationRu: "Белый",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 206, swadeshIndex: 175 },
  { slug: "chernyy",    translationRu: "Чёрный",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 207, swadeshIndex: 176 },

  // — Time (177-179): den/noch уже в master —
  { slug: "god",        translationRu: "Год",        category: ConceptCategory.TIME,       frequencyRank: 208, swadeshIndex: 179 },

  // — Qualities (180-196) —
  { slug: "teplyy",     translationRu: "Тёплый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 209, swadeshIndex: 180 },
  { slug: "kholodnyy",  translationRu: "Холодный",   category: ConceptCategory.ADJECTIVE,  frequencyRank: 210, swadeshIndex: 181 },
  { slug: "polnyy",     translationRu: "Полный",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 211, swadeshIndex: 182 },
  { slug: "novyy",      translationRu: "Новый",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 212, swadeshIndex: 183 },
  { slug: "staryy",     translationRu: "Старый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 213, swadeshIndex: 184 },
  { slug: "khoroshiy",  translationRu: "Хороший",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 214, swadeshIndex: 185 },
  { slug: "plokhoy",    translationRu: "Плохой",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 215, swadeshIndex: 186 },
  { slug: "gniloy",     translationRu: "Гнилой",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 216, swadeshIndex: 187 },
  { slug: "gryaznyy",   translationRu: "Грязный",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 217, swadeshIndex: 188 },
  { slug: "pryamoy",    translationRu: "Прямой",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 218, swadeshIndex: 189 },
  { slug: "kruglyy",    translationRu: "Круглый",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 219, swadeshIndex: 190 },
  { slug: "ostryy",     translationRu: "Острый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 220, swadeshIndex: 191 },
  { slug: "tupoy",      translationRu: "Тупой",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 221, swadeshIndex: 192, senseNote: "не острый (про лезвие)" },
  { slug: "gladkiy",    translationRu: "Гладкий",    category: ConceptCategory.ADJECTIVE,  frequencyRank: 222, swadeshIndex: 193 },
  { slug: "mokryy",     translationRu: "Мокрый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 223, swadeshIndex: 194 },
  { slug: "sukhoy",     translationRu: "Сухой",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 224, swadeshIndex: 195 },
  { slug: "pravilnyy",  translationRu: "Правильный", category: ConceptCategory.ADJECTIVE,  frequencyRank: 225, swadeshIndex: 196 },

  // — Spatial / relational (197-207) —
  { slug: "blizko",     translationRu: "Близко",     category: ConceptCategory.PREPOSITION,frequencyRank: 226, swadeshIndex: 197 },
  { slug: "daleko",     translationRu: "Далеко",     category: ConceptCategory.PREPOSITION,frequencyRank: 227, swadeshIndex: 198 },
  { slug: "pravyy",     translationRu: "Правый",     category: ConceptCategory.ADJECTIVE,  frequencyRank: 228, swadeshIndex: 199 },
  { slug: "levyy",      translationRu: "Левый",      category: ConceptCategory.ADJECTIVE,  frequencyRank: 229, swadeshIndex: 200 },
  { slug: "u",          translationRu: "У",          category: ConceptCategory.PREPOSITION,frequencyRank: 230, swadeshIndex: 201, senseNote: "у кого/чего: 'возле'" },
  { slug: "v",          translationRu: "В",          category: ConceptCategory.PREPOSITION,frequencyRank: 231, swadeshIndex: 202, senseNote: "внутри" },
  { slug: "s",          translationRu: "С",          category: ConceptCategory.PREPOSITION,frequencyRank: 232, swadeshIndex: 203, senseNote: "вместе с" },
  { slug: "i",          translationRu: "И",          category: ConceptCategory.PREPOSITION,frequencyRank: 233, swadeshIndex: 204, senseNote: "соединительный союз" },
  { slug: "esli",       translationRu: "Если",       category: ConceptCategory.PREPOSITION,frequencyRank: 234, swadeshIndex: 205 },
  { slug: "potomu-chto",translationRu: "Потому что", category: ConceptCategory.PREPOSITION,frequencyRank: 235, swadeshIndex: 206 },
  { slug: "imya",       translationRu: "Имя",        category: ConceptCategory.OTHER,      frequencyRank: 236, swadeshIndex: 207 }
];
