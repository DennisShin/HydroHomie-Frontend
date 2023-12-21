/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      waterBlue: '#0099ff',
      waterHighlight: '#2ca3f2'
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}