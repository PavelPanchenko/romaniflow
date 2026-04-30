import { redirect } from "next/navigation";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { DialectPicker } from "@/components/dialect-picker";
import { Ornament } from "@/components/ornament";
import { DIALECTS } from "@/lib/dialects";
import { db } from "@/lib/db";
import { getSessionUser } from "@/lib/session";
import { card, cx, layout, reveal, text } from "@/lib/ui-classes";

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
      <main className={cx(layout.shell, "pb-[60px]")}>
        <header className={cx("max-w-[720px] pb-6 pt-14 max-[600px]:pb-5 max-[600px]:pt-8 max-[380px]:pb-3.5 max-[380px]:pt-6", reveal[1])}>
          <p className={text.eyebrow}>
            <span className={text.eyebrowDot} />
            знакомство · 1 шаг из 1
          </p>
          <h1 className="my-3.5 font-display text-[clamp(40px,6vw,72px)] font-normal leading-none tracking-[-0.025em] max-[600px]:text-[clamp(36px,11vw,50px)] max-[600px]:leading-[1.04] max-[380px]:text-[clamp(32px,10vw,44px)]">
            Какой <em className="italic text-madder">диалект</em> вам ближе?
          </h1>
          <p className={text.lede}>
            Цыганский язык — это семья диалектов, у каждого — своя фонетика, своя лексика и
            заимствования из языков соседей. Выберите тот, на котором говорят в вашей семье или
            который вам интереснее всего. Сменить можно в любой момент в кабинете.
          </p>
        </header>

        <Ornament label="пять групп" />

        <DialectPicker dialects={DIALECTS} current={dbUser?.preferredDialect ?? null} />

        <div className={cx(card.bordered, "mt-8 grid gap-1.5 bg-paper-warm px-[22px] py-5")}>
          <p className={cx(text.kicker, "text-saffron-deep")}>
            ✦ о статусе курсов
          </p>
          <p className={text.bodySm}>
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
