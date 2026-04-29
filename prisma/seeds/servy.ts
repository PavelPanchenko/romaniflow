import { Dialect } from "@prisma/client";
import type { CourseSeed } from "./types";

export const servyCourse: CourseSeed = {
  slug: "servy",
  title: "Сэрвитка рома · восточнославянская группа",
  description:
    "Базовый курс с приветствиями, бытовой лексикой, числами, глаголами и живыми выражениями.",
  dialect: Dialect.SERVY,
  shortLabel: "Сэрвы",
  isAvailable: true
};
