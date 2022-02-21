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
          router.asPath == `${url}${title}` ? "bg-gray-600" : " border-2 border-gray-600"
        } py-2 px-4 shadow  text-left active: text-lg w-full rounded `}
      >
        {title}
      </button>
    </Link>
  );
};
