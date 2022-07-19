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
          Plant: "#96CB00",
          Aquatic: "#35C2DE",
          Beast: "#F59B14",
          Bird: "#FA59A0",
          Reptile: "#9967FB",
          Mech: "#71898E",
          Dusk: "#029FAE",
          Bug: "#FF433E",
          Dawn: "#7183E3",
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
        homesm: {max: "700px"},
        feedlg: {max: "1800px"},
        feedmd: {max: "1100px"},
        feedsm: {max: "740px"},
        sidebarxl: {max: "2022px"},
        sidebarlg: {max: "1800px"},
        sidebarmd: {max: "1350px"},
        sidebarsm: {max: "740px"},
      },
      boxShadow: {
        post: "#25233b -5px 5px, #211f34 -10px 10px, #1d1b2e -15px 15px",
        default: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
        button: "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
        card: "rgba(41, 39, 65, 0.56) 0px 22px 70px 4px;"
      },
      gridTemplateColumns: {
        layout: "1fr 1300px 20%",
        smallsb: "1fr 1300px 28%",
        feedmd: "1fr 650px 28%",
        test: "repeat(auto-fit, minmax(660px, 1fr))"
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
