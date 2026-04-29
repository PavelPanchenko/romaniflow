type Props = {
  variant?: "wide" | "compact";
  label?: string;
};

export function Ornament({ variant = "wide", label }: Props) {
  return (
    <div
      className="ornament"
      style={{
        margin: variant === "wide" ? "32px 0" : "16px 0",
        opacity: 0.85
      }}
      aria-hidden={!label}
    >
      <span className="line" />
      <svg
        width="120"
        height="20"
        viewBox="0 0 120 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ flex: "0 0 auto" }}
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
          className="kicker"
          style={{ flex: "0 0 auto", letterSpacing: "0.2em", color: "var(--ink-mute)" }}
        >
          {label}
        </span>
      ) : null}
      <span className="line" />
    </div>
  );
}
