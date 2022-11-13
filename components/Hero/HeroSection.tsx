import React from "react";

export default function HeroSection() {
  return (
    <div className="container py-10 mx-auto flex flex-col items-center justify-center rounded-md bg-white">
      <section className="flex flex-col text-center">
        <h1 className="max-w-xl text-6xl font-bold text-black">
          Beautiful Doodles to Tell Your Story
        </h1>
        <p className="text-xl text-gray-600">
          Beautiful Doodles to Tell Your Story
        </p>
      </section>

      {/* button section  */}
      <section className=" flex justify-around">
        <button className="mx-1 flex items-center justify-center rounded-lg bg-indigo-600   px-8 py-3 text-lg ">
          Download
        </button>
        <button className="mx-1 flex items-center justify-center rounded-lg border border-black px-8 py-3 text-lg  text-black ">
          Download
        </button>
      </section>

      <div>
        <img
          src="/Amigos Work Space.png"
          alt="image"
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
}
