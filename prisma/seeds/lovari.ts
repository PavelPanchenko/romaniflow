import { Dialect } from "@prisma/client";
import type { CourseSeed } from "./types";

/**
 * Lovari (Lovara) — венгерская ветвь vlax-семьи.
 * Опорные источники: венгерские учебники цыганского, песенный фольклор,
 * международные публикации по vlax romani.
 *
 * Характерные отличия:
 *   • djes / dyes (вместо dives), kothar — «откуда»
 *   • явное палатальное nj (Romnji)
 *   • «sj» вместо «sem» в копуле: sjom — «я есть»
 *   • часть лексики через венгерский (например, «kerel butji» — «работать»)
 */
export const lovariCourse: CourseSeed = {
  slug: "lovari",
  title: "Ловари · венгерская ветвь",
  description:
    "Курс на ловари — диалекте «конников». Vlax-основа с венгерским пластом и богатой песенной традицией.",
  dialect: Dialect.LOVARI,
  shortLabel: "Ловари",
  isAvailable: true
};
