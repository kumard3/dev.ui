import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../website/components/Nav";
import Footer from "../website/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
