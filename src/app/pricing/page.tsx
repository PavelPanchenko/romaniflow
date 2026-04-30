import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { button, card, cx, layout, reveal, tag, text } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Тарифы",
  description:
    "Тарифы RomaniFlow: бесплатный старт и подписка Pro — расширенные квизы, премиум-уроки и аудио. Отмена в один клик.",
  alternates: { canonical: "/pricing" },
  openGraph: { url: "/pricing" }
};

function formatPriceEur(cents: number): string {
  // 990 → "9,90", 0 → "0", 1500 → "15"
  if (cents === 0) return "0";
  const major = Math.floor(cents / 100);
  const minor = cents % 100;
  return minor === 0
    ? String(major)
    : `${major},${String(minor).padStart(2, "0")}`;
}

const FAQ = [
  {
    q: "Можно ли учиться бесплатно?",
    a: "Да. Базовый тариф доступен навсегда — он включает два первых модуля (приветствия и семья) с карточками. Этого достаточно, чтобы понять, подходит ли вам формат."
  },
  {
    q: "На каком диалекте курс?",
    a: "Курс построен вокруг восточноевропейского варианта цыганского языка — наиболее распространённого в Восточной Европе и Причерноморье."
  },
  {
    q: "Как отменить подписку?",
    a: "Отмена в один клик из личного кабинета. После окончания оплаченного периода аккаунт автоматически переходит на Free — прогресс сохраняется."
  },
  {
    q: "Подойдёт ли курс новичку?",
    a: "Да. Мы начинаем с приветствий и бытовой лексики, постепенно вводя грамматику через примеры — без сухой теории."
  }
];

const priceCardClass =
  "relative grid gap-4 overflow-hidden rounded-[22px] border border-[rgba(26,20,12,0.10)] bg-cream p-8 max-[600px]:p-[22px] max-[380px]:gap-3 max-[380px]:p-[17px]";

const priceHeadClass =
  "flex items-center justify-between max-[600px]:flex-col max-[600px]:items-start max-[600px]:gap-2";

