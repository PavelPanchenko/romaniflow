type ClassValue = string | false | null | undefined;

export function cx(...classes: ClassValue[]) {
  return classes.filter(Boolean).join(" ");
}

export const layout = {
  shell: "mx-auto w-[min(1180px,92vw)] max-[600px]:w-[calc(100%_-_32px)] max-[380px]:w-[calc(100%_-_28px)]",
  shellNarrow: "mx-auto w-[min(720px,92vw)] max-[600px]:w-[calc(100%_-_32px)] max-[380px]:w-[calc(100%_-_28px)]"
};

export const reveal = {
  base: "reveal",
  1: "reveal reveal-1",
  2: "reveal reveal-2",
  3: "reveal reveal-3",
  4: "reveal reveal-4",
  5: "reveal reveal-5"
} as const;

export const text = {
  display: "font-display font-normal leading-[1.02] tracking-[-0.02em] text-ink",
  displayItalic: "font-display font-normal italic tracking-[-0.015em]",
  eyebrow:
    "font-mono text-[12px] font-semibold uppercase tracking-[0.22em] text-ink-mute max-[600px]:text-[10px] max-[600px]:tracking-[0.16em] max-[600px]:leading-[1.35] max-[600px]:break-words",
  eyebrowDot: "mr-2 inline-block size-1.5 rounded-full bg-madder align-[2px]",
  kicker:
    "font-mono text-[12px] uppercase tracking-[0.12em] text-saffron-deep max-[600px]:leading-[1.35] max-[600px]:break-words",
  body: "m-0 text-base leading-[1.55] text-ink-soft max-[600px]:text-sm max-[600px]:leading-normal",
  bodySm: "m-0 text-sm leading-normal text-ink-soft",
  lede: "m-0 text-lede leading-[1.55] text-ink-soft max-[600px]:text-sm max-[600px]:leading-normal",
  sectionTitle:
    "my-3 font-display text-[clamp(36px,5vw,56px)] font-normal leading-[1.02] tracking-[-0.02em] text-ink",
  sectionAccent: "font-display font-normal italic tracking-[-0.015em] text-madder",
  monoInline: "font-mono"
};

const buttonBase =
  "inline-flex items-center justify-center gap-2.5 rounded-pill border border-transparent px-[22px] py-3.5 font-body text-sm font-semibold tracking-[0.01em] no-underline transition-[transform,box-shadow,background,color,border-color] duration-200 disabled:cursor-not-allowed disabled:opacity-50 active:translate-y-px max-[600px]:min-h-11 max-[600px]:max-w-full max-[600px]:whitespace-normal max-[600px]:px-4 max-[600px]:py-3 max-[600px]:text-center";

export const button = {
  base: buttonBase,
  ink: cx(
    buttonBase,
    "bg-ink text-cream shadow-[0_6px_20px_-8px_rgba(26,20,12,0.55)] hover:enabled:bg-madder-deep hover:enabled:shadow-[0_10px_28px_-10px_rgba(124,37,32,0.55)]"
  ),
  madder: cx(
    buttonBase,
    "bg-madder text-cream shadow-[0_8px_24px_-10px_rgba(169,52,40,0.6)] hover:enabled:-translate-y-px hover:enabled:bg-madder-deep"
  ),
  ghost: cx(
    buttonBase,
    "border-[rgba(26,20,12,0.22)] bg-transparent text-ink hover:enabled:border-ink hover:enabled:bg-[rgba(26,20,12,0.04)]"
  ),
  ghostOnDark: cx(
    buttonBase,
    "border-[rgba(251,246,232,0.3)] bg-transparent text-cream hover:enabled:border-[rgba(251,246,232,0.55)] hover:enabled:text-cream"
  ),
  saffron: cx(
    buttonBase,
    "bg-saffron text-ink shadow-[0_8px_24px_-10px_rgba(212,147,58,0.65)] hover:enabled:bg-saffron-deep hover:enabled:text-cream"
  ),
  compact: "px-4 py-2.5",
  link:
    "inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft no-underline transition-[color,gap] duration-200 hover:gap-2.5 hover:text-madder"
};

