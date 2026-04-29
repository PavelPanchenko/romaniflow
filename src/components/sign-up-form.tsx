"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

export function SignUpForm() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    setError(null);

    const email = String(formData.get("email") || "");
    const password = String(formData.get("password") || "");
    const payload = {
      name: String(formData.get("name") || ""),
      email,
      password
    };

    const response = await fetch("/api/sign-up", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      setLoading(false);
      const body = (await response.json()) as { error?: string };
      setError(body.error || "Ошибка регистрации");
      return;
    }

    // Auto sign-in straight into onboarding so the user picks a dialect first
    const result = await signIn("credentials", { email, password, redirect: false });
    setLoading(false);
    if (result?.error) {
      router.push("/sign-in");
      return;
    }
    router.push("/onboarding/dialect");
    router.refresh();
  }

  return (
    <form action={onSubmit} className="auth-form">
      <div>
        <p className="eyebrow reveal reveal-1">
          <span className="dot" />
          новая тетрадь учения
        </p>
        <h1 className="reveal reveal-2">
          Открой <em>первую</em> страницу.
        </h1>
        <p className="auth-foot reveal reveal-3" style={{ marginTop: 10 }}>
          Бесплатно. Без рекламы. Без отвлекающих геймификаций.
        </p>
      </div>

      <div className="field reveal reveal-3">
        <label htmlFor="signup-name">Как вас называть</label>
        <input
          id="signup-name"
          className="input"
          type="text"
          name="name"
          placeholder="Имя или ник"
          autoComplete="name"
        />
      </div>
      <div className="field reveal reveal-4">
        <label htmlFor="signup-email">Электронная почта</label>
        <input
          id="signup-email"
          className="input"
          type="email"
          name="email"
          placeholder="vasja@example.ru"
          required
          autoComplete="email"
        />
      </div>
      <div className="field reveal reveal-4">
        <label htmlFor="signup-password">Пароль</label>
        <input
          id="signup-password"
          className="input"
          type="password"
          name="password"
          placeholder="не менее 8 символов"
          required
          autoComplete="new-password"
          minLength={8}
        />
      </div>

      {error ? <p className="auth-error reveal">{error}</p> : null}

      <button
        className="btn btn-madder reveal reveal-5"
        type="submit"
        disabled={loading}
        style={{ marginTop: 8 }}
      >
        {loading ? "Создаём…" : "Создать аккаунт →"}
      </button>
    </form>
  );
}
