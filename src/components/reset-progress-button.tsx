"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cx } from "@/lib/ui-classes";

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
      className={cx(
        "inline-flex appearance-none items-center justify-center rounded-pill border border-dashed border-[rgba(26,20,12,0.28)] bg-transparent px-3.5 py-2.5 font-mono text-[12px] uppercase tracking-[0.18em] text-ink-mute transition-colors hover:enabled:border-madder hover:enabled:bg-[rgba(169,52,40,0.06)] hover:enabled:text-madder disabled:cursor-wait disabled:opacity-55",
        "max-[600px]:w-full max-[600px]:justify-center"
      )}
      title="Очистит уроки и историю ошибок только для текущего диалекта"
    >
      {busy ? "Сбрасываем…" : "Сбросить прогресс"}
    </button>
  );
}
