"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { button, form, reveal, text } from "@/lib/ui-classes";

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
    <form action={onSubmit} className="grid w-[min(420px,100%)] gap-[22px] max-[600px]:gap-5 max-[380px]:gap-4">
      <div>
        <p className={`${text.eyebrow} ${reveal[1]}`}>
          <span className={text.eyebrowDot} />
          новая тетрадь учения
        </p>
        <h1 className={`${reveal[2]} m-0 font-display text-5xl font-normal leading-none tracking-[-0.02em] max-[600px]:text-[clamp(34px,10vw,42px)] max-[380px]:text-[clamp(30px,9vw,38px)]`}>
          Открой <em className="italic text-madder">первую</em> страницу.
        </h1>
        <p className={`${reveal[3]} mt-2.5 text-sm text-ink-mute`}>
          Бесплатно. Без рекламы. Без отвлекающих геймификаций.
        </p>
      </div>

      <div className={`${form.field} ${reveal[3]}`}>
        <label className={form.label} htmlFor="signup-name">Как вас называть</label>
        <input
          id="signup-name"
          className={form.input}
          type="text"
          name="name"
          placeholder="Имя или ник"
          autoComplete="name"
        />
      </div>
      <div className={`${form.field} ${reveal[4]}`}>
        <label className={form.label} htmlFor="signup-email">Электронная почта</label>
        <input
          id="signup-email"
          className={form.input}
          type="email"
          name="email"
          placeholder="vasja@example.ru"
          required
          autoComplete="email"
        />
      </div>
      <div className={`${form.field} ${reveal[4]}`}>
        <label className={form.label} htmlFor="signup-password">Пароль</label>
        <input
          id="signup-password"
          className={form.input}
          type="password"
          name="password"
          placeholder="не менее 8 символов"
          required
          autoComplete="new-password"
          minLength={8}
        />
      </div>

      {error ? <p className={`${form.error} ${reveal.base}`}>{error}</p> : null}

      <button
        className={`${button.madder} ${reveal[5]} mt-2 max-[600px]:w-full`}
        type="submit"
        disabled={loading}
      >
        {loading ? "Создаём…" : "Создать аккаунт →"}
      </button>
    </form>
  );
}
