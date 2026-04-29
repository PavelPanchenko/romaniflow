"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Dialect } from "@prisma/client";
import type { DialectMeta } from "@/lib/dialects";

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
      <div className="dialect-grid">
        {dialects.map((d, i) => {
          const isCurrent = current === d.code;
          const isPending = pending === d.code;
          const isDisabled = !d.isAvailable;
          return (
            <button
              key={d.code}
              type="button"
              className={`dialect-card reveal ${isCurrent ? "is-current" : ""} ${
                isDisabled ? "is-soon" : ""
              }`}
              style={{ animationDelay: `${0.05 + i * 0.06}s` }}
              onClick={() => (!isDisabled && !isPending ? pick(d.code) : undefined)}
              disabled={isDisabled || isPending}
              aria-pressed={isCurrent}
            >
              <div className="dialect-head">
                <span className="dialect-orn" aria-hidden>
                  {d.ornament}
                </span>
                <div>
                  <span className="kicker">{d.region}</span>
                  <h3>{d.shortLabel}</h3>
                </div>
                {isCurrent ? (
                  <span className="tag tag-saffron">сейчас</span>
                ) : (
                  <span
                    className={
                      d.maturity === "stable"
                        ? "tag tag-teal"
                        : d.maturity === "draft"
                          ? "tag tag-saffron"
                          : "tag tag-mute"
                    }
                  >
                    {d.maturityLabel}
                  </span>
                )}
              </div>
              <p className="dialect-endonym">{d.endonym}</p>
              <p className="dialect-desc">{d.description}</p>
              <span className="dialect-cta">
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
      {error ? <p className="auth-error" style={{ marginTop: 16 }}>{error}</p> : null}
    </>
  );
}
