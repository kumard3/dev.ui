import { ReactNode } from "react";
import ComponentNav from "./ComponentNav";
export const dynamic = "force-static";

async function getAllComponents() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/v2/component/`);
  const data = await res.json();
  return data as {
    title: string;
    urlTitle: string;
    url: string;
    store: {
      title: string;
      jsx: string;
    }[];
  }[];
}

export default async function layout({ children }: { children: ReactNode }) {
  const data = await getAllComponents();
  return (
    <div className="flex px-1 md:px-5 w-full ">
      <ComponentNav data={data} />
      <div className="flex-1 px-1 flex flex-col  w-full lg:h-screen lg:overflow-y-scroll  ">
        <div>{children}</div>
      </div>
    </div>
  );
}
