/* eslint-disable @next/next/no-html-link-for-pages */
import React, { useState } from "react";

export const Body = ({ children, setToggleSidebar }: any) => {
  return (
    <div className="flex-1 flex flex-col h-full">
      <header className="flex justify-between items-center py-4 px-6  border-b-4 border-indigo-600">
        <div className="flex items-center">
          {/* burger toggle button */}
          <button
            className="text-gray-500 focus:outline-none lg:hidden"
            onClick={() => setToggleSidebar((prevState: any) => !prevState)}
          >
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path
                d="M4 6H20M4 12H20M4 18H11"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {/* <div  dangerouslySetInnerHTML={component} /> */}
      <div className='flex flex-col justify-center items-center w-full h-full'>

      {children}
      </div>
      {/* main content */}
    </div>
  );
};

export const Nav = ({children,toggleSidebar,setToggleSidebar}:any) => {
  return(
    <><div
      // className="sidebarOpen ? 'block' : 'hidden'"
      className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${toggleSidebar ? "block" : "hidden"}`}
      onClick={() => setToggleSidebar((prevState: any) => !prevState)}
    ></div><div
      // className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
      className={`fixed z-30 inset-y-0 left-0 w-64 bg-gray-900 overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static lg:inset-0 ${toggleSidebar
          ? "translate-x-0 ease-out"
          : "-translate-x-full ease-in"}`}
    >
        <div className="flex flex-row items-center justify-center mt-8">
          <div className="flex items-center">
            <svg className="h-12 w-12" viewBox="0 0 512 512" fill="none">
              <path
                d="M364.61 390.213C304.625 450.196 207.37 450.196 147.386 390.213C117.394 360.22 102.398 320.911 102.398 281.6C102.398 242.291 117.394 202.981 147.386 172.989C147.386 230.4 153.6 281.6 230.4 307.2C230.4 256 256 102.4 294.4 76.7999C320 128 334.618 142.997 364.608 172.989C394.601 202.981 409.597 242.291 409.597 281.6C409.597 320.911 394.601 360.22 364.61 390.213Z"
                fill="#4C51BF"
                stroke="#4C51BF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M201.694 387.105C231.686 417.098 280.312 417.098 310.305 387.105C325.301 372.109 332.8 352.456 332.8 332.8C332.8 313.144 325.301 293.491 310.305 278.495C295.309 263.498 288 256 275.2 230.4C256 243.2 243.201 320 243.201 345.6C201.694 345.6 179.2 332.8 179.2 332.8C179.2 352.456 186.698 372.109 201.694 387.105Z"
                fill="white"
              ></path>
            </svg>

            <span className="text-white text-2xl mx-2 font-semibold">
              Dashboard
            </span>
          </div>
        </div>

        <nav className="mt-10">{children}</nav>
      </div></>
  )
}

export default function DrawerComponent({ children }: any) {
  return (
    <article className="w-full  ">
      <div>
        <div className="flex h-screen ">
          {/*  div dgn onCLick, biar bisa keluar dari toggle sidebar */}
          {/* @click="sidebarOpen = false" */}
{children}

          {/* <Body setToggleSidebar={setToggleSidebar} /> */}
        </div>
      </div>
    </article>
  );
}
