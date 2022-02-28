import { codeData } from "../../data/components/data";

import { Componentbutton } from "../../website/components/ComponentButton";
import CodeDisplay from "../../website/components/CodeDisplay";

import { useRouter } from "next/router";
import AppLayout, { LayoutBody, LayoutNav } from "../../layout/AppLayout";
import { useState } from "react";
import Link from "next/link";

export default function Post() {
  const router = useRouter();
  const route = router.query.title;
  const filterdata = codeData.filter((e) => e.title === route);
  const Filter = filterdata[0]?.store;
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false);

  return (
    <AppLayout>
      <LayoutNav
        toggleSidebar={toggleSidebar}
        setToggleSidebar={setToggleSidebar}
      >
        <>
          <h1 className="text-4xl font-bold ">
            <Link href="/components"> Components</Link>
          </h1>
          <section className="dark:text-white text-dark flex flex-wrap flex-col justify-center items-start  my-4 ">
            {codeData.map((n) => {
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
            {Filter?.map((n, index) => {
              return (
                <CodeDisplay
                  component={n.component}
                  key={index}
                  jsx={n.jsx}
                  display={""}
                />
              );
            })}
          </div>
        </div>
      </LayoutBody>
    </AppLayout>
  );
}
