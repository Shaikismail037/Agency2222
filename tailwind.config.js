/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "neutralSilver":"#f5f7fa",
        "neutralDgrey":"#4d4d4d",
        "brandPrimary":"#4caf4f",
        "neutralGrey":"#717171",
      }
    },
  },
  plugins: [],
}