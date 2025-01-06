/** @type {import('tailwindcss').Config} */
const {nextui} = require("@nextui-org/react");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgP: "#1677BD",
        bgS: "#F8F8F8",
        txtP: "#232323",
        txtS: "#8F8F8F",
        txtA: "#AFAFAF ",
        star: "#E8A641",
        aStar: "#9F9F9F",
      },
      fontFamily:{
        lexend: ['Lexend', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      screens: {
        sm2: "700px",
        sm3: "260px",
      },
    },
  },
  plugins: [nextui()],
}

