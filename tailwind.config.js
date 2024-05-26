/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'outfit': ['outfit', 'roboto', 'sans-serif'],
      'roboto': ['roboto' ,'outfit', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

