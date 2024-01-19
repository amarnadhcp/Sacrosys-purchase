/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'default':'#F8F8F8',
        'oddcolor':'#F5F5F5',
        'inputColor': '#E9E9E9',
        'custom-black':'#121212',
        'custom-cream':'#FCFBFB',
      },
       fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

