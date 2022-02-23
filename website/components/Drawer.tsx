import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";

interface Props {
  children: React.ReactNode;
  toggleSidebar: boolean;
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DrawerNav = ({
  children,
  toggleSidebar,
  setToggleSidebar,
}: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  useOnClickOutside(ref, () => setToggleSidebar(false));
  return (
    <>
      <div
        ref={ref}
        className={`fixed top-0 px-2  z-30 inset-y-0  w-[15rem]   transition duration-300 transform  ${
          toggleSidebar
            ? "translate-x-full ease-out h-full bg-black"
            : "translate-x-[200%] ease-in  "
        }`}
      >
        {children}
      </div>
    </>
  );
};
