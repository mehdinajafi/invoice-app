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
      primary: "hsl(252, 94%, 67%)",
      "primary-lt": "hsl(252, 100%, 73%)",
      "primary-ltr": "hsl(231, 73%, 93%)",

      "ntrl-dkr": "hsl(228, 29%, 7%)",
      "ntrl-dk": "hsl(231, 20%, 27%)",
      ntrl: "hsl(232, 20%, 36%)",
      "ntrl-lt": "hsl(231, 37%, 63%)",
      "ntrl-ltr": "hsl(231, 20%, 61%)",

      success: "hsl(160, 67%, 52%)",
      "success-lt": "hsl(160 67% 52% / 6%)",
      danger: "rgb(236, 87, 87)",
      "danger-lt": "hsl(0, 100%, 80%)",
      warning: "hsl(34, 100%, 50%)",
      "warning-lt": "hsla(34 100% 50% / 6%)",
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
      bottomLayer: -1,
      layerA: 1,
      layerB: 2,
      layerC: 3,
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
