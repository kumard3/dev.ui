/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import Hero from "../components/Hero";
import Seo from "../components/template/components/Seo";


export default function Home() {

  return (
    <div className="overflow-hidden">
      <Seo title={"Devui"} description={"Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"} image={""} url={""} />
      <Hero />

      
    </div>
  );
}
