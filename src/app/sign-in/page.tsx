import Link from "next/link";
import { redirect } from "next/navigation";
import { SignInForm } from "@/components/sign-in-form";
import { BrandMark } from "@/components/brand-mark";
import { getSessionUser } from "@/lib/session";

export default async function SignInPage() {
  const user = await getSessionUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="auth-shell">
      <aside className="auth-aside">
        <BrandMark />
        <div>
          <p
            className="kicker"
            style={{
              color: "var(--saffron)",
              letterSpacing: "0.22em",
              marginBottom: 18
            }}
          >
            ✦ открытое слово
          </p>
          <p className="quote">
            Te aves <span className="accent">baxtalo</span> —<br />
            будь счастлив на этом пути.
          </p>
        </div>
        <p className="signature">RomaniFlow · Eastern Romani · 2026</p>
      </aside>

      <section className="auth-form-shell">
        <div className="auth-form" style={{ gap: 28 }}>
          <SignInForm />
          <p className="auth-foot">
            Ещё нет тетради учения?{" "}
            <Link href="/sign-up">Завести бесплатно</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
