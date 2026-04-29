import Link from "next/link";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { DIALECTS } from "@/lib/dialects";
import { getSessionUser } from "@/lib/session";
import { db } from "@/lib/db";

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

export default async function HomePage() {
  const user = await getSessionUser();
  const isAuthed = Boolean(user);
  // Round word count down to the nearest 50 — the exact figure shifts each
  // seed and an oddly precise number ("1188+ слов") looks like marketing noise.
  const totalWords = await db.lessonItem.count();
  const wordsRounded = Math.floor(totalWords / 50) * 50;
  return (
    <>
      <SiteNav variant="marketing" authed={isAuthed} />

      <main className="shell">
        {/* HERO */}
        <section className="hero">
          <div>
            <p className="eyebrow reveal reveal-1">
              <span className="dot" />
              восточноевропейский вариант · Eastern Romani
            </p>
            <h1 className="hero-headline reveal reveal-2">
              Изучай язык,
              <br />
              на котором поют{" "}
              <em>дороги</em>.
            </h1>
            <p className="hero-sub reveal reveal-3">
              RomaniFlow — это платформа для медленного, вдумчивого изучения цыганского языка.
              Карточки с транскрипцией, мини-квизы, личный прогресс и тщательно подобранная лексика
              восточноевропейского диалекта.
            </p>
            <div className="hero-cta reveal reveal-4">
              {isAuthed ? (
                <Link href="/dashboard" className="btn btn-ink">
                  К программе курса <span aria-hidden>→</span>
                </Link>
              ) : (
                <>
                  <Link href="/sign-up" className="btn btn-ink">
                    Начать бесплатно <span aria-hidden>→</span>
                  </Link>
                  <Link href="/sign-in" className="btn btn-ghost">
                    У меня уже есть аккаунт
                  </Link>
                </>
              )}
            </div>
            <div className="hero-meta reveal reveal-5">
              <span>
                <strong>{wordsRounded}+</strong>
                слов в карточках
                <br /> с транскрипцией
              </span>
              <span>
                <strong>5</strong>
                диалектов: от сэрвов
                <br /> до крымских
              </span>
              <span>
                <strong>∞</strong>
                повторений без
                <br /> штрафов и таймеров
              </span>
            </div>
          </div>

          <aside className="hero-card reveal reveal-3" aria-label="Карточки слов">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: 18
              }}
            >
              <span className="kicker">Урок 1 · Приветствия</span>
              <span
                className="tag tag-saffron"
                style={{ background: "rgba(212,147,58,0.20)" }}
              >
                свободный доступ
              </span>
            </div>
            <div className="word-stack">
              {dictionary.slice(0, 4).map((w) => (
                <div className="word-row" key={w.romani}>
                  <div>
                    <div className="romani">{w.romani}</div>
                    <div className="ru">
                      {w.ru} · <span style={{ fontFamily: "var(--font-mono)" }}>{w.transcription}</span>
                    </div>
                  </div>
                  <button className="speak" type="button" aria-label={`Произнести ${w.romani}`}>
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

      <section className="marquee" id="words" aria-label="Слова из словаря">
        <div className="marquee-track">
          {[...dictionary, ...dictionary].map((w, i) => (
            <span className="marquee-word" key={`${w.romani}-${i}`}>
              {w.romani}
              <span className="ru">· {w.ru}</span>
              <span className="star">✦</span>
            </span>
          ))}
        </div>
      </section>

      <main className="shell">
        {/* FEATURES */}
        <section id="features" style={{ padding: "70px 0 30px" }}>
          <div style={{ maxWidth: 640, marginBottom: 36 }}>
            <p className="eyebrow">
              <span className="dot" />
              как устроена платформа
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                margin: "12px 0 14px",
                fontWeight: 400
              }}
            >
              Три простых шага —{" "}
              <span className="display-italic" style={{ color: "var(--madder)" }}>
                от первого слова к фразе
              </span>
              .
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, margin: 0, maxWidth: 520 }}>
              Никакой геймификации ради геймификации. Никаких таймеров и сердечек. Только
              продуманные карточки, мини-квизы и честный прогресс.
            </p>
          </div>

          <div className="feature-grid">
            <article className="feature">
              <span className="num">01</span>
              <h3>Карточки с транскрипцией</h3>
              <p>
                Каждое слово раскрывается дважды: сначала вы видите написание и слышите как оно
                читается, потом узнаёте перевод и контекст.
              </p>
              <span className="tag tag-saffron" style={{ width: "fit-content" }}>
                флэшкарты
              </span>
            </article>
            <article className="feature">
              <span className="num">02</span>
              <h3>Мини-квизы на закрепление</h3>
              <p>
                Короткий тест в три-четыре варианта помогает зафиксировать значение в памяти. Ошибки
                сохраняются для повторения.
              </p>
              <span className="tag tag-madder" style={{ width: "fit-content" }}>
                интервалы
              </span>
            </article>
            <article className="feature">
              <span className="num">03</span>
              <h3>Прогресс без давления</h3>
              <p>
                Личный кабинет показывает пройденные модули, общий процент и ваши слова на
                повторение — без штрафов и стрика.
              </p>
              <span className="tag tag-teal" style={{ width: "fit-content" }}>
                прогресс
              </span>
            </article>
          </div>
        </section>

        <Ornament label="диалекты и группы" />

        {/* DIALECTS */}
        <section id="dialects" style={{ padding: "30px 0 50px" }}>
          <div style={{ maxWidth: 720, marginBottom: 28 }}>
            <p className="eyebrow">
              <span className="dot" />
              не один язык — семья
            </p>
            <h2
              className="display"
              style={{
                fontSize: "clamp(36px, 5vw, 56px)",
                margin: "12px 0 14px",
                fontWeight: 400
              }}
            >
              Сэрвы, влахи, ловари, кэлдэрары —{" "}
              <span className="display-italic" style={{ color: "var(--madder)" }}>
                выберите свой
              </span>
              .
            </h2>
            <p style={{ color: "var(--ink-soft)", fontSize: 16, margin: 0, maxWidth: 540 }}>
              Цыганский язык — это семья диалектов, у каждого своё звучание и заимствования. Сейчас
              полностью открыт курс сэрвов; остальные группы готовятся вместе с носителями.
            </p>
          </div>

          <div className="dialect-grid">
            {DIALECTS.map((d, i) => (
              <article
                key={d.code}
                className={`dialect-card reveal ${d.maturity === "sketch" ? "is-soon" : ""}`}
                style={{ animationDelay: `${0.05 + i * 0.05}s`, cursor: "default" }}
              >
                <div className="dialect-head">
                  <span className="dialect-orn" aria-hidden>
                    {d.ornament}
                  </span>
                  <div>
                    <span className="kicker">{d.region}</span>
                    <h3>{d.shortLabel}</h3>
                  </div>
                  <span
                    className={
                      d.maturity === "stable"
                        ? "tag tag-teal"
                        : d.maturity === "draft"
                          ? "tag tag-saffron"
                          : "tag tag-mute"
                    }
                  >
                    {d.maturityLabel}
                  </span>
                </div>
                <p className="dialect-endonym">{d.endonym}</p>
                <p className="dialect-desc">{d.description}</p>
                <span className="dialect-cta">Доступен в курсе →</span>
              </article>
            ))}
          </div>
        </section>

        <Ornament label="ценность" />

        {/* MANIFESTO */}
        <section className="manifesto-section">
          <div className="manifesto-card panel">
            <div className="manifesto-glow" aria-hidden />
            <p className="kicker manifesto-kicker">✦ манифест</p>
            <p className="display-italic manifesto-quote">
              «Язык — это не словарь. Это способ помнить, как звучали голоса тех, кого больше нет
              рядом, и как можно говорить с теми, кто только встретится».
            </p>
            <div className="manifesto-cta">
              <Link
                href={isAuthed ? "/dashboard" : "/sign-up"}
                className="btn btn-saffron"
              >
                {isAuthed ? "Открыть тетрадь учения" : "Завести тетрадь учения"}
              </Link>
              <Link href="/pricing" className="btn btn-ghost btn-ghost-on-dark">
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
