/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import HomePage from "../layout/HomePage";
import Hero from "../website/components/Hero";
import SEO from "../website/components/Seo";
// import Hero from "../components/Hero";
// import Seo from "../components/Seo";

export default function Home() {
  return (
    <HomePage >
      <div className="overflow-hidden">
        <SEO
          title={"Devui"}
          description={
            "Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
          }
          image={"/WebSiteImage.png"}
          url={"https://dev-ui.vercel.app/"}
        />
        <Hero />
      </div>
    </HomePage>
  );
}
