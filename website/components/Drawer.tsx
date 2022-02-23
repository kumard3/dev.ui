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
        className={`fixed top-0 px-2  z-30 inset-y-0  w-[20rem]  bg-black  transition duration-300 transform  ${
          toggleSidebar
            ? "translate-x-[50vw] ease-out h-full bg-black"
            : "translate-x-[100vw] ease-in  "
        }`}
      >
        {children}
      </div>
    </>
  );
};
