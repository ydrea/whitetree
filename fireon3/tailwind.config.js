/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paleo: "#e9f83d66",
        olive: "#808000",
        oliv: "#9b9f10",
        oli: "#b5bd1f",
        ol: "#cfda2e",
        o: "#e9f83d99",
        a: "#929224",
        ad: "#A4A448",
        add: "#B6B66D",
        addw: "#C8C891",
        addwh: "#DADAB6",
        addwht: "#ECECDA",
        addblk: "#121200",
        ddblk: "#242400",
        dblk: "#363600",
        blk: "#494900",
        lk: "#5B5B00",
        k: "#6D6D00",
      },
    },
  },
  plugins: [],
};
