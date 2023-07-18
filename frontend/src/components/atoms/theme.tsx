import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: "#FF0000",
    secondary: "#00FF00",
  },
  fonts: {
    heading: "Roboto",
    body: "Arial",
  },
  // 他のカスタムスタイルやオプションを追加できます
});

export default theme;