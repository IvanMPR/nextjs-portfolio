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
    },
  },
  plugins: [],
};
