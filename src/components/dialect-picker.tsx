"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Dialect } from "@prisma/client";
import type { DialectMeta } from "@/lib/dialects";
import { cx, form, tag, text } from "@/lib/ui-classes";

type Props = {
  dialects: DialectMeta[];
  current?: Dialect | null;
};

export function DialectPicker({ dialects, current }: Props) {
  const router = useRouter();
  const [pending, setPending] = useState<Dialect | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function pick(code: Dialect) {
    setPending(code);
    setError(null);
    try {
      const res = await fetch("/api/profile/dialect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ dialect: code })
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Не удалось сохранить выбор");
      }
      router.push("/dashboard");
      router.refresh();
    } catch (e) {
      setError(e instanceof Error ? e.message : "Не удалось сохранить выбор");
      setPending(null);
    }
  }

  return (
    <>
      <div className="mt-[18px] grid grid-cols-3 gap-4 max-[1100px]:grid-cols-2 max-[640px]:grid-cols-1 max-[380px]:gap-3">
        {dialects.map((d, i) => {
          const isCurrent = current === d.code;
          const isPending = pending === d.code;
          const isDisabled = !d.isAvailable;
          return (
            <button
              key={d.code}
              type="button"
              className={cx(
                "reveal relative grid cursor-pointer gap-3 overflow-hidden rounded-[22px] border-[1.5px] border-[rgba(26,20,12,0.10)] bg-cream p-6 text-left font-body text-ink transition-[transform,box-shadow,border-color,background] duration-300 hover:enabled:-translate-y-[3px] hover:enabled:border-ink hover:enabled:shadow-soft disabled:cursor-not-allowed disabled:opacity-60 max-[600px]:p-5 max-[380px]:gap-2 max-[380px]:p-4",
                isCurrent &&
                  "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_100%_0%,rgba(212,147,58,0.22),transparent_60%)] border-ink bg-[linear-gradient(160deg,var(--ink),var(--teal-deep)_90%)] text-cream",
                isDisabled && "border-dashed bg-paper-warm"
              )}
              style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              onClick={() => (!isDisabled && !isPending ? pick(d.code) : undefined)}
              disabled={isDisabled || isPending}
              aria-pressed={isCurrent}
            >
              <div className="relative z-[1] grid grid-cols-[auto_1fr_auto] items-start gap-3.5 max-[600px]:grid-cols-[auto_minmax(0,1fr)] max-[380px]:gap-2.5">
                <span
                  className={cx(
                    "grid size-[38px] shrink-0 place-items-center rounded-full bg-[rgba(212,147,58,0.18)] text-lg text-madder max-[380px]:size-[34px]",
                    isCurrent && "bg-[rgba(212,147,58,0.22)] text-saffron"
                  )}
                  aria-hidden
                >
                  {d.ornament}
                </span>
                <div>
                  <span className={cx(text.kicker, isCurrent && "text-saffron")}>{d.region}</span>
                  <h3 className="mt-1 min-w-0 font-display text-2xl font-medium leading-[1.1] tracking-[-0.015em] max-[600px]:text-[22px] max-[380px]:text-xl">{d.shortLabel}</h3>
                </div>
                {isCurrent ? (
                  <span className={cx(tag.saffron, "mt-1.5 whitespace-nowrap max-[600px]:col-span-full max-[600px]:mt-0 max-[600px]:justify-self-start")}>сейчас</span>
                ) : (
                  <span
                    className={cx(
                      d.maturity === "stable"
                        ? tag.teal
                        : d.maturity === "draft"
                          ? tag.saffron
                          : tag.mute,
                      "mt-1.5 whitespace-nowrap max-[600px]:col-span-full max-[600px]:mt-0 max-[600px]:justify-self-start"
                    )}
                  >
                    {d.maturityLabel}
                  </span>
                )}
              </div>
              <p className={cx("relative z-[1] m-0 font-display text-[15px] italic text-ink-mute max-[380px]:text-sm", isCurrent && "text-cream/70")}>{d.endonym}</p>
              <p className={cx("relative z-[1] m-0 text-sm leading-[1.55] text-ink-soft max-[380px]:text-[13px] max-[380px]:leading-[1.45]", isCurrent && "text-cream/85")}>{d.description}</p>
              <span className={cx("relative z-[1] mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-madder", isCurrent && "text-saffron")}>
                {isPending
                  ? "Сохраняем…"
                  : isCurrent
                    ? "Учу сейчас"
                    : "Выбрать этот диалект →"}
              </span>
            </button>
          );
        })}
      </div>
      {error ? <p className={`${form.error} mt-4`}>{error}</p> : null}
    </>
  );
}
