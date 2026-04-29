import { Dialect } from "@prisma/client";
import type { CourseSeed } from "./types";

/**
 * Русска рома (Xaladytka Roma) — северная славянская группа.
 * Опорные источники: советские словари (Деметер, Сергиевский),
 * современные публикации фольклора и песен.
 *
 * Характерные отличия от сэрвов:
 *   • часто пишется кириллицей; широко используются «ё» и «ы»
 *   • dyves вместо dives, palykav как «благодарю»
 *   • čon — луна, вместо čhon (с придыхательной)
 *   • udar вместо vudar
 *   • пшал/пшэн с заметной аффрикатной парой [pš] вместо [pxr]
 */
export const russkaRomaCourse: CourseSeed = {
  slug: "russka-roma",
  title: "Русска рома · северная славянская группа",
  description:
    "Курс для русских цыган. Кириллический транскрипт, русский фонетический пласт, песенно-балладная лексика.",
  dialect: Dialect.RUSSKA_ROMA,
  shortLabel: "Русска рома",
  isAvailable: true
};
