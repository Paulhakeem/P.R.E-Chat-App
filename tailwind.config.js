/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary': '#828790',
      'secondary': '#4cc2ff',
      'gray': '#333333',
      'white': '#ffff'
    },
    extend: {},
  },
  plugins: [],
}