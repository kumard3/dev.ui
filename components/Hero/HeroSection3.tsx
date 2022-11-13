/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";

export default function HeroSection3() {
  return (
    <div className="relative min-h-screen w-full bg-white ">
      <div className="absolute top-10 h-[600px] w-[600px] rounded-full bg-gradient-to-br  from-[#ffd9d7] to-[#f2eeff] blur-[135.914px] "></div>

      <div className="container relative mx-auto flex items-center justify-between pt-5">
        <div className="relative">
          <div className="absolute right-[10%] -top-5 h-[49px]  w-[49px] rounded-full bg-[#FF9890] "></div>

          <div className="absolute inset-10 h-[149px] w-[149px] rounded-full bg-[#FF9890] blur-[54px]"></div>
          <div className="relative z-10 flex min-h-[479px] max-w-2xl flex-col items-start justify-center rounded-md border border-white bg-gradient-to-r from-[#ffffff13] to-[#ffffffad] px-7 py-6 text-black mix-blend-normal shadow-[0px_70px_40px] shadow-[#4a55bc0f] filter backdrop-blur-md">
            <h1 className="didot flex  flex-col py-5 text-left text-8xl font-semibold">
              Extraordinary,
              <span className="text-7xl font-normal"> simple caregiving</span>
            </h1>
            <p className="grillsans py-2 text-left text-2xl text-gray-600">
              Our goal is to lend a helping hand to those who have limited time
              to take care of the family's health due to their professional
              commitments, or because they just don't live close to their
              parents.
            </p>
          </div>
          <div className="absolute left-[50%] -bottom-6 h-[49px]  w-[49px] rounded-full bg-gradient-to-r from-[#D8D8D8] to-black"></div>
        </div>
        <div className="hidden lg:block">
          <Image
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650305316/illustration_hjlckd.png"
            width={488.96}
            height={664.04}
            alt="illustration"
          />
        </div>
      </div>
      <div className="absolute top-[20%] right-[2%] h-[49px]  w-[49px] rounded-full bg-[#FF9890] "></div>

      <div className="container container mx-auto flex w-full items-start">
        <button className="grillsans  rounded-t-lg bg-gradient-to-r from-black to-[#303030] py-6  px-10 text-xl ">
          Learn More
        </button>
      </div>
    </div>
  );
}
