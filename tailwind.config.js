/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "navbar-color": "rgba(217, 217, 217)",
      },
      boxShadow: {
        card: "0px 0px 20px 0px rgb(0 0 0 / 0.1)",
        line: " 0 2px 0px 0px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [],
};
