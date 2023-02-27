export const COLORS = {
  white: "hsl(0, 0%, 100%)",
  theme_1: {
    very_dark_blue_1: "hsl(222, 26%, 31%)",
    very_dark_blue_2: "hsl(223, 31%, 20%)",
    very_dark_blue_3: "hsl(224, 36%, 15%)",
    dark_blue_1: "hsl(225, 21%, 49%)",
    dark_blue_2: "hsl(224, 28%, 35%)",
    red: "hsl(6, 63%, 50%)",
    dark_red: "hsl(6, 70%, 34%)",
    light_gray_orange: "hsl(30, 25%, 89%)",
    gray_orange: "hsl(28, 16%, 65%)",
    very_dark_gray_blue: "hsl(221, 14%, 31%)",
  },
  theme_2: {
    light_gray: "hsl(0, 0%, 90%)",
    gray_red: "hsl(0, 5%, 81%)",
    very_light_gray: "hsl(0, 0%, 93%)",
    dark_cyan: "hsl(185, 42%, 37%)",
    very_dark_cyan: "hsl(185, 58%, 25%)",
    orange: "hsl(25, 98%, 40%)",
    dark_orange: "hsl(25, 99%, 27%)",
    light_gray_yellow: "hsl(45, 7%, 89%)",
    dark_gray_orange: "hsl(35, 11%, 61%)",
    dark_gray_yellow: "hsl(60, 10%, 19%)",
  },
  theme_3: {
    very_dark_violet_1: "hsl(268, 75%, 9%)",
    very_dark_violet_2: "hsl(268, 71%, 12%)",
    dark_violet: "hsl(281, 89%, 26%)",
    vivid_magenta: "hsl(285, 91%, 52%)",
    pure_cyan: "hsl(176, 100%, 44%)",
    soft_cyan: "hsl(177, 92%, 70%)",
    very_dark_violet_3: "hsl(268, 47%, 21%)",
    dark_magenta: "hsl(290, 70%, 36%)",
    light_yellow: "hsl(52, 100%, 62%)",
    very_dark_blue: "hsl(198, 20%, 13%)",
  },
};

export const BREAKPOINTS = {
  phone: 600,
  tablet: 1080,
  exclusiveWidth: 1285,
};

export const QUERIES = {
  phoneAndSmaller: `(max-width: ${BREAKPOINTS.phone / 16}rem)`,
  tabletAndSmaller: `(max-width: ${BREAKPOINTS.tablet / 16}rem)`,
  exclusiveWidth: `(max-width: ${BREAKPOINTS.exclusiveWidth / 16}rem)`,
};
