// src/theme/theme.js
import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light", // Always start in light mode
  useSystemColorMode: false, // Don't use system's color mode preference
};

const customTheme = extendTheme({ config });

export default customTheme;
