const colorNames = {
  white: "#FFFFFF",
  whiteLilac: "#FBFBFE",
  mineShaft: "#252525",
  slateGray: "#6E7E91",
  iron: "rgba(209, 213, 219, 0.3)",
  dodgerBlue: "#0366D6",
  scienceBlue: "#2188FF",
  shipCove: "#7EABDE",
  anakiwa: "#8CC2FF",
  tileBackground: "#363636B2",
};

const common = {
  breakpoint: {
    mobile: 767,
  },
};

export const lightMode = {
  ...common,
  boxShadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305",
  switcher: {
    background: "#E5E5E5",
    circle: "#6E7E91",
    icon: "#FFFFFF",
  },
  color: {
    background: colorNames.whiteLilac,
    textPrimary: colorNames.mineShaft,
    textSecondary: colorNames.slateGray,
    accent: colorNames.dodgerBlue,
    tileTitle: colorNames.dodgerBlue,
    white: colorNames.white,
    iron: colorNames.iron,
    button: {
      background: colorNames.dodgerBlue,
      border: colorNames.shipCove,
    },
  },
};

export const darkMode = {
  ...common,
  boxShadow: "0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305",
  switcher: {
    background: "#6E7E91",
    circle: "#FFFFFF",
    icon: "#252525",
  },
  color: {
    background: colorNames.mineShaft,
    textPrimary: colorNames.white,
    textSecondary: colorNames.white,
    accent: colorNames.scienceBlue,
    tileTitle: colorNames.white,
    white: "rgba(54, 54, 54, 0.7)",
    iron: "rgba(209, 213, 219, 0.1)",
    button: {
      background: colorNames.scienceBlue,
      border: colorNames.anakiwa,
    },
  },
};
