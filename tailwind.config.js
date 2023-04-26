/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js,jsx,tsx}", "./src/**/*.{html,js,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#D9B0C3',
        secondary: '#63BFBF'
      }
    },
  },
  plugins: [],
}

