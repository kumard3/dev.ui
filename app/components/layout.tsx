import { ReactNode } from "react";
import ComponentNav from "./ComponentNav";
export const dynamic = "force-static";

export default function layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex px-1 md:px-5 w-full ">
      <ComponentNav />
      <div className="flex-1 px-1 flex flex-col  w-full lg:h-screen lg:overflow-y-scroll  ">
        <div>{children}</div>
      </div>
    </div>
  );
}
