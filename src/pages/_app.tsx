// @ts-nocheck

import { AppProps } from "next/app";
import { FC } from "react";
import "../components/bufferFill";
import { Header } from "../components/Header";
import { Providers } from "../components/Providers";

// Use require instead of import since order matters
//@ts-ignore
require("@solana/wallet-adapter-react-ui/styles.css");
//@ts-ignore
require("../../styles/globals.css");
//@ts-ignore
const App = ({ Component, pageProps }) => {
  return (
    <Providers>
      <Header />

      <Component {...pageProps} />
    </Providers>
  );
};

export default App;
