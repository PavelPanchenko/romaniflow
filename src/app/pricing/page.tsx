import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

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
    a: "Да. Базовый тариф доступен навсегда — он включает первый модуль и карточки. Этого достаточно, чтобы понять подходит ли вам формат."
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

      <main className="shell pricing-main">
        <header className="pricing-head">
          <p className="eyebrow reveal reveal-1">
            <span className="dot" />
            тарифы
          </p>
          <h1 className="display pricing-h1 reveal reveal-2">
            Цена <em className="pricing-h1-accent">чашки кофе</em> в&nbsp;месяц.
          </h1>
          <p className="pricing-lede reveal reveal-3">
            Начните бесплатно — первый модуль навсегда. Pro открывает
            расширенные квизы, премиум-уроки и аудиозаписи.
          </p>
        </header>

        <div className="price-grid">
          {/* FREE */}
          <article className="price-card reveal reveal-3">
            <div className="price-card-head">
              <span className="kicker">free</span>
              <span className="tag tag-mute">для начала пути</span>
            </div>
            <h2 className="price-card-title">Базовый</h2>
            <div className="price">
              <em>{freePrice}</em>
              <span className="price-currency"> €</span>
            </div>
            <span className="period">навсегда</span>
            <ul>
              <li>Первый модуль с приветствиями и базовой лексикой</li>
              <li>Карточки с транскрипцией</li>
              <li>Прогресс по урокам и история ошибок</li>
              <li>Без рекламы</li>
            </ul>
            <Link
              href={user ? "/dashboard" : "/sign-up"}
              className="btn btn-ghost price-cta"
            >
              {user ? "К программе курса" : "Завести бесплатно"}
            </Link>
          </article>

          {/* PRO */}
          <article className="price-card featured reveal reveal-4">
            <div className="price-card-head">
              <span className="kicker price-kicker--pro">pro · рекомендуем</span>
              <span className="tag price-tag--pro">✦ полный доступ</span>
            </div>
            <h2 className="price-card-title">Pro · полный курс</h2>
            <div className="price">
              <em>{proPrice}</em>
              <span className="price-currency"> €</span>
            </div>
            <span className="period">в месяц · отмена в один клик</span>
            <ul>
              <li>Все модули — от приветствий до диалогов в дороге</li>
              <li>Премиум-квизы и продвинутые карточки</li>
              <li>Аудиозаписи носителей восточноевропейского диалекта</li>
              <li>Подборка слов на повторение по результатам ошибок</li>
              <li>Приоритетная поддержка</li>
            </ul>
            <Link
              href={user ? "/dashboard" : "/sign-up"}
              className="btn btn-saffron price-cta"
            >
              {user ? "Перейти на Pro →" : "Начать с Pro →"}
            </Link>
          </article>
        </div>

        <Ornament label="вопросы и ответы" />

        <section className="faq-grid">
          {FAQ.map((item, i) => (
            <div
              key={item.q}
              className="panel-bordered faq-item reveal"
              style={{ animationDelay: `${0.1 + i * 0.06}s` }}
            >
              <p className="kicker faq-kicker">✦ вопрос</p>
              <h3 className="faq-q">{item.q}</h3>
              <p className="faq-a">{item.a}</p>
            </div>
          ))}
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
