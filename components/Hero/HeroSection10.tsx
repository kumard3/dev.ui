/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

export default function HeroSection10() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black w-full">
      <nav className=" container relative mx-auto flex w-full items-center justify-between px-5 py-3 text-xl ">
        <div>Logo</div>
        <div className="flex items-center justify-around">
          <ul className="mx-3 hidden sm:flex">
            <li className="mx-3">Links</li>
            <li className="mx-3">Links</li>
            <li className="mx-3">Links</li>
          </ul>
          <button className="hidden rounded-xl bg-white/20 px-4 py-2 text-[#FF00E5] sm:block">
            CTA Button
          </button>
          <div className="sm:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="white"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className=" h-6 w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
                className=""
              ></path>
            </svg>
          </div>
        </div>
      </nav>

      <div className="relative flex flex-col items-center justify-center">
        <div className="relative top-28 sm:top-32 max-w-3xl flex flex-col items-center justify-center font-Manrope text-center">
          <h1 className="text-[45px] leading-10 font-extrabold sm:text-7xl ">
            Making bitcoin more than an investment.
          </h1>
          <p className="my-4 font-medium text-sm sm:text-lg max-w-xl">
            Bitcoin is the best money. It should defenitely be used like it. We always build and
            fund free, open-source projects aimed at making bitcoin the planet's preferred currency.
          </p>
          <div className="flex items-center justify-center flex-wrap">
            <button className="m-1 rounded-xl  bg-[#FF00E5] px-16 py-3">Learn More</button>
            <button className=" mx-1 rounded-xl bg-white px-16 py-3 text-black">Learn More</button>
          </div>
        </div>
      </div>
      <div className="relative   top-[20vh] max-w-full sm:top-0 ">
        <div className="absolute w-full object-contain">
          <img src="/circle.png" alt="" className="relative  object-fill" />
        </div>
      </div>
    </div>
  )
}
