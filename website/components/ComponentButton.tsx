import Link from "next/link";

import { usePathname } from "next/navigation";

interface Props {
  title: string;
  urlTitle: string;
  url: string;
  length: number;
}

export const Componentbutton = ({ title, url, urlTitle, length }: Props) => {
  const router = usePathname();

  return (
    <Link href={`${url}${urlTitle}`} passHref className="w-full">
      <button
        className={`${
          router == `${url}${urlTitle}`
            ? "bg-white/10 backdrop-blur-sm"
            : " text-[#999999] "
        } py-2 px-4 shadow  text-left active: text-lg w-full rounded flex hover:bg-white/10 hover:backdrop-blur-sm items-center`}
      >
        <span
          className={`${
            router == `${url}${title}` ? "bg-white" : "bg-slate-500"
          } min-w-[4px] min-h-[4px] block rounded-[50%] mr-3 `}
        ></span>
        <div className="flex justify-between w-full outerSans">
          {title}
          <span className="text-right ">{length}</span>
        </div>
      </button>
    </Link>
  );
};
