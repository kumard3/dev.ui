import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-[#101827] w-full min-h-screen ">
      <Nav />
      <section className="text-white">
      <Component {...pageProps} />
      </section>
    </div>
  );
}

export default MyApp;
