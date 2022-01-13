// export default function Title({}) {
//     return (
//         <div>

//         </div>
//     )
// }

import Link from "next/link";

import { codeData } from "../../data/components/data";

import { Componentbutton } from "../../components/ComponentButton";
import CodeDisplay from "../../components/CodeDisplay";
import { useRouter } from "next/router";


export default function Post() {
  const router = useRouter();
  const route = router.query.title;
  const filterdata = codeData.filter((e) => e.title === route);
  const Filter = filterdata[0]?.store;

  console.log(router);

  return (
    <div className="min-h-screen container mx-auto sm:px-10">
      <section className="dark:text-white container w-full mx-auto mt-3 ">
        <h1 className="text-5xl font-bold px-2">
          <Link href="/components"> Components</Link>{" "}
        </h1>
        <section className="dark:text-white text-dark flex flex-wrap justify-center items-center w-full my-4 ">
          {codeData.map((n, index) => {
            return (
              <div key={n.title}>
                <Componentbutton title={n.title} url={n.url} />
              </div>
            );
          })}
        </section>
      </section>
      <div className="dark:text-white">
        <div className="container mx-auto flex w-full justify-center flex-col items-center">
          {Filter?.map((n) => {
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
    </div>
  );
}
