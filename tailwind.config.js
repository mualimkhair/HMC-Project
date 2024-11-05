/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mons: ['Montserrat'],
        gabarito: ['Gabarito'],
      },
    },
    colors: {
      bg: "#292827",
      primary: "#F9f7e4",
      secondary: "#097351",
    },
  },
  
  plugins: [],
}