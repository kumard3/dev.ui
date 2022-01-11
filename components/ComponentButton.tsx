import Link from'next/link';

export const Componentbutton = ({ title}:any) => {
    return (
  
        <button className="shadow dark:bg-gray-600 p-3 text-lg  rounded-xl mx-2 px-4 ">{title}</button>
     
    );
  };