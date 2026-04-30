import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/sign-up-form";
import { BrandMark } from "@/components/brand-mark";
import { getSessionUser } from "@/lib/session";
import { text } from "@/lib/ui-classes";

export const metadata: Metadata = {
  title: "Регистрация",
  description:
    "Создайте аккаунт RomaniFlow — бесплатный старт, карточки с транскрипцией и личный прогресс по курсу.",
  robots: { index: false, follow: true }
};

export default async function SignUpPage() {
  const user = await getSessionUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="grid min-h-[calc(100vh_-_80px)] grid-cols-[1.05fr_1fr] max-[880px]:grid-cols-1 max-[600px]:min-h-dvh">
      <aside className="auth-grain relative flex flex-col justify-between overflow-hidden bg-madder-ink px-[60px] py-20 text-cream max-[880px]:hidden">
        <BrandMark />
        <div>
          <p className={`${text.kicker} relative z-[2] mb-[18px] tracking-[0.22em] text-saffron`}>
            ✦ почему мы здесь
          </p>
          <p className="relative z-[2] font-display text-[clamp(32px,4vw,56px)] italic leading-[1.05] tracking-[-0.02em]">
            «Каждое выученное слово — это{" "}
            <span className="text-saffron">мост</span> к человеку».
          </p>
        </div>
        <p className="relative z-[2] font-mono text-[12px] uppercase tracking-[0.18em] opacity-70">RomaniFlow · от первого слова к фразе</p>
      </aside>

      <section className="flex items-center justify-center px-7 py-[60px] max-[600px]:px-4 max-[600px]:py-7 max-[380px]:py-[22px]">
        <div className="grid w-[min(420px,100%)] gap-7 max-[380px]:gap-4">
          <SignUpForm />
          <p className="text-sm text-ink-mute [&_a]:border-b [&_a]:border-dashed [&_a]:border-ink-soft [&_a]:font-medium [&_a]:text-ink hover:[&_a]:border-madder hover:[&_a]:text-madder">
            Уже есть аккаунт? <Link href="/sign-in">Войти</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
