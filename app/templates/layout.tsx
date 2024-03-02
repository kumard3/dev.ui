import { ReactNode } from "react";
import TemplateNavbar from "../../website/components/template-navbar";

export default async function layout({ children }: { children: ReactNode }) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/template`);
  const data = await res.json();
  return (
    <div className="flex px-1 md:px-5 w-full ">
      <TemplateNavbar templateData={data} />
      <div className=" px-1 flex flex-col  w-full lg:h-screen lg:overflow-y-scroll  ">
        <div>{children}</div>
      </div>
    </div>
  );
}
