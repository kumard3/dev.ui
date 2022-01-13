/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Componentbutton } from "../../components/ComponentButton";

import { codeData } from "../../data/components/data";
import Link from "next/link";



export default function Component() {

  return (
    <div className="min-h-screen container mx-auto sm:px-10">
      <section className="dark:text-white container w-full mx-auto mt-3 ">
        <h1 className="text-5xl font-bold px-2">
          <Link href="/components"> Components</Link>{" "}
        </h1>
        <section className="dark:text-white text-dark flex justify-center items-center w-full my-4 ">
          {codeData.map((n, index) => {
            return (
              <div key={n.title} >
                <Componentbutton title={n.title} url={n.url} />
              </div>
            );
          })}
        </section>
      </section>
      <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
          <img
            src="/pc_guy.png"
            alt="pc_guy"
            className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
          />
        </div>
      {/* {stores === "" ? (

      ) : (
        <div className="dark:text-white">
          <div className="container mx-auto flex w-full justify-center flex-col items-center">
            {Filter?.store.map((n) => {
              return (
                <CodeDisplay
                  component={n.component}
                  key={n.component}
                  jsx={n.jsx}
                  html={n.html}
                />
              );
            })}
          </div>
        </div>
      )} */}
    </div>
  );
}
