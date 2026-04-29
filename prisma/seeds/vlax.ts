import { Dialect } from "@prisma/client";
import type { CourseSeed } from "./types";

/**
 * Vlax / Kalderash — балканская и кэлдэрарская группа.
 * Опорные источники: международные стандартизированные словари (Boretzky/Igla,
 * Kalderash glossaries, Cortiade-orthography).
 *
 * Характерные отличия от сэрвов:
 *   • šavo / šej (вместо čhavo / čhaj)
 *   • paji (вместо pani)
 *   • manro (вместо maro)
 *   • dives либо ges/des; rači — «вечер/ночь»
 *   • te žal (j-произношение, без dž)
 *   • naisukar / najis вместо nais
 */
export const vlaxCourse: CourseSeed = {
  slug: "vlax-kalderash",
  title: "Влахи и кэлдэрары · балканская группа",
  description:
    "Курс для самой многочисленной семьи диалектов — с румынским пластом и звонкими сибилянтами. Базируется на международной стандартизованной норме.",
  dialect: Dialect.VLAX_KALDERASH,
  shortLabel: "Влахи · Кэлдэрары",
  isAvailable: true
};
