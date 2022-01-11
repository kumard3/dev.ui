import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { Componentbutton } from "../components/ComponentButton";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  
    return (
      <div className="dark:bg-[#101827] w-full min-h-screen dark:text-white text-dark">
        <Nav />
        <section className="dark:text-white">
          <Component {...pageProps} />
        </section>
        <Footer />
      </div>
    );

}

export default MyApp;
