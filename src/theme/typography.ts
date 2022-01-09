import { theme } from "@chakra-ui/theme";

const typography = {
  fontSizes: {
    "10": "0.625rem",
    "11": "0.688rem",
    "12": "0.75rem",
    "14": "0.875rem",
    "16": "1rem",
    "20": "1.25rem",
    "24": "1.5rem",
    "30": "1.875rem",
    "36": "2.25rem",
  },
  fontWeights: {
    black: 900,
    bold: 700,
    extrabold: 800,
    hairline: 100,
    light: 300,
    medium: 500,
    normal: 400,
    semibold: 600,
    thin: 200,
  },
  fonts: {
    body: "system-ui, sans-serif",
    heading: "Georgia, serif",
    mono: "Menlo, monospace",
  },
  letterSpacings: {
    normal: "0",
    tight: "-0.025em",
    tighter: "-0.05em",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
  lineHeights: {
    base: "1.625rem",
    none: 1,
    normal: "normal",
  },
  ...theme.fonts,
};

export default typography;
