import "../styles/globals.css";
import type { AppProps } from "next/app";
import Nav from "../components/Nav";
import { useRouter } from "next/router";
import { Componentbutton } from "../components/ComponentButton";
function MyApp({ Component, pageProps }: AppProps) {
  const routes = [ 
    {
      href:"/components/card",
      title:"Card"
    },  {
      href:"/components/footer",
      title:"Footer"
    },  {
      href:"/components/button",
      title:"Button"
    },  {
      href:"/components/nav",
      title:"Nav"
    },
  ]
  const router = useRouter();
  console.log(router);

  if (router.asPath === "/") {
    return (
      <div className="bg-[#101827] w-full min-h-screen ">
        <Nav />
        <section className="text-white">
          <Component {...pageProps} />
        </section>
      </div>
    );
  }
  return (
    <div className="bg-[#101827] w-full min-h-screen ">
      <Nav />
      <section className="text-white container w-full mx-3 mt-3 ">
        <h1 className="text-5xl font-bold">Components</h1>
      <section className="text-white flex justify-center items-center w-full my-4 ">
        {routes.map((n,index)=> {
          return <Componentbutton href={n.href} title={n.title} key={n.index} />
        })}
        
      </section>
        </section>
      <section className="text-white">
        <Component {...pageProps} />
      </section>
    </div>
  );
}

export default MyApp;
