/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        secondary: "#f6f6f6",
        primary: "#3B82F6"
      }
    },
  },
  plugins: [],
}

