module.exports = {
  mode: "jit",
  // prefix: '',
  // purge: {
  //     enabled: true,
  // },
  content: ["./src/**/*.{html,ts}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        "-10": "-10",
      },
      colors: {
        "off-white": "#FCFCFC",
        "light-gray": "#959595",
        "dark-gray": "#343434",
        pointerblack: "#000",
        themecolor: "#6508D1",
      },
      // dropShadow: {
      //   'hov': '-1px -3px 106px -39px rgba(0,0,0,0.75)',
      //   '4xl': [
      //       '0 35px 35px rgba(0, 0, 0, 0.25)',
      //       '0 45px 65px rgba(0, 0, 0, 0.15)'
      //   ]
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
