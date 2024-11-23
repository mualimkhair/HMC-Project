/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ultra: ['Ultra'],
        mons: ['Montserrat'],
      },
    },
    colors: {
      ...colors,
      bg: "#001524",
      primary: "#ffecd1",
      secondary: "#ff7d00",
    },
  },
  
  plugins: [],
}