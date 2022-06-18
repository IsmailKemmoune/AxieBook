module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        black: "#000",
        white: "#fff",
        classes: {
          plant: "#96CB00",
          aqua: "#35C2DE",
          beast: "#F59B14",
          bird: "#FA59A0",
          reptile: "#9967FB",
          mech: "#71898E",
          dusk: "#029FAE",
          bug: "#FF433E",
          dawn: "#7183E3",
        },
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
        manager: "#E8D5B5",
        scholar: "#93D3BE",
        delete: "#C11A43",
        expand: "#47817F",
      },
      fontFamily: {
        primary: ["Work Sans", "sans-serif"],
        logo: ["Ubuntu Mono", "monospace"]
      },
      spacing: {
        13: "3.25rem",
        15: "3.75rem",
        128: "32rem",
        144: "36rem",
      },
      minWidth: {
        "1/2": "50%",
        post: "64rem",
      },
      screens: {
        sidebarsm: {max: "2000px"},
        postmd: {max: "1100px"},
        postsm: {max: "1000px"},
        postxsm: {max: "800px"},
      },
      boxShadow: {
        post: "#25233b -5px 5px, #211f34 -10px 10px, #1d1b2e -15px 15px",
        default: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      },
      gridTemplateColumns: {
        layout: "1fr 1300px 20%",
        smallsb: "1fr 1300px 28%"
      },
      keyframes: {
       "slide-bottom": {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(100px)' },
        },
       "fade-down": {
         "from": {   opacity: "0",
          transform:"translateY(-5%)"},
         "to": {   opacity: "1",
          transform:"translateY(0px)"}
       },
       "fade-up": {
         "from": {   opacity: "1",
          transform:"translateY(0px)"},
         "to": {   opacity: "0",
          transform:"translateY(-5%)"}
       },
      },
      animation: {
        "sliding-form" : 'slide-bottom 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        "fade-down-form" : 'fade-down 1.5s 200ms cubic-bezier(0.250, 0.460, 0.450, 0.940) both', 
        "fade-up-form" : 'fade-up 1.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both'  
      },
    },
  },
  plugins: [],
};
