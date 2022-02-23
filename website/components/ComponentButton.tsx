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
          router.asPath == `${url}${title}` ? "" : " text-[#999999]"
        } 
     
 py-2 px-4 shadow  text-left active: text-lg w-full rounded flex  items-center`}
      >
        <span className="min-w-[4px] min-h-[4px] block rounded-[50%] mr-3 bg-slate-500"></span>
        {title}
      </button>
    </Link>
  );
};
