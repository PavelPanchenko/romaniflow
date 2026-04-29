"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  dialectLabel: string;
};

export function ResetProgressButton({ dialectLabel }: Props) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  async function handleClick() {
    const confirmed = window.confirm(
      `Сбросить весь прогресс по диалекту «${dialectLabel}»? ` +
        `Уроки и история ошибок очистятся — это нельзя отменить.`
    );
    if (!confirmed) return;

    setBusy(true);
    try {
      const res = await fetch("/api/profile/reset-progress", { method: "POST" });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        window.alert(body.error ?? "Не удалось сбросить прогресс");
        return;
      }
      router.refresh();
    } catch {
      window.alert("Сеть недоступна. Попробуйте ещё раз.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={busy}
      className="reset-progress"
      title="Очистит уроки и историю ошибок только для текущего диалекта"
    >
      {busy ? "Сбрасываем…" : "Сбросить прогресс"}
    </button>
  );
}
