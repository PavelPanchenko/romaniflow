import { Dialect } from "@prisma/client";

/**
 * Уровень зрелости контента курса.
 *  - stable: проверенный материал, опираемся уверенно
 *  - draft: рабочий драфт, требует проверки носителями
 *  - sketch: совсем малый объём, точечный
 */
export type DialectMaturity = "stable" | "draft" | "sketch";

export type DialectMeta = {
  code: Dialect;
  slug: string;
  shortLabel: string;
  title: string;
  region: string;
  endonym: string;
  description: string;
  isAvailable: boolean;
  maturity: DialectMaturity;
  maturityLabel: string;
  ornament: string;
};

export const DIALECTS: DialectMeta[] = [
  {
    code: Dialect.SERVY,
    slug: "servy",
    shortLabel: "Сэрвы",
    title: "Сэрвитка рома",
    region: "Украина · Юг России · Молдова",
    endonym: "Servika Roma",
    description:
      "Большая восточнославянская группа. Лексика близка к украинской и южнорусской городской среде. Полный курс из 7 модулей.",
    isAvailable: true,
    maturity: "stable",
    maturityLabel: "проверено",
    ornament: "✦"
  },
  {
    code: Dialect.VLAX_KALDERASH,
    slug: "vlax-kalderash",
    shortLabel: "Влахи · Кэлдэрары",
    title: "Влахи и кэлдэрары",
    region: "Балканы · Румыния · Молдова",
    endonym: "Vlaxurja · Kalderaš",
    description:
      "Самая многочисленная семья диалектов с румынским пластом. Опираемся на международную стандартизованную норму.",
    isAvailable: true,
    maturity: "draft",
    maturityLabel: "драфт",
    ornament: "❖"
  },
  {
    code: Dialect.RUSSKA_ROMA,
    slug: "russka-roma",
    shortLabel: "Русска рома",
    title: "Русска рома",
    region: "Север и центр России · Беларусь",
    endonym: "Xaladytka Roma",
    description:
      "«Русские цыгане» — северная группа с русским влиянием, кириллической традицией и песенной лексикой.",
    isAvailable: true,
    maturity: "draft",
    maturityLabel: "драфт",
    ornament: "❅"
  },
  {
    code: Dialect.LOVARI,
    slug: "lovari",
    shortLabel: "Ловари",
    title: "Ловари",
    region: "Венгрия · Восточная Европа",
    endonym: "Lovara",
    description:
      "«Конники» — vlax-ветвь с венгерским влиянием и богатой песенной традицией.",
    isAvailable: true,
    maturity: "draft",
    maturityLabel: "драфт",
    ornament: "✿"
  },
  {
    code: Dialect.KRYMURYA,
    slug: "krymurya",
    shortLabel: "Крымские",
    title: "Крымские рома",
    region: "Крым · Юг Украины",
    endonym: "Krymurya",
    description:
      "Южная группа с тюркским пластом. Малоизученный диалект — даём только самое подтверждённое.",
    isAvailable: true,
    maturity: "sketch",
    maturityLabel: "набросок",
    ornament: "☾"
  }
];

export function dialectByCode(code: Dialect): DialectMeta | undefined {
  return DIALECTS.find((d) => d.code === code);
}

export function defaultDialect(): DialectMeta {
  return DIALECTS[0];
}
