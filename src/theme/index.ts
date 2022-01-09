import { extendTheme } from "@chakra-ui/react";
import colors from "./colors";
import styles from "./styles";
import typography from "./typography";
import { createBreakpoints } from "@chakra-ui/theme-tools";

const breakpoints = createBreakpoints({
  lg: "96rem",
  md: "68rem",
  sm: "58rem",
  xl: "128rem",
});

export const theme = extendTheme({
  borders: styles.borders,
  breakpoints,
  colors,
  textStyles: styles.textStyles,
  typography,
});
