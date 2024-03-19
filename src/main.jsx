import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e8f0fe",
    100: "#c6d9fd",
    200: "#a1c0fc",
    300: "#7ba7fa",
    400: "#5a8ef8",
    500: "#3b74f6",
    600: "#2b5adc",
    700: "#1c41b8",
    800: "#102894",
    900: "#081670",
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
