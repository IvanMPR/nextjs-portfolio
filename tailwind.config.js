/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      //   "gradient-conic":
      //     "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      // },
      // colors: {
      //   primary: "rgb(var(--color-primary) / alpha-value)",
      //   primaryOffset: "rgb(var(--color-primary-offset) / alpha-value)",
      // },
      colors: {
        bg: "var(--color-bg)",
        "bg-offset": "var(--color-bg-offset)",
        text: "var(--color-text)",
        "text-offset": "var(--color-text-offset)",
        primary: "var(--color-primary)",
        "primary-offset": "var(--color-primary-offset)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
