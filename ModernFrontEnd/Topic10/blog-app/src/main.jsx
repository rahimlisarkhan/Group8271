import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./styles/global.css";

import { ToastContainer } from "react-toastify";

import GlobalProvider from "./store/global/GlobalProvider.jsx";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  xususisari: {
    700: "#f321",
  },
};

const theme = extendTheme({ colors });

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <ChakraProvider theme={theme}>
      <GlobalProvider>
        <App />
        <ToastContainer />
      </GlobalProvider>
    </ChakraProvider>
  </BrowserRouter>
);
