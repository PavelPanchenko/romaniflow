"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { button, form, reveal, text } from "@/lib/ui-classes";

export function SignInForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);
    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false
    });

    setLoading(false);
    if (result?.error) {
      setError("Неверный email или пароль");
      return;
    }

    router.push("/dashboard");
    router.refresh();
  }

  return (
    <form action={onSubmit} className="grid w-[min(420px,100%)] gap-[22px] max-[600px]:gap-5 max-[380px]:gap-4">
      <div>
        <p className={`${text.eyebrow} ${reveal[1]}`}>
          <span className={text.eyebrowDot} />
          вход в RomaniFlow
        </p>
        <h1 className={`${reveal[2]} m-0 font-display text-5xl font-normal leading-none tracking-[-0.02em] max-[600px]:text-[clamp(34px,10vw,42px)] max-[380px]:text-[clamp(30px,9vw,38px)]`}>
          С возвращением, <em className="italic text-madder">друг</em>.
        </h1>
        <p className={`${reveal[3]} mt-2.5 text-sm text-ink-mute`}>
          Где остановились, там и продолжим.
        </p>
      </div>

      <div className={`${form.field} ${reveal[3]}`}>
        <label className={form.label} htmlFor="signin-email">Электронная почта</label>
        <input
          id="signin-email"
          className={form.input}
          type="email"
          name="email"
          placeholder="vasja@example.ru"
          required
          autoComplete="email"
        />
      </div>
      <div className={`${form.field} ${reveal[4]}`}>
        <label className={form.label} htmlFor="signin-password">Пароль</label>
        <input
          id="signin-password"
          className={form.input}
          type="password"
          name="password"
          placeholder="не менее 8 символов"
          required
          autoComplete="current-password"
        />
      </div>

      {error ? <p className={`${form.error} ${reveal.base}`}>{error}</p> : null}

      <button
        className={`${button.ink} ${reveal[5]} mt-2 max-[600px]:w-full`}
        type="submit"
        disabled={loading}
      >
        {loading ? "Открываем кабинет…" : "Войти →"}
      </button>
    </form>
  );
}
