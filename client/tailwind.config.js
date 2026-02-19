/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        obsidian: "#020205",
        ember: {
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
        },
        spiritual: "#1e1b4b", // Deep indigo-blue
      },
      fontFamily: {
        serif: ['"Crimson Text"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};