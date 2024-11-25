/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom solid colors
        'pest-navy': '#0a3464',
        'pest-navy-light': '#0e4687',
        'pest-light-blue': '#9dc1eb',
        'pest-red': '#a51126',
        'pest-black': '#191919',
        'pest-grey': '#616060',
        'pest-logo-grey': '#c5d2db',
        'angie-orange': '#fc5647',
        'angie-hover': '#d71201',
      }
    },
  },
  plugins: [],
}