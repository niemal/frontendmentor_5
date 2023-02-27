import { createGlobalStyle } from "styled-components";
import { COLORS } from "../constants";

const GlobalStyles = createGlobalStyle`
/* CSS Reset */
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
/* GLOBAL STYLES */
*,
*:before,
*:after {
  box-sizing: border-box;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: auto;
}
#root {
  isolation: isolate;
  min-height: 100%;
  width: 100%;
}
html, body, #__next, #__next > div {
  height: 100%;
}
body {
  font-family: var(--font-primary);
  font-weight: var(--font-weight-regular);
  font-size: ${16 / 16}rem;
  background-color: var(--color-white);
}
a:focus {
  outline: 5px auto var(--color-primary);
}
body, input, button, select, option {
  font-family: var(--font-family);
  font-weight: var(--font-weight-medium);
}
h1, h2, h3, h4, h5, h6, strong {
  font-weight: var(--font-weight-bold);
}
h1, h2 h3, h4, h5, h6, p {
  text-rendering: optimizeLegibility;
}
p {
  margin-bottom: 1.5em;
  font-size: 1.125rem;
}
em {
  font-style: italic;
}

/* CSS Variables */
:root {
  --font-primary: 'League Spartan', sans-serif;
  --font-weight-bold: 700;

  /* theme 1 */
  --color-main-background-theme-1: ${COLORS.theme_1.very_dark_blue_1};
  --color-toggle-background-theme-1: ${COLORS.theme_1.very_dark_blue_2};
  --color-keypad-background-theme-1: ${COLORS.theme_1.very_dark_blue_2};
  --color-screen-background-theme-1: ${COLORS.theme_1.very_dark_blue_3};

  --color-key-background-theme-1: ${COLORS.theme_1.dark_blue_1};
  --color-key-shadow-theme-1: ${COLORS.theme_1.dark_blue_2};

  --color-key-background-toggle-theme-1: ${COLORS.theme_1.red};
  --color-key-shadow-toggle-theme-1: ${COLORS.theme_1.dark_red};

  --color-offkey-background-theme-1: ${COLORS.theme_1.light_gray_orange};
  --color-offkey-shadow-theme-1: ${COLORS.theme_1.gray_orange};

  --color-text-primary-theme-1: ${COLORS.theme_1.very_dark_gray_blue};
  --color-text-secondary-theme-1: ${COLORS.theme_1.very_dark_gray_blue};
  --color-text-tertiary-theme-1: ${COLORS.white};

  /* theme 2 */
  --color-main-background-theme-2: ${COLORS.theme_2.light_gray};
  --color-toggle-background-theme-2: ${COLORS.theme_2.gray_red};
  --color-keypad-background-theme-2: ${COLORS.theme_2.gray_red};
  --color-screen-background-theme-2: ${COLORS.theme_2.very_light_gray};

  --color-key-background-theme-2: ${COLORS.theme_2.dark_cyan};
  --color-key-shadow-theme-2: ${COLORS.theme_2.very_dark_cyan};

  --color-key-background-toggle-theme-2: ${COLORS.theme_2.orange};
  --color-key-shadow-toggle-theme-2: ${COLORS.theme_2.dark_orange};

  --color-offkey-background-theme-2: ${COLORS.theme_2.light_gray_yellow};
  --color-offkey-shadow-theme-2: ${COLORS.theme_2.dark_gray_orange};

  --color-text-primary-theme-2: ${COLORS.theme_2.dark_gray_yellow};
  --color-text-secondary-theme-2: ${COLORS.white};
  --color-text-tertiary-theme-2: ${COLORS.theme_2.dark_gray_yellow};

  /* theme 3 */
  --color-main-background-theme-3: ${COLORS.theme_3.very_dark_violet_1};
  --color-toggle-background-theme-3: ${COLORS.theme_3.very_dark_violet_2};
  --color-keypad-background-theme-3: ${COLORS.theme_3.very_dark_violet_2};
  --color-screen-background-theme-3: ${COLORS.theme_3.very_dark_violet_2};

  --color-key-background-theme-3: ${COLORS.theme_3.dark_violet};
  --color-key-shadow-theme-3: ${COLORS.theme_3.vivid_magenta};

  --color-key-background-toggle-theme-3: ${COLORS.theme_3.pure_cyan};
  --color-key-shadow-toggle-theme-3: ${COLORS.theme_3.soft_cyan};
--color-offkey-background-theme-3: ${COLORS.theme_3.very_dark_violet_3};

  --color-offkey-shadow-theme-3: ${COLORS.theme_3.dark_magenta};

  --color-text-primary-theme-3: ${COLORS.white};
  --color-text-secondary-theme-3: ${COLORS.theme_3.very_dark_blue};
  --color-text-tertiary-theme-3: ${COLORS.theme_3.light_yellow};
}
`;

export default GlobalStyles;
