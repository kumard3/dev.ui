"use client";

import { templateData } from "../../../data/templates/data";
import TemplateDisplay from "../../../website/codeDisplay/TemplateDisplay";

export default function page({ params }: any) {
  const route = params?.title[0];
  const filterdata = templateData.filter((e) => e.urlTitle === route);
  const Filter = filterdata[0]?.store;
  return (
    <div>
      <div className=" grid md:grid-cols-2 2xl:grid-cols-3 w-full justify-center  items-center">
        {Filter?.map((n, index) => (
          <TemplateDisplay
            Weburl={n.Weburl}
            github={n.github}
            images={n.image}
            key={index}
            title={n.title}
          />
        ))}
      </div>
    </div>
  );
}
