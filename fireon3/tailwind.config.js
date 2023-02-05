/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("@downwindcss/text-decoration")],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
