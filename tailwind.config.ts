import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "var(--paper)",
        "paper-warm": "var(--paper-warm)",
        "paper-deep": "var(--paper-deep)",
        cream: "var(--cream)",
        ink: "var(--ink)",
        "ink-soft": "var(--ink-soft)",
        "ink-mute": "var(--ink-mute)",
        madder: "var(--madder)",
        "madder-deep": "var(--madder-deep)",
        "madder-glow": "var(--madder-glow)",
        saffron: "var(--saffron)",
        "saffron-deep": "var(--saffron-deep)",
        "saffron-soft": "var(--saffron-soft)",
        teal: "var(--teal)",
        "teal-deep": "var(--teal-deep)",
        mist: "var(--mist)"
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"]
      },
      borderRadius: {
        card: "var(--radius-card)",
        pill: "var(--radius-pill)",
        md: "var(--radius-md)"
      },
      boxShadow: {
        soft: "var(--shadow-soft)",
        page: "var(--shadow-page)"
      },
      fontSize: {
        lede: "var(--text-lede)"
      },
      width: {
        shell: "min(1180px, 92vw)",
        "shell-narrow": "min(720px, 92vw)"
      },
      maxWidth: {
        shell: "1180px"
      },
      backgroundImage: {
        "ink-teal": "linear-gradient(160deg, var(--ink), var(--teal-deep) 110%)",
        "teal-ink": "linear-gradient(160deg, var(--teal-deep), var(--teal) 55%, var(--ink) 100%)",
        "madder-ink": "linear-gradient(160deg, var(--madder-deep), var(--madder) 50%, var(--ink) 100%)",
        "paper-panel": "linear-gradient(160deg, var(--cream), var(--paper-warm))"
      }
    }
  },
  plugins: []
};

export default config;
