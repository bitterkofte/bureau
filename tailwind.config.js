/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
      },
      backgroundColor: {
        "tr-slate": "#38365f94",
        "tr-lp": "#77212c9d",
      },
      colors: {
        // "lp-brown-light": "#7e363f",
        // "lp-brown-dark": "#602930",
        "lp-brown": "#77212c",
        "lp-brown-light": "#793941",
        "lp-brown-lighter": "#7b5056",
        "lp-brown-lightest": "#c76775",
        "lp-brown-dark": "#591921",
        "lp-brown-darker": "#4a151b",
        "lp-2": "#231f20",
        "lp-2.2": "#322d2e",
        "lp-2.3": "#4a4244",
        "lp-3": "#ffffff",
        "lp-3.2": "#d1d1d1",
        "lp-3.3": "#818181",
        "lp-green": "#006563",
        "lp-green-light": "#008b88",
        "lp-green-lighter": "#00b1ad",
        "lp-green-dark": "#004040",
        "lp-green-darker": "#003131",
      },
    },
  },
  plugins: [],
};
