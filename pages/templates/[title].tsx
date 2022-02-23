import { useState } from "react";
import Link from "next/link";

import { showCode } from "../../data/templates/data";

import { useRouter } from "next/router";
import { Componentbutton } from "../../website/components/ComponentButton";
import CodeDisplay from "../../website/components/CodeDisplay";

import AppLayout, { LayoutBody, LayoutNav } from "../../layout/AppLayout";

export default function Post() {
  const router = useRouter();
  const route = router.query.title;
  const filterdata = showCode.filter((e) => e.title === route);
  const Filter = filterdata[0]?.store;
  const [toggleSidebar, setToggleSidebar] = useState(false);



  return (
    <AppLayout >
      {/* <div className="bg-slate-700 min-h-screen max-w-sm"> </div> */}
      <>
        <LayoutNav
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        >
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
        <LayoutBody
          toggleSidebar={toggleSidebar}
          setToggleSidebar={setToggleSidebar}
        >
          <div className="dark:text-white">
            <div className="container mx-auto flex w-full justify-center flex-col items-center">
              {Filter?.map((n) => {
                return (
                  <CodeDisplay
                    component={n.component}
                    key={n.component}
                    jsx={n.jsx}
                    html={n.html}
                    display="hidden"
                  />
                );
              })}
            </div>
          </div>
        </LayoutBody>
      </>
    </AppLayout>
  );
}
