import Link from "next/link";
import { useRouter } from "next/router";

export const Componentbutton = ({ title, url, data }: any) => {
  const router = useRouter();
  console.log(url + title);
  console.log(router);
  return (
    <Link href={`${url}${title}`} passHref>
      <button
        className={`${
          router.asPath == `${url}${title}`
            ? "bg-white/10 backdrop-blur-sm"
            : " text-[#999999] "
        } 
     
 py-2 px-4 shadow  text-left active: text-lg w-full rounded flex hover:bg-white/10 hover:backdrop-blur-sm items-center`}
      >
        <span
          className={`${
            router.asPath == `${url}${title}`
              ? "bg-white"
              : "bg-slate-500"
          } min-w-[4px] min-h-[4px] block rounded-[50%] mr-3 `}
        ></span>
        {title}
      </button>
    </Link>
  );
};
