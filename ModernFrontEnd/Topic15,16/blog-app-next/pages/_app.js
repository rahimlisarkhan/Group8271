import "@/styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Provider } from "react-redux";

import { PagesProgressBar as ProgressBar } from "next-nprogress-bar";

import { store } from "../redux/store";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ProgressBar height="4px" color="#faa831" />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  );
}
