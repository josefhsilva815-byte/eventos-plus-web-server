/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/views/**/*.html",
    "./src/public/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          azul: "#1E3A8A",
          dourado: "#FFD700"
        }
      },
      fontFamily: {
        sans : ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

