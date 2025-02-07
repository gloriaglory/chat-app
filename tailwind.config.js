/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        swing: {
          "0%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(10deg)" },
          "50%": { transform: "rotate(-10deg)" },
          "75%": { transform: "rotate(5deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        swing: "swing 0.5s ease-in-out",
      },
      colors: {
        primary: "#EF8D41",
        secondary: "#FFBF43"
      },
      container: {
        center: true,
        padding: {
          default: '1rem',
          sm: '3rem',
        }
      }
    },
  },
  plugins: [],
}
