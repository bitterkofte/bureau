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
      dropShadow: {
        shine: ["0px 0px 10px #ffffff92", "0px 0px 5px #ffffffd5"],
        shiner: ["0px 0px 10px #ffffff", "0px 0px 5px #ffffff"],
      },
      colors: {
        "lp-brown-t": "#77212c99",
        "lp-brown-tt": "#87122253",
        "lp-brown-ttt": "#8e0d1e2f",
        "lp-brown-d1": "#750010",
        "lp-brown-d2": "#52000B",
        "lp-brown-l1": "#B43242",
        "lp-brown-l11": "#BF273A",
        "lp-brown-l2": "#D35F6E",
        "lp-brown-l22": "#E05264",
        "lp-brown-l3": "#e37c89",
        "lp-brown-l33": "#f06e80",
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
      keyframes: {
        slideUp: {
          "0%": { transform: "translateY(40%)", opacity: "0" },
          "100%": { transform: "translateY(0%)", opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
      },
      animation: {
        slideUp: "slideUp 0.2s ease-out",
        fadeOut: "fadeOut 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
