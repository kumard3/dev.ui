/* eslint-disable @next/next/link-passhref */

import * as React from "react";
import Hero from "./components/Hero";
import NavComponent from "./components/NavComponent";
import Pricing from "./components/Pricing";
import Service from "./components/Service";
import Partners from "./components/Partners";
import Footer from "./components/Footer";
import Blog from "./components/Blog";
import ContactBanner from "./components/ContactBanner";


export default function LandingPage2() {
  return (
    <div className="bg-[#12111A] min-h-screen text-white">
      <NavComponent />
      <Hero />
      <Partners />
      <Service />
      <Pricing />
      <Blog />
      <ContactBanner />
      <Footer />
    </div>
  );
}
