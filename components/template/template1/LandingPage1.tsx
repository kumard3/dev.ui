/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import ContactPage from "./components/ContactPage";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavComponent from "./components/NavComponent";
import Services from "./components/Services";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

export default function LandingPage1() {
  return (
    <div className="">
      <NavComponent />
      <Hero />
      <Stats />
      <Features />
      <Services />
      <Testimonials />
      <ContactPage />
      <Footer />
    </div>
  );
}