const tagBase =
  "inline-flex items-center gap-1.5 rounded-pill px-[11px] py-[5px] font-mono text-[11px] font-semibold uppercase tracking-[0.12em] max-[600px]:max-w-full max-[600px]:whitespace-normal max-[600px]:leading-tight";

export const tag = {
  base: tagBase,
  saffron: cx(tagBase, "bg-[rgba(212,147,58,0.18)] text-saffron-deep"),
  madder: cx(tagBase, "bg-[rgba(169,52,40,0.12)] text-madder-deep"),
  teal: cx(tagBase, "bg-[rgba(37,86,79,0.14)] text-teal-deep"),
  mute: cx(tagBase, "bg-[rgba(26,20,12,0.06)] text-ink-soft"),
  locked: cx(tagBase, "bg-ink text-saffron-soft")
};

export const card = {
  panel:
    "relative rounded-card bg-cream p-7 shadow-page max-[600px]:rounded-[18px] max-[600px]:p-4",
  bordered:
    "rounded-card border border-[rgba(26,20,12,0.10)] bg-cream p-7 max-[600px]:rounded-[18px] max-[600px]:p-5 max-[380px]:p-4",
  ticket:
    "ticket relative rounded-[18px] border border-[rgba(26,20,12,0.08)] bg-cream p-6 shadow-soft max-[600px]:rounded-[18px]"
};

export const form = {
  field: "flex flex-col gap-1.5 max-[380px]:gap-1",
  label:
    "font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-mute max-[380px]:text-[10px] max-[380px]:tracking-[0.11em]",
  input:
    "w-full border-0 border-b-[1.5px] border-[rgba(26,20,12,0.22)] bg-transparent px-0.5 pb-3 pt-2.5 font-display text-[22px] text-ink outline-none transition-colors placeholder:text-mist placeholder:italic focus:border-madder max-[600px]:text-[clamp(18px,5vw,22px)] max-[380px]:pb-2.5 max-[380px]:pt-2 max-[380px]:text-lg",
  error:
    "rounded-r-lg border-l-2 border-madder bg-[rgba(169,52,40,0.08)] px-3 py-2 font-mono text-[13px] text-madder-deep"
};

export const nav = {
  root:
    "site-nav mx-auto mt-7 flex w-[min(1180px,92vw)] items-center justify-between gap-[18px] max-[720px]:flex-wrap max-[600px]:mt-4 max-[600px]:w-[calc(100%_-_32px)] max-[600px]:gap-2.5 max-[380px]:w-[calc(100%_-_28px)]",
  burger:
    "nav-burger ml-auto hidden size-12 shrink-0 cursor-pointer items-center justify-center rounded-[14px] border border-[rgba(26,20,12,0.2)] bg-cream p-0 text-ink transition-colors hover:border-ink hover:bg-[rgba(26,20,12,0.04)] focus-visible:border-saffron-deep max-[720px]:inline-flex max-[600px]:size-11 max-[600px]:rounded-xl",
  links:
    "nav-links flex items-center gap-7 text-sm text-ink-soft max-[720px]:order-3 max-[720px]:hidden max-[720px]:w-full max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-0 max-[720px]:border-t max-[720px]:border-[rgba(26,20,12,0.1)] max-[720px]:pb-2 max-[720px]:pt-1 max-[600px]:pb-1 max-[600px]:pt-0.5",
  link:
    "nav-link relative px-0.5 py-1.5 transition-colors after:absolute after:inset-x-0 after:bottom-0 after:h-px after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 hover:text-madder hover:after:scale-x-100 max-[720px]:inline-flex max-[720px]:min-h-11 max-[720px]:items-center max-[720px]:px-1 max-[720px]:py-3 max-[600px]:py-2.5"
};
