/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Open Sans", "sans-serif"],
      },
      container: {
        center: true,
      },
      colors: {
        primary: "#417DD9",
        secondary: "#F6F6F9",
        textMuted: {
          100: "#B0B6C3",
          200: "#A3A3A3",
          300: "#08080A",
          400: "#000000bf",
          500: "#212633",
          600: "#8E9ABB",
          700: "#8D8D8D",
        },
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#417DD9",
          secondary: "#F6F6F9",
          info: "#212633",
          success: "#27AE60",
          warning: "#BB4C22",
          error: "#BB4C22",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
