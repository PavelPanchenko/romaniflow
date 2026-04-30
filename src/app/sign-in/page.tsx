import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { BrandMark } from "@/components/brand-mark";
import { getSessionUser } from "@/lib/session";
import { text } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Вход",
  description: "Вход в аккаунт RomaniFlow — продолжайте изучение цыганского языка с того места, где остановились.",
  robots: { index: false, follow: true }
};

export default async function SignInPage() {
  const user = await getSessionUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="grid min-h-[calc(100vh_-_80px)] grid-cols-[1.05fr_1fr] max-[880px]:grid-cols-1 max-[600px]:min-h-dvh">
      <aside className="auth-grain relative flex flex-col justify-between overflow-hidden bg-teal-ink px-[60px] py-20 text-cream max-[880px]:hidden">
        <BrandMark />
        <div>
          <p className={`${text.kicker} relative z-[2] mb-[18px] tracking-[0.22em] text-saffron`}>
            ✦ открытое слово
          </p>
          <p className="relative z-[2] font-display text-[clamp(32px,4vw,56px)] italic leading-[1.05] tracking-[-0.02em]">
            Te aves <span className="text-saffron">baxtalo</span> —<br />
            будь счастлив на этом пути.
          </p>
        </div>
        <p className="relative z-[2] font-mono text-[12px] uppercase tracking-[0.18em] opacity-70">RomaniFlow · Eastern Romani · 2026</p>
      </aside>

      <section className="flex items-center justify-center px-7 py-[60px] max-[600px]:px-4 max-[600px]:py-7 max-[380px]:py-[22px]">
        <div className="grid w-[min(420px,100%)] gap-7 max-[380px]:gap-4">
          <SignInForm />
          <p className="text-sm text-ink-mute [&_a]:border-b [&_a]:border-dashed [&_a]:border-ink-soft [&_a]:font-medium [&_a]:text-ink hover:[&_a]:border-madder hover:[&_a]:text-madder">
            Ещё нет тетради учения?{" "}
            <Link href="/sign-up">Завести бесплатно</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
