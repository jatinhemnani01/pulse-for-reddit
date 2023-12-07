import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Navigation from "@/src/components/Navigation";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SessionProvider>
      <Navigation />
      <Component {...pageProps} />
      </SessionProvider>
    </>
  );
}
