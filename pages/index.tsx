/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">

      <Hero />
      <h1 className="test">testt</h1>
      <div className="border mockup-window border-base-300">
        <div className="flex justify-center px-4 py-16 border-t border-base-300">
          Hello!
        </div>
      </div>
    </div>
  );
}
