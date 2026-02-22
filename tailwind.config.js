/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html", "js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "monospace"],
      },
      colors: {
        // McMaster University brand colours (brand.mcmaster.ca)
        maroon: {
          DEFAULT: "#7A003C",
          600: "#7A003C",
          500: "#8a0045",
          400: "#9e0d52",
          100: "#f5e6ed",
        },
        gold: {
          DEFAULT: "#FDBF57",
          600: "#FDBF57",
          500: "#fdc969",
          400: "#fdd37b",
          100: "#FFFCF7",
        },
        macgrey: {
          DEFAULT: "#495965",
          600: "#495965",
          500: "#5c6b78",
          400: "#6f7d8a",
        },
      },
    },
  },
  plugins: [],
};
