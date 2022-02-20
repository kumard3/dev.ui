import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../website/components/Nav";
import Footer from "../website/components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Nav />
      <section className="py-[50px]">
        <Component {...pageProps} />
      </section>
      <Footer />
    </>
  );
}

export default MyApp;
