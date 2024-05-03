import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import { Provider } from "react-redux";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import { store } from "../redux/store";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <Component {...pageProps} />
        <ProgressBar height="4px" color="#faa831" />
      </Provider>
    </ChakraProvider>
  );
}
