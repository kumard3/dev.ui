/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection9() {
  return (
    <div className="flex h-[80svh] justify-between bg-[#F8F8F8] font-poppins text-black">
      <div className="grid grid-cols-2">
        <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center">
          <div className="flex flex-col text-left">
            <h1 className="text-[34px] text-[#181818]">Welcome back</h1>
            <h1 className="text-[14px] text-[#636364] ">
              Welcome back! Please enter your details.
            </h1>
          </div>
          <div>
            <div className="my-2 flex   flex-col text-[14px]">
              <label htmlFor="email" className="text-left text-[#181818] ">
                Email
              </label>
              <input
                id="email"
                placeholder="Enter your email"
                type="email"
                className="  rounded-xl border   border-[#C4C4C4] p-2 text-[#636364]"
              />
            </div>
            <div className="my-2 flex   flex-col text-[14px]">
              <label htmlFor="password" className="text-left text-[#181818] ">
                Password
              </label>
              <input
                id="password"
                placeholder="Enter your password"
                type="password"
                className=" rounded-xl border   border-[#C4C4C4] p-2 text-[#636364]"
              />
            </div>
            <div className="grid grid-cols-2  ">
              <div className="flex items-center ">
                <input type="checkbox" />
                <span className="pl-1 text-[14px]">Remember me</span>
              </div>
              <div className="pl-6">
                <span className="text-[14px]">Forgot password</span>
              </div>
            </div>
          </div>
          <button className="my-5 w-[300px] rounded-xl bg-[#EA454C] py-2 text-white">
            Sign in
          </button>
        </div>
        <div className="">
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651867758/right-side_ib7d7a.jpg"
            loading="lazy"
            width="600"
            height="600"
            className="h-full w-full"
            alt="hero section"
          />
        </div>
      </div>
    </div>
  );
}
