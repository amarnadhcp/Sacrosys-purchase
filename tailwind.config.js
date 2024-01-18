/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#E9E9E9',
        'custom-cream':'#FCFBFB',
      }
    },
  },
  plugins: [],
}

