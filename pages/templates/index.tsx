/* eslint-disable @next/next/no-img-element */

import { Componentbutton } from "../../website/components/ComponentButton";

import { codeData } from "../../data/components/data";
import Link from "next/link";
// import NewLayout from "../NewLayout";
import AppLayout, { LayoutBody, LayoutNav } from "../../layout/AppLayout";
import { showCode } from "../../data/templates/data";

export default function Component() {
  return (
    <AppLayout>
      {/* <div className="bg-slate-700 min-h-screen max-w-sm"> </div> */}
      <>
        <LayoutNav>
          {" "}
          <>
            <h1 className="text-4xl font-bold ">
              <Link href="/templates"> Templates</Link>{" "}
            </h1>
            <section className="dark:text-white text-dark flex flex-wrap flex-col justify-center items-start  my-4 ">
              {showCode.map((n) => {
                return (
                  <div
                    key={n.title}
                    className="flex flex-wrap my-2 w-full text-left "
                  >
                    <Componentbutton title={n.title} url={n.url} />
                  </div>
                );
              })}
            </section>
          </>
        </LayoutNav>
        <LayoutBody>
          <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
            <img
              src="/pc_guy.png"
              alt="pc_guy"
              className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
            />
          </div>
        </LayoutBody>
      </>
    </AppLayout>
  );
}
