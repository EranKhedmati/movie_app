/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/App.jsx"
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        '2xl': "clamp(1.5rem , 1vw + 1rem, 2rem)",
        'xl': "clamp(1rem , 1vw + 0.5rem, 1.5rem)",
        'lg': "clamp(0.8rem , 1vw + 0.3rem, 1.2rem)",
      }
    },
    colors: {
      "red": {
        500: "#FF0000"
      },
      "gray": {
        300: "#D9D9D9"
      }
    }
  },
  plugins: [],
}

