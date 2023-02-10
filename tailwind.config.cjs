/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        open_sans: "'Open Sans', sans-serif",
        rajdhani: "'Rajdhani', sans-serif",
        homemade_apple: "'Homemade Apple', cursive",
      },
      colors: {
        primary: "#040F16",
        secoundary: "#2554D7",
      },
    },
  },
  plugins: [],
};
