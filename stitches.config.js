import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      background: "hsl(240, 27%, 251%)",
      "subtle-floating": "hsl(0, 0%, 100%)",

      primary: "hsl(252, 94%, 67%)",
      "primary-lt": "hsl(252, 100%, 73%)",

      "ntrl-dkr": "hsl(228, 29%, 7%)",
      "ntrl-dk": "hsl(231, 20%, 27%)",
      ntrl: "hsl(231, 20%, 36%)",
      "ntrl-lt": "hsl(231, 37%, 63%)",
      "ntrl-ltr": "hsl(231, 20%, 61%)",
      "ntrl-ltst": "hsl(231, 73%, 93%)",

      "muted-dk": "hsl(228, 71%, 93%)",
      muted: "hsl(228, 71%, 99%)",
      "dark-dk": "hsl(230, 21%, 23%)",
      dark: "hsl(230, 21%, 27%)",
      success: "hsl(160, 67%, 52%)",
      "success-background": "hsla(160, 67%, 52%, 6%)",
      danger: "rgb(236, 87, 87)",
      "danger-background": "hsl(0, 100%, 80%)",
      warning: "hsl(34, 100%, 50%)",
      "warning-background": "hsla(34, 100%, 50%, 6%)",
    },
    space: {},
    fontSizes: {
      xxs: "0.6875rem",
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      xxl: "1.5rem",
    },
    fonts: {
      spartan: "Spartan, sans-serif",
    },
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {
      "layer-a": 1,
      "layer-b": 2,
      "layer-c": 3,
    },
    transitions: {},
  },
  media: {
    sm: "(min-width: 576px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 992px)",
    xl: "(min-width: 1200px)",
    xxl: "(min-width: 1400px)",
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
  },
});

export const dark = createTheme("dark", {
  colors: {
    background: "hsl(233, 30%, 11%)",
    "subtle-floating": "hsl(233, 31%, 17%)",

    "ntrl-dkr": "hsl(0, 0%, 100%)",
    "ntrl-ltst": "hsl(231, 30%, 21%)",

    "muted-dk": "hsl(232, 30%, 15%)",
    muted: "hsl(232, 30%, 21%)",
  },
});

console.log(dark.className);

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    boxSizing: "border-box",
    "&::after, &::before": {
      boxSizing: "border-box",
    },
  },
  "html, body": {
    height: "100%",
  },
  body: {
    lineHeight: 1.5,
    fontSmooth: "antialiased",
    backgroundColor: "$background",
  },
  "img,picture,video,canvas,svg": {
    display: "block",
    blockSize: "100%",
  },
  "input,button,textarea,select": {
    font: "inherit",
  },
  "p, h1. h2, h3, h5, h6": {
    overflowWrap: "break-word",
  },
  "#root,#__next": {
    isolation: "isolate",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "@font-face": [
    {
      fontFamily: "Spartan",
      src: 'url("/fonts/Spartan-Regular.ttf")',
      fontWeight: 400,
    },
    {
      fontFamily: "Spartan",
      src: 'url("/fonts/Spartan-Bold.ttf")',
      fontWeight: 700,
    },
  ],
});
