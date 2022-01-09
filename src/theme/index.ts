import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";
import typography from "./typography";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  lg: "68rem",
  md: "58rem",
  sm: "36rem",
  xl: "96rem",
});

export const theme = extendTheme({
  borders: styles.borders,
  breakpoints,
  colors,
  textStyles: styles.textStyles,
  typography,
});
