"use client";

import React, { useState } from "react";
import Link from "next/link";
import { codeData } from "../../data/components/data";
import { Componentbutton } from "../../website/components/ComponentButton";

export default function ComponentNav() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);
  return (
    <div>
      {" "}
      <>
        <div
          className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
            toggleSidebar ? "block" : "hidden"
          }`}
          onClick={() => setToggleSidebar((prevState: any) => !prevState)}
        ></div>

        <div
          className={`fixed top-0 px-2  z-30 inset-y-0 left-0 min-w-[17rem]  overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static ${
            toggleSidebar
              ? "translate-x-0 ease-out h-full bg-black"
              : "-translate-x-full ease-in  "
          }`}
        >
          <nav className="mt-10">
            <h1 className="text-4xl font-bold outerSans">
              <Link href="/components"> Components</Link>
            </h1>
            <section className="dark:text-white text-dark flex flex-wrap flex-col justify-center items-start  my-4 ">
              {codeData.map((n) => (
                <div
                  className="flex flex-wrap my-2 w-full text-left "
                  key={n.title}
                >
                  <Componentbutton
                    title={n.title}
                    urlTitle={n.urlTitle}
                    url={n.url}
                    length={n.store.length}
                  />
                </div>
              ))}
            </section>
          </nav>
        </div>
        <button
          type="button"
          className="transition fixed z-50 flex items-center justify-center w-16 h-16 text-white bg-white  rounded-full  bottom-4 right-4 lg:hidden focus:outline-none focus-visible:ring bg-opacity-20 backdrop-filter backdrop-blur"
          onClick={() => setToggleSidebar((prevState: any) => !prevState)}
        >
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path
              d="M4 6H20M4 12H20M4 18H11"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
      </>
    </div>
  );
}
