import { krymuryaCourse } from "./krymurya";
import { lovariCourse } from "./lovari";
import { russkaRomaCourse } from "./russka_roma";
import { servyCourse } from "./servy";
import { vlaxCourse } from "./vlax";
import type { CourseSeed } from "./types";

export const courses: CourseSeed[] = [
  servyCourse,
  vlaxCourse,
  russkaRomaCourse,
  lovariCourse,
  krymuryaCourse
];

export const CURRENT_COURSE_SLUGS = courses.map((course) => course.slug);