export default async function PricingPage() {
  const user = await getSessionUser();
  const [freePlan, proPlan] = await Promise.all([
    db.plan.findUnique({ where: { code: "free" } }),
    db.plan.findUnique({ where: { code: "pro" } })
  ]);
  const freePrice = formatPriceEur(freePlan?.priceCents ?? 0);
  const proPrice = formatPriceEur(proPlan?.priceCents ?? 990);
  return (
    <>
      <SiteNav variant="marketing" authed={Boolean(user)} />

      <main className={cx(layout.shell, "py-[60px] max-[600px]:py-8 max-[380px]:py-6")}>
        <header className="max-w-[720px]">
          <p className={cx(text.eyebrow, reveal[1])}>
            <span className={text.eyebrowDot} />
            тарифы
          </p>
          <h1 className={cx(text.display, "my-3.5 text-[clamp(48px,7vw,84px)] leading-none tracking-[-0.025em] max-[600px]:text-[clamp(36px,11vw,50px)] max-[600px]:leading-[1.04] max-[380px]:text-[clamp(32px,10vw,44px)]", reveal[2])}>
            Цена <em className="italic text-madder">чашки кофе</em> в&nbsp;месяц.
          </h1>
          <p className={cx("m-0 max-w-[560px] text-[17px] leading-[1.6] text-ink-soft max-[600px]:text-[15px] max-[380px]:text-sm max-[380px]:leading-normal", reveal[3])}>
            Начните бесплатно — два модуля навсегда. Pro открывает
            расширенные квизы, премиум-уроки и аудиозаписи.
          </p>
        </header>

        <div className="mt-6 grid grid-cols-2 gap-5 max-[720px]:grid-cols-1 max-[380px]:mt-[18px]">
          {/* FREE */}
          <article className={cx(priceCardClass, reveal[3])}>
            <div className={priceHeadClass}>
              <span className={text.kicker}>free</span>
              <span className={tag.mute}>для начала пути</span>
            </div>
            <h2 className="m-0 font-display text-[32px] font-medium tracking-[-0.015em] max-[600px]:text-[28px] max-[380px]:text-2xl">Базовый</h2>
            <div className="font-display text-[56px] font-normal leading-none tracking-[-0.025em] max-[600px]:text-[44px] max-[380px]:text-[38px]">
              <em className="italic text-madder">{freePrice}</em>
              <span className="font-display text-[28px]"> €</span>
            </div>
            <span className="font-mono text-[12px] uppercase tracking-[0.14em] opacity-70 max-[380px]:text-[10px] max-[380px]:tracking-[0.1em]">навсегда</span>
            <ul className="price-list m-0 mt-2 grid list-none gap-2.5 p-0 text-sm max-[380px]:gap-[7px] max-[380px]:text-[13px] max-[380px]:leading-[1.45]">
              <li>Два модуля: приветствия и семья — с карточками и квизами</li>
              <li>Карточки с транскрипцией</li>
              <li>Прогресс по урокам и история ошибок</li>
              <li>Без рекламы</li>
            </ul>
            <Link
              href={user ? "/dashboard" : "/sign-up"}
              className={cx(button.ghost, "mt-2 max-[380px]:w-full")}
            >
              {user ? "К программе курса" : "Завести бесплатно"}
            </Link>
          </article>

          {/* PRO */}
          <article className={cx(priceCardClass, "price-featured border-ink bg-ink text-cream before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_100%_0%,rgba(212,147,58,0.30),transparent_50%),radial-gradient(circle_at_0%_100%,rgba(169,52,40,0.20),transparent_50%)]", reveal[4])}>
            <div className={cx(priceHeadClass, "relative z-[2]")}>
              <span className={cx(text.kicker, "tracking-[0.22em] text-saffron")}>pro · рекомендуем</span>
              <span className={cx(tag.base, "bg-[rgba(212,147,58,0.18)] text-saffron")}>✦ полный доступ</span>
            </div>
            <h2 className="relative z-[2] m-0 font-display text-[32px] font-medium tracking-[-0.015em] max-[600px]:text-[28px] max-[380px]:text-2xl">Pro · полный курс</h2>
            <div className="relative z-[2] font-display text-[56px] font-normal leading-none tracking-[-0.025em] max-[600px]:text-[44px] max-[380px]:text-[38px]">
              <em className="text-saffron">{proPrice}</em>
              <span className="font-display text-[28px]"> €</span>
            </div>
            <span className="relative z-[2] font-mono text-[12px] uppercase tracking-[0.14em] opacity-70 max-[380px]:text-[10px] max-[380px]:tracking-[0.1em]">в месяц · отмена в один клик</span>
            <ul className="price-list relative z-[2] m-0 mt-2 grid list-none gap-2.5 p-0 text-sm max-[380px]:gap-[7px] max-[380px]:text-[13px] max-[380px]:leading-[1.45]">
              <li>Все модули — от приветствий до диалогов в дороге</li>
              <li>Премиум-квизы и продвинутые карточки</li>
              <li>Аудиозаписи носителей восточноевропейского диалекта</li>
              <li>Подборка слов на повторение по результатам ошибок</li>
              <li>Приоритетная поддержка</li>
            </ul>
            <Link
              href={user ? "/dashboard" : "/sign-up"}
              className={cx(button.saffron, "relative z-[2] mt-2 max-[380px]:w-full")}
            >
              {user ? "Перейти на Pro →" : "Начать с Pro →"}
            </Link>
          </article>
        </div>

        <Ornament label="вопросы и ответы" />

        <section className="mt-2 grid grid-cols-2 gap-[18px] max-[720px]:grid-cols-1 max-[380px]:gap-3">
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className={cx(card.bordered, "reveal max-[380px]:p-4")}
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <p className={cx(text.kicker, "mb-1.5 text-saffron-deep")}>✦ вопрос</p>
              <h3 className="mb-2 mt-0 font-display text-[22px] font-medium tracking-[-0.01em] max-[380px]:text-xl">{item.q}</h3>
              <p className="m-0 text-sm leading-[1.55] text-ink-soft max-[380px]:text-[13px] max-[380px]:leading-[1.45]">{item.a}</p>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
