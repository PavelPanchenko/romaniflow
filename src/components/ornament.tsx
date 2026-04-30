import { cx, text } from "@/lib/ui-classes";

type Props = {
  variant?: "wide" | "compact";
  label?: string;
};

export function Ornament({ variant = "wide", label }: Props) {
  return (
    <div
      className={cx(
        "flex items-center gap-[18px] text-ink-soft opacity-85 max-[600px]:!my-6 max-[600px]:gap-2.5 max-[380px]:!my-[18px]",
        variant === "wide" ? "my-8" : "my-4"
      )}
      aria-hidden={!label}
    >
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-soft to-transparent opacity-35" />
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 max-[600px]:h-auto max-[600px]:w-[min(86px,26vw)]"
      >
        {/* Folk diamond–chain–diamond */}
        <path d="M2 10 L20 10" stroke="currentColor" strokeWidth="1" />
        <path
          d="M28 10 L34 4 L40 10 L34 16 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <circle cx="50" cy="10" r="2" fill="var(--madder)" />
        <path d="M55 10 L65 10" stroke="currentColor" strokeWidth="1" />
        <circle cx="60" cy="10" r="3" stroke="var(--saffron-deep)" strokeWidth="1" fill="none" />
        <path d="M55 10 L65 10" stroke="currentColor" strokeWidth="1" />
        <circle cx="70" cy="10" r="2" fill="var(--madder)" />
        <path
          d="M80 10 L86 4 L92 10 L86 16 Z"
          stroke="currentColor"
          strokeWidth="1"
          fill="none"
        />
        <path d="M100 10 L118 10" stroke="currentColor" strokeWidth="1" />
      </svg>
      {label ? (
        <span
          className={cx(
            text.kicker,
            "shrink-0 tracking-[0.2em] text-ink-mute max-[600px]:max-w-[42vw] max-[600px]:text-center max-[600px]:!text-[9px] max-[600px]:!tracking-[0.13em]"
          )}
        >
          {label}
        </span>
      ) : null}
      <span className="h-px flex-1 bg-gradient-to-r from-transparent via-ink-soft to-transparent opacity-35" />
    </div>
  );
}
