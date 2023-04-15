/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: "#040e1a",
        darkturquoise: "#23d3d3",
        gainsboro: "#e5e5e5",
        lightsteelblue: "#b4becb",
        midnightblue: "#1e266d",
      },
      fontFamily: { montserrat: "Montserrat" },
      borderRadius: { "14xl-8": "33.8px" },
    },
    fontSize: {
      "4xs-1": "8.1px",
      "5xs-4": "7.4px",
      "3xs-9": "9.9px",
      "7xs-6": "5.6px",
      sm: "14px",
    },
  },
  corePlugins: { preflight: false },
};
