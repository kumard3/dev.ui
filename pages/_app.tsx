import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { Componentbutton } from "../components/ComponentButton";
import Footer from "../components/Footer";
function MyApp({ Component, pageProps }: AppProps) {
  const routes = [
    {
      href: "/components/card",
      title: "Card",
    },
    {
      href: "/components/footer",
      title: "Footer",
    },
    {
      href: "/components/button",
      title: "Button",
    },
    {
      href: "/components/nav",
      title: "Nav",
    },
  ];
  const router = useRouter();
  console.log(router);

  
    return (
      <div className="bg-[#101827] w-full min-h-screen ">
        <Nav />
        <section className="text-white">
          <Component {...pageProps} />
        </section>
        <Footer />
      </div>
    );

}

export default MyApp;
