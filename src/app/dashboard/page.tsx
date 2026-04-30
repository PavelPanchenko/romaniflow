import Link from "next/link";
import { redirect } from "next/navigation";
import { ProgressStatus } from "@prisma/client";
import { ChevronDown } from "lucide-react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Ornament } from "@/components/ornament";
import { ResetProgressButton } from "@/components/reset-progress-button";
import { db } from "@/lib/db";
import { hasPremiumAccess } from "@/lib/monetization";
import { getSessionUser } from "@/lib/session";
import { dialectByCode, defaultDialect } from "@/lib/dialects";
import { button, card, cx, layout, reveal, tag, text } from "@/lib/ui-classes";

function percent(value: number): string {
  return `${Math.round(value)}%`;
}

function statusLabel(status: ProgressStatus): { label: string; tag: string } {
  switch (status) {
    case ProgressStatus.COMPLETED:
      return { label: "Завершён", tag: tag.teal };
    case ProgressStatus.IN_PROGRESS:
      return { label: "В процессе", tag: tag.saffron };
    default:
      return { label: "Не начат", tag: tag.mute };
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
  const activeModuleId = continueLesson?.moduleId ?? moduleEntries[0]?.module.id;

  const hasLearningActivity = lessons.some((l) => l.progress.length > 0);

  return (
    <>
      <SiteNav variant="app" authed />

      <main className={cx(layout.shell, "pb-10")}>
        {/* HEAD */}
        <section className="grid grid-cols-[1fr_auto] items-end gap-7 pb-8 pt-12 max-[720px]:grid-cols-1 max-[720px]:items-start max-[600px]:gap-[18px] max-[600px]:pb-6 max-[600px]:pt-[34px] max-[380px]:pb-4 max-[380px]:pt-6">
          <div className={reveal[1]}>
            <p className={text.eyebrow}>
              <span className={text.eyebrowDot} />
              ваша тетрадь учения
            </p>
            <h1 className="mb-0 mt-2 font-display text-[clamp(40px,6vw,68px)] font-normal leading-none tracking-[-0.025em] max-[600px]:text-[clamp(34px,11vw,50px)] max-[600px]:leading-[1.02] max-[380px]:text-[clamp(30px,10vw,42px)]">
              Здравствуй, <em className="italic text-madder">{greetingName}</em>.
            </h1>
            <p className={cx(text.body, "mt-3.5 max-w-[540px]")}>
              {courseAvailable
                ? continueLesson
                  ? hasLearningActivity
                    ? "Продолжите с того, где остановились — или загляните в модули ниже."
                    : "Сделайте первый шаг: откройте урок ниже или выберите модуль в программе."
                  : "Все доступные уроки пройдены. Откройте Pro, чтобы продолжить."
                : "Этот курс пока готовится. Можно сменить диалект — у сэрвов уже есть полный набор."}
            </p>
            {continueLesson ? (
              <Link
                href={`/lesson/${continueLesson.id}`}
                className="relative mt-[18px] inline-grid max-w-[540px] gap-1 overflow-hidden rounded-[18px] bg-ink-teal px-[22px] pb-4 pt-3.5 text-cream shadow-[0_14px_32px_-16px_rgba(26,20,12,0.45)] transition-[transform,box-shadow] hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-16px_rgba(26,20,12,0.55)] before:pointer-events-none before:absolute before:-right-10 before:-top-[60px] before:size-[200px] before:bg-[radial-gradient(circle,rgba(212,147,58,0.32),transparent_65%)] max-[480px]:max-w-full max-[480px]:px-4 max-[480px]:py-3 max-[380px]:mt-3.5 max-[380px]:rounded-[15px] max-[380px]:px-3.5 max-[380px]:py-2.5"
                aria-label={
                  hasLearningActivity
                    ? `Продолжить урок «${continueShortName}»`
                    : `Начать урок «${continueShortName}»`
                }
              >
                <span className="relative z-[1] font-mono text-[11px] uppercase tracking-[0.22em] text-saffron max-[380px]:text-[9px] max-[380px]:tracking-[0.16em]">
                  {hasLearningActivity ? "✦ Продолжить изучение" : "✦ Начать обучение"}
                </span>
                <span className="relative z-[1] inline-flex flex-wrap items-baseline gap-2 font-display text-[22px] font-medium leading-[1.15] tracking-[-0.01em] text-cream max-[480px]:text-lg max-[380px]:text-[17px]">
                  {continueShortName}
                  <span aria-hidden="true" className="font-body italic text-saffron"> →</span>
                </span>
              </Link>
            ) : null}
            <div className="mt-3.5 flex flex-wrap items-center gap-2.5 max-[380px]:mt-2.5 max-[380px]:gap-2">
              <Link href="/onboarding/dialect" className="inline-flex items-center gap-2 rounded-pill bg-ink py-1.5 pl-2 pr-3 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-madder-deep">
                <span className="grid size-[22px] place-items-center rounded-full bg-saffron text-xs text-ink" aria-hidden>{dialect.ornament}</span>
                {dialect.shortLabel} · сменить
              </Link>
              <span className={cx(text.kicker, "text-ink-mute")}>
                {dialect.region}
              </span>
              {dialect.maturity !== "stable" ? (
                <span
                  className={dialect.maturity === "draft" ? tag.saffron : tag.mute}
                  title="Контент составлен на основе словарей и публикаций. Будет уточняться с носителями."
                >
                  {dialect.maturityLabel}
                </span>
              ) : null}
            </div>
          </div>
          <div
            className={cx("flex flex-wrap items-center gap-2.5 max-[600px]:items-stretch [&>*]:max-w-full max-[600px]:[&_.dashboard-mistakes-button]:hidden", reveal[2])}
          >
            {mistakeCount > 0 ? (
              <Link
                href="/lesson/mistakes"
                className={cx(button.madder, button.compact, "dashboard-mistakes-button")}
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
            <section className={cx("hidden max-[600px]:mb-[22px] max-[600px]:mt-[-8px] max-[600px]:grid max-[600px]:grid-cols-3 max-[600px]:gap-2.5 max-[380px]:mb-4 max-[380px]:mt-[-4px] max-[380px]:gap-2", reveal[3])} aria-label="Быстрые действия">
              {mistakeCount > 0 ? (
                <Link href="/lesson/mistakes" className="grid min-h-[74px] content-center gap-1 overflow-hidden rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-[linear-gradient(160deg,var(--madder),var(--madder-deep))] p-2.5 text-cream shadow-soft max-[380px]:min-h-[62px] max-[380px]:rounded-[15px] max-[380px]:p-[9px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 max-[380px]:tracking-[0.12em] max-[380px]:opacity-90">ошибки · {mistakeCount}</span>
                  <strong>Повтор</strong>
                </Link>
              ) : (
                <div className="grid min-h-[74px] content-center gap-1 overflow-hidden rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-cream/70 p-2.5 text-ink shadow-soft max-[380px]:min-h-[62px] max-[380px]:rounded-[15px] max-[380px]:p-[9px]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 max-[380px]:tracking-[0.12em] max-[380px]:opacity-90">ошибки</span>
                  <strong>Всё чисто</strong>
                </div>
              )}
              <Link href="/onboarding/dialect" className="grid min-h-[74px] content-center gap-1 overflow-hidden rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-cream/70 p-2.5 text-ink shadow-soft max-[380px]:min-h-[62px] max-[380px]:rounded-[15px] max-[380px]:p-[9px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 max-[380px]:tracking-[0.12em] max-[380px]:opacity-90">диалект</span>
                <strong>{dialect.shortLabel}</strong>
              </Link>
              <Link href="/pricing" className="grid min-h-[74px] content-center gap-1 overflow-hidden rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-cream/70 p-2.5 text-ink shadow-soft max-[380px]:min-h-[62px] max-[380px]:rounded-[15px] max-[380px]:p-[9px]">
                <span className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-70 max-[380px]:tracking-[0.12em] max-[380px]:opacity-90">тариф</span>
                <strong>{premium ? "Pro" : "Free"}</strong>
              </Link>
            </section>

            {/* STATS */}
            <section className={cx("mt-6 grid grid-cols-4 gap-3.5 max-[720px]:grid-cols-2 max-[400px]:grid-cols-1 max-[600px]:mt-0 max-[600px]:gap-2.5 max-[380px]:gap-2", reveal[3])}>
              <div className="rounded-2xl border border-[rgba(26,20,12,0.08)] bg-cream p-[18px] max-[600px]:rounded-[18px] max-[600px]:bg-cream/80 max-[600px]:p-3.5 max-[380px]:rounded-[15px] max-[380px]:p-[11px]">
                <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-mute max-[600px]:text-[10px] max-[600px]:tracking-[0.14em]">Общий прогресс</div>
                <div className="mt-1.5 font-display text-[38px] font-medium leading-none tracking-[-0.02em] text-ink max-[600px]:text-3xl max-[380px]:text-[26px]"><em className="italic text-madder">{percent(overallProgress)}</em></div>
                <div className="relative mt-[18px] h-2 overflow-hidden rounded-pill bg-[rgba(26,20,12,0.10)]">
                  <div className="h-full rounded-pill bg-[linear-gradient(90deg,var(--madder),var(--saffron))] transition-[width] duration-700" style={{ width: `${overallProgress}%` }} />
                </div>
              </div>
              <div className="rounded-2xl border border-[rgba(26,20,12,0.08)] bg-cream p-[18px] max-[600px]:rounded-[18px] max-[600px]:bg-cream/80 max-[600px]:p-3.5 max-[380px]:rounded-[15px] max-[380px]:p-[11px]">
                <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-mute max-[600px]:text-[10px] max-[600px]:tracking-[0.14em]">Уроков пройдено</div>
                <div className="mt-1.5 font-display text-[38px] font-medium leading-none tracking-[-0.02em] text-ink max-[600px]:text-3xl max-[380px]:text-[26px]">
                  {completed.length}
                  <span className="text-lg italic text-ink-mute">
                    {" "}/ {lessons.length}
                  </span>
                </div>
                <div className="mt-1.5 text-xs text-ink-mute max-[600px]:text-[11px] max-[600px]:leading-[1.3] max-[380px]:text-[10px]">
                  {inProgress.length > 0 ? `${inProgress.length} в процессе` : "готовы новые уроки"}
                </div>
              </div>
              <div className="rounded-2xl border border-[rgba(26,20,12,0.08)] bg-cream p-[18px] max-[600px]:rounded-[18px] max-[600px]:bg-cream/80 max-[600px]:p-3.5 max-[380px]:rounded-[15px] max-[380px]:p-[11px]">
                <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-mute max-[600px]:text-[10px] max-[600px]:tracking-[0.14em]">Всего слов</div>
                <div className="mt-1.5 font-display text-[38px] font-medium leading-none tracking-[-0.02em] text-ink max-[600px]:text-3xl max-[380px]:text-[26px]">{totalWords}</div>
                <div className="mt-1.5 text-xs text-ink-mute max-[600px]:text-[11px] max-[600px]:leading-[1.3] max-[380px]:text-[10px]">в диалекте · {dialect.shortLabel}</div>
              </div>
              <div className="rounded-2xl border border-[rgba(26,20,12,0.08)] bg-cream p-[18px] max-[600px]:rounded-[18px] max-[600px]:bg-cream/80 max-[600px]:p-3.5 max-[380px]:rounded-[15px] max-[380px]:p-[11px]">
                <div className="font-mono text-[12px] uppercase tracking-[0.18em] text-ink-mute max-[600px]:text-[10px] max-[600px]:tracking-[0.14em]">Тариф</div>
                <div className="mt-1.5 font-display text-[38px] font-medium italic leading-none tracking-[-0.02em] text-ink max-[600px]:text-3xl max-[380px]:text-[26px]">
                  {premium ? "Pro" : "Free"}
                </div>
                <div className="mt-1.5 text-xs text-ink-mute max-[600px]:text-[11px] max-[600px]:leading-[1.3] max-[380px]:text-[10px]">
                  {premium ? (
                    "премиум-уроки открыты"
                  ) : (
                    <Link
                      href="/pricing"
                      className="border-b border-dashed border-current text-madder"
                    >
                      Открыть премиум →
                    </Link>
                  )}
                </div>
              </div>
            </section>

            <Ornament label="программа курса" />

            {/* MODULES */}
            <section className="grid gap-2 max-[600px]:gap-3 max-[380px]:gap-[9px]">
              {moduleEntries.map(({ module, lessons }, mIdx) => {
                const moduleCompleted = lessons.filter(
                  (lesson) => lesson.progress[0]?.status === ProgressStatus.COMPLETED
                ).length;
                const isCurrentModule = module.id === activeModuleId;

                return (
                <details
                  key={module.id}
                  className={cx(
                    "module-accordion reveal border-0 max-[600px]:overflow-hidden max-[600px]:rounded-[22px] max-[600px]:border max-[600px]:border-[rgba(26,20,12,0.08)] max-[600px]:bg-cream/70 max-[600px]:shadow-soft max-[380px]:rounded-[18px]",
                    isCurrentModule && "max-[600px]:border-[rgba(212,147,58,0.42)] max-[600px]:bg-[linear-gradient(160deg,rgba(251,246,232,0.92),rgba(237,226,200,0.78))]"
                  )}
                  style={{ animationDelay: `${0.1 + mIdx * 0.08}s` }}
                  open={isCurrentModule}
                >
                  <summary className="module-summary block cursor-pointer list-none rounded-[18px] max-[600px]:rounded-[22px] max-[600px]:[-webkit-tap-highlight-color:transparent] max-[380px]:rounded-[18px]">
                    <div className="my-9 mb-3.5 grid grid-cols-[auto_1fr_auto_auto] items-center gap-[18px] max-[600px]:m-0 max-[600px]:grid-cols-[auto_minmax(0,1fr)_auto] max-[600px]:gap-x-2.5 max-[600px]:gap-y-1.5 max-[600px]:px-3.5 max-[600px]:py-3 max-[380px]:gap-x-[9px] max-[380px]:gap-y-[5px] max-[380px]:px-3 max-[380px]:py-2.5">
                      <span className="font-display text-[26px] italic text-madder max-[600px]:text-xl max-[380px]:text-lg">№ {String(module.order).padStart(2, "0")}</span>
                      <div>
                        <h2 className="m-0 font-display text-[26px] font-medium tracking-[-0.015em] max-[600px]:text-[19px] max-[600px]:leading-[1.08] max-[380px]:text-[17px]">{module.title}</h2>
                        <p className="m-0 mt-0.5 text-[13px] text-ink-mute max-[600px]:!text-xs max-[600px]:leading-[1.35] max-[380px]:!text-[11px] max-[380px]:leading-[1.3]">
                          {module.description}
                        </p>
                      </div>
                      <span className={cx(text.kicker, "max-[600px]:col-start-2 max-[600px]:text-[10px] max-[600px]:tracking-[0.1em]")}>
                        {moduleCompleted}/{lessons.length} уроков
                      </span>
                      <span className="module-chevron relative inline-grid size-9 place-items-center rounded-xl border border-[rgba(26,20,12,0.1)] bg-[rgba(26,20,12,0.06)] transition-colors max-[600px]:col-start-3 max-[600px]:row-span-2 max-[600px]:row-start-1 max-[600px]:size-[30px] max-[600px]:self-start max-[600px]:rounded-[10px] max-[380px]:size-[26px] max-[380px]:rounded-[9px]" aria-hidden>
                        <ChevronDown size={14} strokeWidth={2.2} />
                      </span>
                    </div>
                  </summary>

                  <div className="grid gap-3.5 max-[600px]:gap-2 max-[600px]:px-2.5 max-[600px]:pb-2.5 max-[380px]:gap-[7px] max-[380px]:px-2 max-[380px]:pb-2">
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
                          className={cx(
                            "grid grid-cols-[auto_1fr_auto] items-center gap-[22px] overflow-hidden rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-cream px-6 py-[22px] transition-[transform,box-shadow,border-color] hover:-translate-y-0.5 hover:border-[rgba(26,20,12,0.16)] hover:shadow-soft max-[600px]:grid-cols-[36px_minmax(0,1fr)_auto] max-[600px]:gap-2.5 max-[600px]:rounded-[14px] max-[600px]:px-[11px] max-[600px]:py-2.5 max-[380px]:grid-cols-[32px_minmax(0,1fr)_auto] max-[380px]:gap-2 max-[380px]:rounded-xl max-[380px]:px-[9px] max-[380px]:py-2",
                            isLocked && "opacity-70 hover:translate-y-0"
                          )}
                        >
                          <div className={cx(
                            "grid size-14 place-items-center rounded-[14px] border border-[rgba(26,20,12,0.10)] bg-paper-warm font-display text-2xl font-medium text-ink max-[600px]:size-9 max-[600px]:rounded-[10px] max-[600px]:text-[15px] max-[380px]:size-8 max-[380px]:rounded-[9px] max-[380px]:text-sm",
                            isComplete && "bg-ink text-saffron",
                            isActive && "bg-saffron text-ink"
                          )}>
                            {isComplete ? "✦" : String(lesson.order).padStart(2, "0")}
                          </div>

                          <div className="min-w-0">
                            <h3 className="m-0 font-display text-[22px] font-medium tracking-[-0.01em] max-[600px]:text-[15px] max-[600px]:leading-[1.12] max-[380px]:text-sm">{lesson.title}</h3>
                            <p className="mt-1 flex flex-wrap items-center gap-2.5 text-[13px] text-ink-mute max-[600px]:mt-[3px] max-[600px]:gap-1.5 max-[600px]:text-[10px] max-[600px]:leading-[1.35] max-[380px]:text-[11px] max-[380px]:text-ink-soft">
                              <span className={meta.tag}>{meta.label}</span>
                              <span className="opacity-40 max-[600px]:hidden">·</span>
                              <span>
                                {lesson.type === "FLASHCARDS" ? "флэшкарты" : "мини-квиз"}
                              </span>
                              <span className="opacity-40 max-[600px]:hidden">·</span>
                              <span>{lesson.items.length} слов</span>
                              {isComplete ? (
                                <>
                                  <span className="opacity-40 max-[600px]:hidden">·</span>
                                  <span>результат {score}%</span>
                                </>
                              ) : null}
                              {lesson.isPremium ? (
                                <>
                                  <span className="opacity-40 max-[600px]:hidden">·</span>
                                  <span className={tag.madder}>Pro</span>
                                </>
                              ) : null}
                            </p>
                          </div>

                          <div className="flex items-center gap-2 max-[600px]:justify-end">
                            {isLocked ? (
                              <>
                                <span className={cx(tag.locked, "max-[600px]:hidden")}>закрыто</span>
                                <Link href="/pricing" className={cx(button.ghost, "max-[600px]:min-h-9 max-[600px]:whitespace-nowrap max-[600px]:px-2.5 max-[600px]:py-2 max-[600px]:text-xs max-[380px]:min-h-11 max-[380px]:px-[9px] max-[380px]:text-[11px]")}>
                                  Открыть Pro
                                </Link>
                              </>
                            ) : (
                              <Link
                                href={`/lesson/${lesson.id}`}
                                className={cx(isComplete ? button.ghost : button.ink, "max-[600px]:min-h-9 max-[600px]:whitespace-nowrap max-[600px]:px-2.5 max-[600px]:py-2 max-[600px]:text-xs max-[380px]:min-h-11 max-[380px]:px-[9px] max-[380px]:text-[11px]")}
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
                </details>
                );
              })}
            </section>

            {!premium ? (
              <section className="mt-14 max-[600px]:mt-10 max-[380px]:mt-7">
                <div className={cx(card.panel, "grid grid-cols-[1fr_auto] items-center gap-6 bg-[linear-gradient(135deg,var(--cream),var(--paper-deep))] p-9 max-[720px]:grid-cols-1 max-[600px]:p-6 max-[380px]:gap-3.5 max-[380px]:p-4")}>
                  <div>
                    <p className={text.kicker}>✦ премиум</p>
                    <h3 className="mb-2 mt-2.5 font-display text-[28px] font-medium tracking-[-0.015em] max-[600px]:text-[22px] max-[380px]:my-1.5 max-[380px]:text-xl">
                      Откройте все модули с <em className="italic text-madder">Pro</em>
                    </h3>
                    <p className={text.bodySm}>
                      Премиум-квизы, продвинутые модули и аудиозаписи носителей.
                    </p>
                  </div>
                  <Link href="/pricing" className={button.madder}>
                    Перейти на Pro →
                  </Link>
                </div>
              </section>
            ) : null}
          </>
        ) : (
          <section className="pt-6">
            <div className={cx(card.panel, "bg-paper-panel px-9 py-12 text-center max-[600px]:px-[18px] max-[600px]:py-8")}>
              <p className={cx(text.kicker, "text-madder")}>
                ✦ курс готовится
              </p>
              <h2 className="mb-2.5 mt-3 font-display text-[clamp(32px,5vw,48px)] font-normal tracking-[-0.02em]">
                {dialect.title}
              </h2>
              <p className={cx(text.bodySm, "mx-auto mb-6 max-w-[540px]")}>
                Мы работаем с носителями этого диалекта, чтобы материал был достоверным. А пока —
                можно начать с сэрвов и сравнить, или подписаться на уведомление.
              </p>
              <Link href="/onboarding/dialect" className={button.ink}>
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
