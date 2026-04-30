import type { Metadata } from "next";
import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { DIALECTS } from "@/lib/dialects";
import { getSessionUser } from "@/lib/session";
import { db } from "@/lib/db";
import { getSiteUrl } from "@/lib/site-url";
import { SITE_DESCRIPTION } from "@/lib/seo-constants";
import { buildHomeWebSiteJsonLd } from "@/lib/structured-data";
import { button, card, cx, layout, reveal, tag, text } from "@/lib/ui-classes";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
  openGraph: { url: "/" },
  description: SITE_DESCRIPTION
};

const dictionary = [
  { romani: "Lačho dives", ru: "добрый день", transcription: "лачо́ дивэ́с" },
  { romani: "Sastipe", ru: "здоровье", transcription: "састипэ́" },
  { romani: "Nais tuke", ru: "спасибо тебе", transcription: "наи́с тукэ́" },
  { romani: "Sar san?", ru: "как ты?", transcription: "сар сан" },
  { romani: "Kher", ru: "дом", transcription: "кхер" },
  { romani: "Pani", ru: "вода", transcription: "пани́" },
  { romani: "Drom", ru: "путь, дорога", transcription: "дром" },
  { romani: "Phral", ru: "брат", transcription: "пхрал" },
  { romani: "Phen", ru: "сестра", transcription: "пхэн" },
  { romani: "Me kamav tut", ru: "я люблю тебя", transcription: "мэ кама́в тут" },
  { romani: "Te del o Del", ru: "дай Бог", transcription: "тэ дэл о дэл" },
  { romani: "Baxt thaj sastipe", ru: "счастья и здоровья", transcription: "бахт тхай састипэ́" }
];

const featureCardClass =
  "grid gap-3 overflow-hidden rounded-card border border-[rgba(26,20,12,0.08)] bg-cream p-7 transition-[transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-soft max-[600px]:rounded-[18px] max-[380px]:gap-[9px] max-[380px]:p-4";

const featureNumberClass =
  "mb-[-8px] font-display text-[56px] italic leading-none text-madder opacity-85 max-[600px]:text-4xl";

