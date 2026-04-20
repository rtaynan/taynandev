import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        brand: {
          DEFAULT: "#2563eb",
          dark: "#60a5fa",
        },
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            maxWidth: "none",
            color: theme("colors.slate.700"),
            a: {
              color: theme("colors.brand.DEFAULT"),
              textDecoration: "none",
              fontWeight: "500",
              "&:hover": { textDecoration: "underline" },
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
            code: {
              fontWeight: "400",
              backgroundColor: theme("colors.slate.100"),
              padding: "0.15rem 0.35rem",
              borderRadius: "0.25rem",
              fontSize: "0.875em",
            },
            "pre code": {
              backgroundColor: "transparent",
              padding: "0",
            },
          },
        },
        invert: {
          css: {
            color: theme("colors.slate.300"),
            a: { color: theme("colors.brand.dark") },
            code: {
              backgroundColor: theme("colors.slate.800"),
              color: theme("colors.slate.200"),
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
