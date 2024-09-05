/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        bgColor: "var(--color-bg)",
        bgColorDark: "var(--color-bg-dark)",

        bgOffsetColor: "var(--color-bg-offset)",
        bgOffsetColorDark: "var(--color-bg-offset-dark)",

        textColor: "var(--color-text)",
        textColorDark: "var(--color-text-dark)",

        textOffsetColor: "var(--color-text-offset)",
        textOffsetColorDark: "var(--color-text-offset-dark)",

        primaryColor: "var(--color-primary)",
        primaryColorDark: "var(--color-primary-dark)",

        primaryOffsetColor: "var(--color-primary-offset)",
        primaryOffsetColorDark: "var(--color-primary-offset-dark)",

        secondaryColor: "var(--color-secondary)",
        secondaryColorDark: "var(--color-secondary-dark)",
      },

      boxShadow: {
        custom: "0px 1rem 1rem -1rem rgba(13, 43, 90, 0.08)",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        slideOut: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slideIn: "slideIn 0.3s ease-in-out forwards",
        slideOut: "slideOut 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
