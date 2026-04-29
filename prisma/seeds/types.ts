import type { Dialect } from "@prisma/client";

export type CourseSeed = {
  slug: string;
  title: string;
  description: string;
  dialect: Dialect;
  shortLabel: string;
  isAvailable: boolean;
};
