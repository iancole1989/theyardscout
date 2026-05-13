/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          deep: "#1A2424",
          charcoal: "#2D3838",
        },
        teal: {
          DEFAULT: "#0F766E",
          hover: "#134E4A",
        },
        sage: {
          DEFAULT: "#7C9885",
          muted: "#B5C7A8",
        },
        canvas: {
          white: "#FFFEFB",
          subtle: "#F4F1E8",
          card: "#EAE4D3",
        },
        line: "#D9D4C5",
        success: "#15803D",
        caution: "#6B7280",
      },
      fontFamily: {
        sans: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        heading: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
        num: ["'DM Sans Variable'", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        article: "740px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#2D3838",
            maxWidth: "100%",
            h1: { color: "#1A2424", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h2: { color: "#1A2424", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h3: { color: "#1A2424", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            h4: { color: "#1A2424", fontFamily: "'DM Sans Variable', ui-sans-serif, sans-serif" },
            a: {
              color: "#0F766E",
              textDecoration: "underline",
              fontWeight: 500,
              "&:hover": { color: "#134E4A" },
            },
            strong: { color: "#1A2424" },
            code: {
              color: "#1A2424",
              backgroundColor: "#F4F1E8",
              padding: "0.125rem 0.375rem",
              borderRadius: "0.25rem",
              fontWeight: "500",
            },
            "code::before": { content: '""' },
            "code::after": { content: '""' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
