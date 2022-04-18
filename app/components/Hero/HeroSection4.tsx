import React from "react";

export default function HeroSection4() {
  return (
    <div className="Readex px-3">
      <header>
        <div className="container mx-auto flex h-16 justify-between">
          <a
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2 text-4xl"
          >
            Logo
          </a>
          <ul className="hidden items-stretch space-x-3 text-xl md:flex">
            <li className="flex">
              <a href="#" className="-mb-1 flex items-center px-4">
                Link
              </a>
            </li>
            <li className="flex">
              <a href="#" className="-mb-1 flex items-center px-4">
                Link
              </a>
            </li>
            <li className="flex">
              <a href="#" className="-mb-1 flex items-center px-4">
                Link
              </a>
            </li>
            <li className="flex">
              <a href="#" className="-mb-1 flex items-center px-4">
                Link
              </a>
            </li>
          </ul>
          <button className="flex justify-end p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      <div className="container mx-auto flex h-screen flex-wrap items-center justify-around">
        <div className="flex max-w-xl flex-col  items-start justify-start text-left">
          <h1 className="my-3 max-w-lg text-7xl">Minted with delight</h1>
          <p className="my-4 max-w-lg text-lg ">
            Management Dow Jones industry bondholders funds municipal bonds
            government upswing strategy.
          </p>
          <div className="flex items-start justify-start px-5">
            <button className="my-2 mr-3 h-[50px] w-[200px] rounded-xl bg-[#FFD600] text-xl text-black sm:h-[62px] sm:w-[250px]">
              Learn More
            </button>
            <button className="my-2 mx-3 h-[50px] w-[200px] rounded-xl bg-white/10 text-xl text-[#FFD600] sm:h-[62px] sm:w-[250px]">
              Learn More
            </button>
          </div>
        </div>
        <div>
          <img src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650305311/Illustration1_bbniur.png" width="400" height="400" alt="nft" />
        </div>
      </div>
    </div>
  );
}
