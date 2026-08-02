import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FCFCFC",
        surface: "#FFFFFF",
        border: "#E5E7EB",
        foreground: "#111827",
        muted: "#6B7280",
        accent: {
          DEFAULT: "#2563EB",
          hover: "#1D4ED8",
          subtle: "#EFF4FF",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        container: "1180px",
      },
      borderRadius: {
        xl: "14px",
        "2xl": "20px",
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(17, 24, 39, 0.04)",
        card: "0 1px 3px rgba(17, 24, 39, 0.06), 0 1px 2px rgba(17, 24, 39, 0.04)",
        "card-hover":
          "0 12px 24px -8px rgba(17, 24, 39, 0.10), 0 4px 8px -4px rgba(17, 24, 39, 0.06)",
      },
      letterSpacing: {
        tightest: "-0.04em",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
