"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

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
    <form action={onSubmit} className="auth-form">
      <div>
        <p className="eyebrow reveal reveal-1">
          <span className="dot" />
          вход в RomaniFlow
        </p>
        <h1 className="reveal reveal-2">
          С возвращением, <em>друг</em>.
        </h1>
        <p className="auth-foot reveal reveal-3" style={{ marginTop: 10 }}>
          Где остановились, там и продолжим.
        </p>
      </div>

      <div className="field reveal reveal-3">
        <label htmlFor="signin-email">Электронная почта</label>
        <input
          id="signin-email"
          className="input"
          type="email"
          name="email"
          placeholder="vasja@example.ru"
          required
          autoComplete="email"
        />
      </div>
      <div className="field reveal reveal-4">
        <label htmlFor="signin-password">Пароль</label>
        <input
          id="signin-password"
          className="input"
          type="password"
          name="password"
          placeholder="не менее 8 символов"
          required
          autoComplete="current-password"
        />
      </div>

      {error ? <p className="auth-error reveal">{error}</p> : null}

      <button
        className="btn btn-ink reveal reveal-5"
        type="submit"
        disabled={loading}
        style={{ marginTop: 8 }}
      >
        {loading ? "Открываем кабинет…" : "Войти →"}
      </button>
    </form>
  );
}