export default async function HomePage() {
  const user = await getSessionUser();
  const isAuthed = Boolean(user);
  // Round word count down to the nearest 50 — the exact figure shifts each
  // seed and an oddly precise number ("1188+ слов") looks like marketing noise.
  const totalWords = await db.lessonItem.count();
  const wordsRounded = Math.floor(totalWords / 50) * 50;
  const siteUrl = getSiteUrl();
  const jsonLd = buildHomeWebSiteJsonLd(siteUrl);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteNav variant="marketing" authed={isAuthed} />

      <main className={layout.shell}>
        {/* HERO */}
        <section className="grid grid-cols-[1.25fr_1fr] items-center gap-[60px] py-[60px] pb-10 max-[920px]:grid-cols-1 max-[920px]:gap-10 max-[600px]:gap-6 max-[600px]:py-6 max-[600px]:pb-[22px]">
          <div>
            <p className={cx(text.eyebrow, reveal[1])}>
              <span className={text.eyebrowDot} />
              восточноевропейский вариант · Eastern Romani
            </p>
            <h1 className={cx("m-0 font-display text-[clamp(48px,7vw,96px)] leading-[0.96] tracking-[-0.025em] max-[600px]:text-[clamp(34px,11.5vw,48px)] max-[600px]:leading-[0.98] max-[380px]:text-[clamp(36px,12vw,46px)]", reveal[2])}>
              Изучай язык,
              <br />
              на котором поют{" "}
              <em className="hero-em relative italic text-madder">дороги</em>.
            </h1>
            <p className={cx("mt-[26px] max-w-[520px] text-[17px] leading-[1.6] text-ink-soft max-[600px]:mt-4 max-[600px]:text-sm max-[600px]:leading-normal", reveal[3])}>
              RomaniFlow — это платформа для медленного, вдумчивого изучения цыганского языка.
              Карточки с транскрипцией, мини-квизы, личный прогресс и тщательно подобранная лексика
              восточноевропейского диалекта.
            </p>
            <div className={cx("mt-8 inline-flex flex-wrap items-center gap-3.5 max-[600px]:mt-5 max-[600px]:flex max-[600px]:w-full max-[600px]:items-stretch max-[380px]:gap-2.5", reveal[4])}>
              {isAuthed ? (
                <Link href="/dashboard" className={cx(button.ink, "max-[600px]:flex-1")}>
                  К программе курса <span aria-hidden>→</span>
                </Link>
              ) : (
                <>
                  <Link href="/sign-up" className={cx(button.ink, "max-[600px]:flex-1")}>
                    Начать бесплатно <span aria-hidden>→</span>
                  </Link>
                  <Link href="/sign-in" className={cx(button.ghost, "max-[600px]:flex-1")}>
                    У меня уже есть аккаунт
                  </Link>
                </>
              )}
            </div>
            <div className={cx("mt-7 flex flex-wrap items-center gap-[30px] text-[13px] text-ink-mute max-[540px]:flex-col max-[540px]:items-stretch max-[540px]:gap-3.5 max-[540px]:[&>span]:grid max-[540px]:[&>span]:grid-cols-[auto_1fr] max-[540px]:[&>span]:items-center max-[540px]:[&>span]:gap-3 max-[540px]:[&>span]:border-b max-[540px]:[&>span]:border-dashed max-[540px]:[&>span]:border-[rgba(26,20,12,0.14)] max-[540px]:[&>span]:pb-3.5 max-[540px]:[&>span:last-child]:border-b-0 max-[540px]:[&>span:last-child]:pb-0 max-[540px]:[&_br]:hidden max-[600px]:mt-[18px]", reveal[5])}>
              <span>
                <strong className="mb-0.5 block font-display text-[28px] font-medium leading-none text-ink max-[540px]:mb-0 max-[600px]:text-[22px]">{wordsRounded}+</strong>
                слов в карточках
                <br /> с транскрипцией
              </span>
              <span>
                <strong className="mb-0.5 block font-display text-[28px] font-medium leading-none text-ink max-[540px]:mb-0 max-[600px]:text-[22px]">5</strong>
                диалектов: от сэрвов
                <br /> до крымских
              </span>
              <span>
                <strong className="mb-0.5 block font-display text-[28px] font-medium leading-none text-ink max-[540px]:mb-0 max-[600px]:text-[22px]">∞</strong>
                повторений без
                <br /> штрафов и таймеров
              </span>
            </div>
          </div>

          <aside className={cx("relative overflow-hidden rounded-[26px] bg-cream p-8 shadow-page before:pointer-events-none before:absolute before:-right-[120px] before:-top-[120px] before:size-80 before:bg-[radial-gradient(circle,var(--saffron-soft),transparent_60%)] max-[600px]:rounded-[18px] max-[600px]:p-3.5", reveal[3])} aria-label="Карточки слов">
            <div className="relative z-[1] mb-[18px] flex items-center justify-between gap-3 max-[600px]:mb-3 max-[600px]:flex-col max-[600px]:items-start">
              <span className={text.kicker}>Урок 1 · Приветствия</span>
              <span className={cx(tag.saffron, "bg-[rgba(212,147,58,0.20)]")}>
                свободный доступ
              </span>
            </div>
            <div className="relative z-[1] grid gap-3.5 max-[600px]:gap-2.5">
              {dictionary.slice(0, 4).map((w) => (
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 rounded-[14px] border border-[rgba(26,20,12,0.06)] bg-paper-warm px-[18px] py-4 transition-[transform,background] duration-300 hover:translate-x-1 hover:bg-paper-deep max-[600px]:gap-3 max-[600px]:rounded-xl max-[600px]:p-3 max-[480px]:grid-cols-1" key={w.romani}>
                  <div>
                    <div className="font-display text-[28px] italic leading-none max-[600px]:break-words max-[600px]:text-[21px] max-[600px]:leading-[1.05]">{w.romani}</div>
                    <div className="mt-1 text-[13px] text-ink-mute max-[600px]:text-[11px]">
                      {w.ru} · <span className={text.monoInline}>{w.transcription}</span>
                    </div>
                  </div>
                  <button className="inline-flex size-[38px] cursor-pointer items-center justify-center rounded-full border-0 bg-ink font-mono text-sm text-cream transition-[background,transform] hover:scale-105 hover:bg-madder max-[600px]:size-11 max-[480px]:justify-self-end" type="button" aria-label={`Произнести ${w.romani}`}>
                    ◐
                  </button>
                </div>
              ))}
            </div>
          </aside>
        </section>

        {/* MARQUEE */}
        <Ornament label="первые слова" />
      </main>

      <section className="relative overflow-hidden border-y border-[rgba(26,20,12,0.12)] bg-[linear-gradient(180deg,transparent,rgba(212,147,58,0.06))] py-[22px] max-[600px]:py-2.5" id="words" aria-label="Слова из словаря">
        <div className="marquee-track inline-flex whitespace-nowrap will-change-transform hover:[animation-play-state:paused]">
          {[...dictionary, ...dictionary].map((w, i) => (
            <span className="inline-flex items-baseline gap-3.5 px-9 font-display text-4xl italic tracking-[-0.01em] text-ink max-[600px]:gap-2.5 max-[600px]:px-[22px] max-[600px]:text-[22px]" key={`${w.romani}-${i}`}>
              {w.romani}
              <span className="font-body text-sm not-italic lowercase tracking-[0.04em] text-ink-mute">· {w.ru}</span>
              <span className="text-lg not-italic text-madder">✦</span>
            </span>
          ))}
        </div>
      </section>

      <main className={layout.shell}>
        {/* FEATURES */}
        <section id="features" className="pb-[30px] pt-[70px] max-[600px]:py-[22px]">
          <div className="mb-9 max-w-[640px] max-[600px]:mb-[18px]">
            <p className={text.eyebrow}>
              <span className={text.eyebrowDot} />
              как устроена платформа
            </p>
            <h2 className={text.sectionTitle}>
              Три простых шага —{" "}
              <span className={text.sectionAccent}>
                от первого слова к фразе
              </span>
              .
            </h2>
            <p className={cx(text.body, "max-w-[520px]")}>
              Никакой геймификации ради геймификации. Никаких таймеров и сердечек. Только
              продуманные карточки, мини-квизы и честный прогресс.
            </p>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-[18px] max-[920px]:grid-cols-1 max-[380px]:gap-3 [&_article_h3]:m-0 [&_article_h3]:font-display [&_article_h3]:text-2xl [&_article_h3]:font-medium [&_article_h3]:leading-[1.15] [&_article_h3]:tracking-[-0.01em] max-[380px]:[&_article_h3]:text-xl [&_article_p]:m-0 [&_article_p]:text-sm [&_article_p]:leading-[1.55] [&_article_p]:text-ink-soft max-[380px]:[&_article_p]:text-[13px] max-[380px]:[&_article_p]:leading-[1.45]">
            <article className={featureCardClass}>
              <span className={featureNumberClass}>01</span>
              <h3>Карточки с транскрипцией</h3>
              <p>
                Каждое слово раскрывается дважды: сначала вы видите написание и слышите как оно
                читается, потом узнаёте перевод и контекст.
              </p>
              <span className={cx(tag.saffron, "w-fit")}>
                флэшкарты
              </span>
            </article>
            <article className={featureCardClass}>
              <span className={featureNumberClass}>02</span>
              <h3>Мини-квизы на закрепление</h3>
              <p>
                Короткий тест в три-четыре варианта помогает зафиксировать значение в памяти. Ошибки
                сохраняются для повторения.
              </p>
              <span className={cx(tag.madder, "w-fit")}>
                интервалы
              </span>
            </article>
            <article className={featureCardClass}>
              <span className={featureNumberClass}>03</span>
              <h3>Прогресс без давления</h3>
              <p>
                Личный кабинет показывает пройденные модули, общий процент и ваши слова на
                повторение — без штрафов и стрика.
              </p>
              <span className={cx(tag.teal, "w-fit")}>
                прогресс
              </span>
            </article>
          </div>
        </section>

        <Ornament label="диалекты и группы" />

        {/* DIALECTS */}
        <section id="dialects" className="pb-[50px] pt-[30px] max-[600px]:py-[22px]">
          <div className="mb-7 max-w-[720px] max-[600px]:mb-[18px]">
            <p className={text.eyebrow}>
              <span className={text.eyebrowDot} />
              не один язык — семья
            </p>
            <h2 className={text.sectionTitle}>
              Сэрвы, влахи, ловари, кэлдэрары —{" "}
              <span className={text.sectionAccent}>
                выберите свой
              </span>
              .
            </h2>
            <p className={cx(text.body, "max-w-[540px]")}>
              Цыганский язык — это семья диалектов, у каждого своё звучание и заимствования. Сейчас
              полностью открыт курс сэрвов; остальные группы готовятся вместе с носителями.
            </p>
          </div>

          <div className="mt-[18px] grid grid-cols-3 gap-4 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1 max-[380px]:gap-3">
            {DIALECTS.map((d, i) => (
              <article
                key={d.code}
                className={cx(
                  "reveal relative grid gap-3 overflow-hidden rounded-[22px] border-[1.5px] border-[rgba(26,20,12,0.10)] bg-cream p-6 text-left font-body text-ink transition-[transform,box-shadow,border-color,background] duration-300 max-[600px]:p-5 max-[380px]:gap-2 max-[380px]:p-4",
                  d.maturity === "sketch" && "border-dashed bg-paper-warm"
                )}
                style={{ animationDelay: `${0.05 + i * 0.05}s` }}
              >
                <div className="relative z-[1] grid grid-cols-[auto_1fr_auto] items-start gap-3.5 max-[600px]:grid-cols-[auto_minmax(0,1fr)] max-[380px]:gap-2.5">
                  <span className="grid size-[38px] shrink-0 place-items-center rounded-full bg-[rgba(212,147,58,0.18)] text-lg text-madder max-[380px]:size-[34px]" aria-hidden>
                    {d.ornament}
                  </span>
                  <div>
                    <span className={text.kicker}>{d.region}</span>
                    <h3 className="mt-1 min-w-0 font-display text-2xl font-medium leading-[1.1] tracking-[-0.015em] max-[600px]:text-[22px] max-[380px]:text-xl">{d.shortLabel}</h3>
                  </div>
                  <span
                    className={cx(
                      d.maturity === "stable"
                        ? tag.teal
                        : d.maturity === "draft"
                          ? tag.saffron
                          : tag.mute,
                      "mt-1.5 whitespace-nowrap max-[600px]:col-span-full max-[600px]:mt-0 max-[600px]:justify-self-start"
                    )}
                  >
                    {d.maturityLabel}
                  </span>
                </div>
                <p className="relative z-[1] m-0 font-display text-[15px] italic text-ink-mute max-[380px]:text-sm">{d.endonym}</p>
                <p className="relative z-[1] m-0 text-sm leading-[1.55] text-ink-soft max-[380px]:text-[13px] max-[380px]:leading-[1.45]">{d.description}</p>
                <span className="relative z-[1] mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-madder">Доступен в курсе →</span>
              </article>
            ))}
          </div>
        </section>

        <Ornament label="ценность" />

        {/* MANIFESTO */}
        <section className="pb-[60px] pt-[30px] max-[600px]:pb-[30px] max-[600px]:pt-3.5">
          <div className={cx(card.panel, "relative overflow-hidden bg-[linear-gradient(160deg,var(--ink),var(--teal-deep)_90%)] px-12 py-14 text-cream max-[600px]:px-4 max-[600px]:py-[22px]")}>
            <div className="pointer-events-none absolute -right-[120px] -top-[120px] size-[380px] bg-[radial-gradient(circle,rgba(212,147,58,0.32),transparent_60%)]" aria-hidden />
            <p className={cx(text.kicker, "relative z-[2] tracking-[0.22em] text-saffron")}>✦ манифест</p>
            <p className="relative z-[2] my-4 max-w-[760px] font-display text-[clamp(28px,4vw,44px)] italic leading-[1.18] tracking-[-0.015em] max-[380px]:my-3 max-[380px]:text-[clamp(24px,8vw,34px)] max-[380px]:leading-[1.12]">
              «Язык — это не словарь. Это способ помнить, как звучали голоса тех, кого больше нет
              рядом, и как можно говорить с теми, кто только встретится».
            </p>
            <div className="relative z-[2] mt-3 flex flex-wrap items-center gap-[18px] max-[600px]:flex-col max-[600px]:items-stretch max-[380px]:gap-2.5">
              <Link
                href={isAuthed ? "/dashboard" : "/sign-up"}
                className={cx(button.saffron, "max-[600px]:justify-center")}
              >
                {isAuthed ? "Открыть тетрадь учения" : "Завести тетрадь учения"}
              </Link>
              <Link href="/pricing" className={cx(button.ghostOnDark, "max-[600px]:justify-center")}>
                Посмотреть тарифы
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
