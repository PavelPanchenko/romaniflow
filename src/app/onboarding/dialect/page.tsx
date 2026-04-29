import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DialectPicker } from "@/components/dialect-picker";
import { Ornament } from "@/components/ornament";
import { DIALECTS } from "@/lib/dialects";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";

export default async function OnboardingDialectPage() {
  const user = await getSessionUser();
  if (!user) {
    redirect("/sign-in");
  }

  const dbUser = await db.user.findUnique({
    where: { id: user.id },
    select: { preferredDialect: true }
  });

  return (
    <>
      <SiteNav variant="app" authed />
      <main className="shell" style={{ paddingBottom: 60 }}>
        <header className="onboard-head reveal reveal-1">
          <p className="eyebrow">
            <span className="dot" />
            знакомство · 1 шаг из 1
          </p>
          <h1>
            Какой <em>диалект</em> вам ближе?
          </h1>
          <p style={{ color: "var(--ink-soft)", fontSize: 17, lineHeight: 1.55, margin: 0 }}>
            Цыганский язык — это семья диалектов, у каждого — своя фонетика, своя лексика и
            заимствования из языков соседей. Выберите тот, на котором говорят в вашей семье или
            который вам интереснее всего. Сменить можно в любой момент в кабинете.
          </p>
        </header>

        <Ornament label="пять групп" />

        <DialectPicker dialects={DIALECTS} current={dbUser?.preferredDialect ?? null} />

        <div
          className="panel-bordered"
          style={{
            marginTop: 32,
            padding: "20px 22px",
            display: "grid",
            gap: 6,
            background: "var(--paper-warm)"
          }}
        >
          <p className="kicker" style={{ color: "var(--saffron-deep)" }}>
            ✦ о статусе курсов
          </p>
          <p style={{ margin: 0, color: "var(--ink-soft)", fontSize: 14, lineHeight: 1.55 }}>
            <strong>Сэрвы</strong> — основной выверенный курс. <strong>Влахи</strong>,{" "}
            <strong>Русска рома</strong> и <strong>Ловари</strong> — рабочие драфты на основе
            опубликованных словарей и фольклорных источников; формы будут уточняться вместе с
            носителями. <strong>Крымские</strong> — пока небольшой набросок: в этой группе мало
            доступных источников, мы расширяем материал точечно.
          </p>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
