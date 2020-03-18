module.exports = {
  theme: {
    fontFamily: {
      heading: ['"Fredoka One"', "cursive"],
      paragraph: ['"Quattrocento Sans"', "sans-serif"]
    },
    backgroundColor: theme => ({
      ...theme("colors"),
      primary: "#331F0D",
      secondary: "#C58965",
      tertiary: "#7BD873",
      grey2: "#94664A",
      grey3: "#62402B",
      grey4: "#331F0D"
    }),
    colors: {
      green: "#7BD873",
      grey: "#C58965",
      white: "#fff"
    },

    extend: {
      gridTemplateColumns: {
        // customized 3
        hero: "1fr 3fr 1fr"
      }
    }
  },
  variants: {},
  plugins: []
};
