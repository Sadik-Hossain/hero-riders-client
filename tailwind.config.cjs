/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#2c55f9",

          secondary: "#f4355f",

          accent: "#6fdb99",

          neutral: "#1D1E2F",

          "base-100": "#EBEDEF",

          info: "#4F9BF3",

          success: "#47D1BF",

          warning: "#DEA412",

          error: "#FB0E3D",
        },
      },
    ],
  },
};
