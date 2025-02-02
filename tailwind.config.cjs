/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#111',
        'light': '#f5fffa',
        'prime': '#ff4500',
        'prime-light': '#fc7b4c',
        'grey-extra-light': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#777',
        'grey-dark': '#333',
      },
    },
  },
  plugins: [],
}
