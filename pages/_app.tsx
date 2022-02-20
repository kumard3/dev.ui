import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
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
