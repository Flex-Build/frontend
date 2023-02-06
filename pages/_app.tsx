import "@/styles/globals.scss";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import "@rainbow-me/rainbowkit/styles.css";
import {
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { WagmiConfig } from "wagmi";
import { Chains, wagmiClient } from "@/walletConfig";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
    cache: new InMemoryCache(),
  });
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={Chains}>
        <ApolloProvider client={client}>
          <Navbar/>
          <Component {...pageProps} />
        </ApolloProvider>
      </RainbowKitProvider>
    </WagmiConfig>
  );
}
