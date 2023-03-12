/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  colors: {
    bg_blue: "#127bcb",
    off_white: "#fffffe",
    text_white: "#fff",
    gray: "#969393",
  },
  fontFamily: {
    sans: ["Roboto", "sans-serif"],
    dmsans: ["DM Sans", "sans-serif"],
    montserrat: ["Montserrat", "sans-serif"],
  },
  screens: {
    xs: "480px",
    sm: "768px",
    md: "1060px",
    lg: "1280px",
  },

  plugins: [],
};
