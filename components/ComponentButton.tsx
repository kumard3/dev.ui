import Link from "next/link";

export const Componentbutton = ({ title,url,data }: any) => {
  return (
    <Link href={`${url}/${title}`}>
      <button className=" py-2 px-4  active:scale-105 scale-125 active:transition-all mx-4    shadow  bg-gray-600 text-lg  rounded-xl ">
        {title}
      </button>
    </Link>
  );
};
