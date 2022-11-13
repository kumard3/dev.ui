"use client";

import { codeData } from "../../../data/components/data";
import CodeDisplay from "../../../website/codeDisplay/CodeDisplay";


export default function page({ params }: any) {
  const route = params?.title[0];
  const filterdata = codeData.filter((e) => e.urlTitle === route);
  const Filter = filterdata[0]?.store;

  return (
    <div>
      <div className=" flex w-full justify-center flex-col items-center">
        {Filter?.map((n, index) => (
          <CodeDisplay
            component={n.component}
            jsx={n.jsx}
            key={index}
            params={{
              title: params?.title[0],
            }}
          />
        ))}
      </div>
    </div>
  );
}
