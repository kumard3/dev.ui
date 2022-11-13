/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function HeroSection9() {
  const image = `https://res.cloudinary.com/ddcg0rzlo/image/upload/v1651867758/right-side_ib7d7a.jpg`;
  return (
    <div className="flex min-h-screen justify-between bg-[#F8F8F8] font-poppins text-black">
      <style jsx>
        {`
          .shadow-input {
            border: 1px solid rgba(0, 0, 0, 0.25);
            filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.03));
          }
        `}
      </style>
      <div className="container mx-auto flex max-w-3xl flex-col items-center justify-center">
        <div className="flex flex-col text-left">
          <h1 className="text-[34px] text-[#181818]">Welcome back</h1>
          <h1 className="text-[14px] text-[#636364] ">
            Welcome back! Please enter your details.
          </h1>
        </div>
        <div className="my-2 flex  w-[312px] flex-col text-[14px]">
          <h1 className="text-left text-[#181818] ">Email</h1>

          <input
            placeholder="Enter your email"
            className="shadow-input rounded-xl border   border-[#C4C4C4] p-2 text-[#636364]"
          />
        </div>
        <div className="my-2 flex  w-[312px] flex-col text-[14px]">
          <h1 className="text-left text-[#181818] ">Email</h1>
          <input
            placeholder="Enter your email"
            className="shadow-input rounded-xl border   border-[#C4C4C4] p-2 text-[#636364]"
          />
        </div>
        <div className="grid grid-cols-2  ">
          <div className="flex items-center  pr-6">
            <input type="checkbox" />
            <span className="pl-1 text-[14px]">Remember me</span>
          </div>
          <div className="pl-6">
            <span className="text-[14px]">Forgot password</span>
          </div>
        </div>
        <button className="my-5 w-[300px] rounded-xl bg-[#EA454C] py-2 text-white">
          Sign in
        </button>
      </div>
      <div className="h-screen w-1/2">
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
  );
}
