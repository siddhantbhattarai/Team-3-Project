// src/theme.js
import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      blue: "#274682",
      orange: "#F28C02",
      white: "#FFFFFF",
      grayBg: "#F2F2F2",
      grayText: "#4A4A4A",
      bg: "gray.100",
      color: "gray.800",
    },
  },
  styles: {
    global: {
      body: {
        bg: "brand.grayBg",
        color: "brand.grayText",
      },
    },
  },
});

export default theme;
