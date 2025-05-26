/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#ff7b00',
        animation: '#c35e00',
      },
       animation: {
        shake: 'shake 0.3s linear infinite',
      },
    },
  },
  plugins: [],
}
