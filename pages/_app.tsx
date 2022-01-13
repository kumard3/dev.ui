import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { Componentbutton } from "../components/ComponentButton";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  
    return (
      <div className="bg-[#00091b] w-full min-h-screen text-white ">
        <Nav />
        <section className=" py-[50px]">
          <Component {...pageProps} />
        </section>
        {/* <Footer /> */}
      </div>
    );

}

export default MyApp;
