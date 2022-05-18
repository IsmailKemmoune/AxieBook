module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // colors: {
    //   transparent: "transparent",
    //   black: "#000",
    //   white: "#fff",
    //   primary: "#4B4453",
    //   secondary: "#53596E",
    // },
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        gray: {
          100: "#5B6372",
          200: "#3c424d",
          300: "#282c34",
          400: "#1c1f25",
          500: "#13161b",
        },
        shades: {
          100: "#69687a",
          200: "#545267",
          300: "#3e3d54",
          400: "#25233b",
          500: "#211f34",
          600: "#1d1b2e",
        },
        primary: "#1C1B29",
        secondary: "#292741",
        delete: "#C11A43",
        expand: "#47817F",
      },
      fontFamily: {
        primary: ["Work Sans", "sans-serif"],
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};
