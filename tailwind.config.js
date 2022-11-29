/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primaryBase': '#2D2D2D',
        'primaryMain': '#00BDF8',
        'messegeBox' : '9CB8C8'
      }
    },
  },
  plugins: [],
}
