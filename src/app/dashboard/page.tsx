import Link from "next/link";
import { redirect } from "next/navigation";
import { ProgressStatus } from "@prisma/client";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { ResetProgressButton } from "@/components/reset-progress-button";
import { db } from "@/lib/db";
import { hasPremiumAccess } from "@/lib/monetization";
import { getSessionUser } from "@/lib/session";
import { dialectByCode, defaultDialect } from "@/lib/dialects";

function percent(value: number): string {
  return `${Math.round(value)}%`;
}

function statusLabel(status: ProgressStatus): { label: string; tag: string } {
  switch (status) {
    case ProgressStatus.COMPLETED:
      return { label: "Завершён", tag: "tag tag-teal" };
    case ProgressStatus.IN_PROGRESS:
      return { label: "В процессе", tag: "tag tag-saffron" };
    default:
      return { label: "Не начат", tag: "tag tag-mute" };
  }
}

export default async function DashboardPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/sign-in");
  }

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
    select: { preferredDialect: true }
  });

  // First-time visitor → pick a dialect
  if (!dbUser?.preferredDialect) {
    redirect("/onboarding/dialect");
  }

  const dialect = dialectByCode(dbUser.preferredDialect) ?? defaultDialect();

  // Find course for this dialect; if it's "coming soon", still show the empty-state
  const course = await db.course.findFirst({
    where: { dialect: dbUser.preferredDialect }
  });

  const lessons = course
    ? await db.lesson.findMany({
        where: { module: { courseId: course.id } },
        include: {
          module: true,
          progress: { where: { userId: user.id } },
          items: { select: { dialectFormId: true } }
        },
        orderBy: [{ module: { order: "asc" } }, { order: "asc" }]
      })
    : [];

  const premium = await hasPremiumAccess(user.id);
  const completed = lessons.filter(
    (lesson) => lesson.progress[0]?.status === ProgressStatus.COMPLETED
  );
  const inProgress = lessons.filter(
    (lesson) => lesson.progress[0]?.status === ProgressStatus.IN_PROGRESS
  );
  const overallProgress = lessons.length ? (completed.length / lessons.length) * 100 : 0;
  const totalWords = lessons.reduce((sum, lesson) => sum + lesson.items.length, 0);

  // Aggregate distinct mistakes across the user's progress (current dialect
  // only) — drives the "Повторить ошибки" pill.
  const mistakeRows = await db.lessonProgress.findMany({
    where: {
      userId: user.id,
      mistakes: { isEmpty: false },
      lesson: { module: { course: { dialect: dbUser.preferredDialect } } }
    },
    select: { mistakes: true }
  });
  const mistakeCount = new Set(mistakeRows.flatMap((r) => r.mistakes)).size;

  const grouped = lessons.reduce<Record<string, typeof lessons>>((acc, lesson) => {
    const key = lesson.module.id;
    acc[key] = acc[key] ?? [];
    acc[key].push(lesson);
    return acc;
  }, {});
  const moduleEntries = Object.values(grouped).map((items) => ({
    module: items[0].module,
    lessons: items
  }));

  const greetingName = user.name?.split(" ")[0] || "ученик";
  const courseAvailable = Boolean(course?.isAvailable && lessons.length);

  // Resolve the "Продолжить" CTA: prefer an in-progress lesson, else the
  // first not-started accessible lesson. Premium-locked lessons are skipped
  // for free users (clicking would just redirect to /pricing). Returns null
  // when everything available is completed.
  const continueLesson = (() => {
    const accessible = (lesson: (typeof lessons)[number]) =>
      premium || !lesson.isPremium;
    const ip = lessons.find(
      (l) => l.progress[0]?.status === ProgressStatus.IN_PROGRESS && accessible(l)
    );
    if (ip) return ip;
    return lessons.find(
      (l) =>
        (!l.progress[0] || l.progress[0].status === ProgressStatus.NOT_STARTED) &&
        accessible(l)
    );
  })();
  // Strip the "Карточки · " / "Мини-квиз · " prefix to keep the CTA short.
  const continueShortName = continueLesson?.title.replace(
    /^(Карточки|Мини-квиз)\s*·\s*/,
    ""
  );

  return (
    <>
      <SiteNav variant="app" authed />

      <main className="shell" style={{ paddingBottom: 40 }}>
        {/* HEAD */}
        <section className="dash-head">
          <div className="reveal reveal-1">
            <p className="eyebrow">
              <span className="dot" />
              ваша тетрадь учения
            </p>
            <h1>
              Здравствуй, <em>{greetingName}</em>.
            </h1>
            <p style={{ marginTop: 14, fontSize: 16, color: "var(--ink-soft)", maxWidth: 540 }}>
              {courseAvailable
                ? continueLesson
                  ? "Продолжите с того, где остановились — или загляните в модули ниже."
                  : "Все доступные уроки пройдены. Откройте Pro, чтобы продолжить."
                : "Этот курс пока готовится. Можно сменить диалект — у сэрвов уже есть полный набор."}
            </p>
            {continueLesson ? (
              <Link
                href={`/lesson/${continueLesson.id}`}
                className="continue-cta"
                aria-label={`Продолжить урок «${continueShortName}»`}
              >
                <span className="continue-cta-label">
                  ✦ Продолжить изучение
                </span>
                <span className="continue-cta-target">
                  {continueShortName}
                  <span aria-hidden="true" className="continue-cta-arrow"> →</span>
                </span>
              </Link>
            ) : null}
            <div style={{ marginTop: 14, display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
              <Link href="/onboarding/dialect" className="dialect-badge">
                <span className="orn" aria-hidden>{dialect.ornament}</span>
                {dialect.shortLabel} · сменить
              </Link>
              <span className="kicker" style={{ color: "var(--ink-mute)" }}>
                {dialect.region}
              </span>
              {dialect.maturity !== "stable" ? (
                <span
                  className={dialect.maturity === "draft" ? "tag tag-saffron" : "tag tag-mute"}
                  title="Контент составлен на основе словарей и публикаций. Будет уточняться с носителями."
                >
                  {dialect.maturityLabel}
                </span>
              ) : null}
            </div>
          </div>
          <div
            className="reveal reveal-2"
            style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}
          >
            <span className={premium ? "tag tag-saffron" : "tag tag-mute"}>
              {premium ? "Pro · полный доступ" : "Free · базовый доступ"}
            </span>
            {mistakeCount > 0 ? (
              <Link
                href="/lesson/mistakes"
                className="btn btn-madder"
                style={{ padding: "10px 16px" }}
                title="Мини-квиз по словам, которые не дались в прошлых уроках"
              >
                Повторить ошибки · {mistakeCount}
              </Link>
            ) : null}
            {courseAvailable && (completed.length + inProgress.length > 0 || mistakeCount > 0) ? (
              <ResetProgressButton dialectLabel={dialect.shortLabel} />
            ) : null}
          </div>
        </section>

        {courseAvailable ? (
          <>
            {/* STATS */}
            <section className="stats-row reveal reveal-3">
              <div className="stat">
                <div className="label">Общий прогресс</div>
                <div className="value"><em>{percent(overallProgress)}</em></div>
                <div className="progress-rail">
                  <div className="fill" style={{ width: `${overallProgress}%` }} />
                </div>
              </div>
              <div className="stat">
                <div className="label">Уроков пройдено</div>
                <div className="value">
                  {completed.length}
                  <span style={{ fontSize: 18, color: "var(--ink-mute)", fontStyle: "italic" }}>
                    {" "}/ {lessons.length}
                  </span>
                </div>
                <div className="meta">
                  {inProgress.length > 0 ? `${inProgress.length} в процессе` : "готовы новые уроки"}
                </div>
              </div>
              <div className="stat">
                <div className="label">Всего слов</div>
                <div className="value">{totalWords}</div>
                <div className="meta">в диалекте · {dialect.shortLabel}</div>
              </div>
              <div className="stat">
                <div className="label">Тариф</div>
                <div className="value" style={{ fontStyle: "italic" }}>
                  {premium ? "Pro" : "Free"}
                </div>
                <div className="meta">
                  {premium ? (
                    "премиум-уроки открыты"
                  ) : (
                    <Link
                      href="/pricing"
                      style={{ color: "var(--madder)", borderBottom: "1px dashed currentColor" }}
                    >
                      Открыть премиум →
                    </Link>
                  )}
                </div>
              </div>
            </section>

            <Ornament label="программа курса" />

            {/* MODULES */}
            <section style={{ display: "grid", gap: 8 }}>
              {moduleEntries.map(({ module, lessons }, mIdx) => (
                <div
                  key={module.id}
                  className="reveal"
                  style={{ animationDelay: `${0.1 + mIdx * 0.08}s` }}
                >
                  <div className="module-head">
                    <span className="num">№ {String(module.order).padStart(2, "0")}</span>
                    <div>
                      <h2>{module.title}</h2>
                      <p style={{ margin: "2px 0 0", fontSize: 13, color: "var(--ink-mute)" }}>
                        {module.description}
                      </p>
                    </div>
                    <span className="kicker">
                      {lessons.length} {lessons.length === 1 ? "урок" : "урока"}
                    </span>
                  </div>

                  <div className="lesson-list">
                    {lessons.map((lesson) => {
                      const status = lesson.progress[0]?.status ?? ProgressStatus.NOT_STARTED;
                      const score = lesson.progress[0]?.score ?? 0;
                      const isLocked = lesson.isPremium && !premium;
                      const isComplete = status === ProgressStatus.COMPLETED;
                      const isActive = status === ProgressStatus.IN_PROGRESS;
                      const meta = statusLabel(status);

                      return (
                        <div
                          key={lesson.id}
                          className={`lesson-card ${isComplete ? "completed" : ""} ${
                            isActive ? "in-progress" : ""
                          } ${isLocked ? "locked" : ""}`}
                        >
                          <div className="lesson-num">
                            {isComplete ? "✦" : String(lesson.order).padStart(2, "0")}
                          </div>

                          <div className="lesson-info">
                            <h3>{lesson.title}</h3>
                            <p className="meta">
                              <span className={meta.tag}>{meta.label}</span>
                              <span className="sep">·</span>
                              <span>
                                {lesson.type === "FLASHCARDS" ? "флэшкарты" : "мини-квиз"}
                              </span>
                              <span className="sep">·</span>
                              <span>{lesson.items.length} слов</span>
                              {isComplete ? (
                                <>
                                  <span className="sep">·</span>
                                  <span>результат {score}%</span>
                                </>
                              ) : null}
                              {lesson.isPremium ? (
                                <>
                                  <span className="sep">·</span>
                                  <span className="tag tag-madder">Pro</span>
                                </>
                              ) : null}
                            </p>
                          </div>

                          <div className="lesson-cta">
                            {isLocked ? (
                              <>
                                <span className="tag tag-locked">закрыто</span>
                                <Link href="/pricing" className="btn btn-ghost">
                                  Открыть Pro
                                </Link>
                              </>
                            ) : (
                              <Link
                                href={`/lesson/${lesson.id}`}
                                className={isComplete ? "btn btn-ghost" : "btn btn-ink"}
                              >
                                {isComplete
                                  ? "Повторить"
                                  : isActive
                                    ? "Продолжить →"
                                    : "Начать →"}
                              </Link>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </section>

            {!premium ? (
              <section className="upsell-section">
                <div className="panel upsell-panel">
                  <div>
                    <p className="kicker">✦ премиум</p>
                    <h3 className="upsell-title">
                      Откройте все модули с <em>Pro</em>
                    </h3>
                    <p className="upsell-lede">
                      Премиум-квизы, продвинутые модули и аудиозаписи носителей.
                    </p>
                  </div>
                  <Link href="/pricing" className="btn btn-madder">
                    Перейти на Pro →
                  </Link>
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section style={{ paddingTop: 24 }}>
            <div
              className="panel"
              style={{
                padding: "48px 36px",
                textAlign: "center",
                background: "linear-gradient(160deg, var(--cream), var(--paper-warm))"
              }}
            >
              <p className="kicker" style={{ color: "var(--madder)" }}>
                ✦ курс готовится
              </p>
              <h2
                style={{
                  margin: "12px 0 10px",
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(32px, 5vw, 48px)",
                  fontWeight: 400,
                  letterSpacing: "-0.02em"
                }}
              >
                {dialect.title}
              </h2>
              <p style={{ margin: "0 auto 24px", color: "var(--ink-soft)", fontSize: 15, maxWidth: 540 }}>
                Мы работаем с носителями этого диалекта, чтобы материал был достоверным. А пока —
                можно начать с сэрвов и сравнить, или подписаться на уведомление.
              </p>
              <Link href="/onboarding/dialect" className="btn btn-ink">
                Сменить диалект →
              </Link>
            </div>
          </section>
        )}
      </main>

      <SiteFooter />
    </>
  );
}
