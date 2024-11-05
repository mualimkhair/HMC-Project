/** @type {import('tailwindcss').Config} */
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
      black: "#000000",
      bg: "#292827",
      primary: "#F9f7e4",
      secondary: "#7b0005",
    },
  },
  
  plugins: [],
}