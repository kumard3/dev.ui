import React from "react";
import type { AppProps } from "next/app";

import Footer from "../website/components/Footer";
import Nav from "../website/components/Nav";

export default function HomePage({ children }: any) {
  return (
    <>
      <Nav />
      <section className="py-[50px]">{children}</section>
      <Footer />
    </>
  );
}
