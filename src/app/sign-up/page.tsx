import Link from "next/link";
import { redirect } from "next/navigation";
import { SignUpForm } from "@/components/sign-up-form";
import { BrandMark } from "@/components/brand-mark";
import { getSessionUser } from "@/lib/session";

export default async function SignUpPage() {
  const user = await getSessionUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div className="auth-shell">
      <aside
        className="auth-aside"
        style={{
          background:
            "linear-gradient(160deg, var(--madder-deep), var(--madder) 50%, var(--ink) 100%)"
        }}
      >
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
            ✦ почему мы здесь
          </p>
          <p className="quote">
            «Каждое выученное слово — это{" "}
            <span className="accent">мост</span> к человеку».
          </p>
        </div>
        <p className="signature">RomaniFlow · от первого слова к фразе</p>
      </aside>

      <section className="auth-form-shell">
        <div className="auth-form" style={{ gap: 28 }}>
          <SignUpForm />
          <p className="auth-foot">
            Уже есть аккаунт? <Link href="/sign-in">Войти</Link>.
          </p>
        </div>
      </section>
    </div>
  );
}
