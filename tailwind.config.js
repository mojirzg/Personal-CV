/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  darkMode: "class",
  theme: {
    colors: {
      "background-card": "var(--background-card)",
      "background-input": "var(--background-input)",
      "background-menu": "var(--background-menu)",
      "background-subtle": " var(--background-subtle)",
      "border-button": "var(--border-button)",
      "content-primary": "var(--content-primary)",
      "background-menu": "var(--background-menu)",
      "border-menu": "var(--border-menu)",
      "content-secondary": "var(--content-secondary)",
      "surface-main": "var(--surface-main)",
    },
    extend: {
      fontFamily: {
        DEFAULT: ["var(--font-satoshi)"],
      },
      keyframes: {
        opacityChanger: {
          from: {
            opacity: "0",
          },
          to: {
            opacity: "1",
          },
        },
        typing: {
          from: {
            "max-width": 0,
            opacity: 1,
          },
          to: {
            "max-width": "100%",
            opacity: "1",
          },
        },
        "blink-caret": {
          "from, to": {
            "border-color": "transparent",
          },
          "50%": {
            "border-color": "var(--content-primary, #fff)",
          },
        },
        typingFrameworks: {
          "0%": {
            "max-width": "0%",
          },
          "20%": {
            "max-width": "100%",
          },
          "50%": {
            "max-width": "100%",
          },
          "70%": {
            "max-width": "0%",
          },
          "100%": {
            "max-width": "0%",
          },
        },
      },
    },
  },
  plugins: [],
};
