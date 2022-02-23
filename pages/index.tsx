/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/link-passhref */
import React from "react";
import { SquareAvatar } from "../app/components/avatar";
import HomePage from "../layout/HomePage";
import Hero from "../website/components/Hero";

export default function Home() {
  return (
    <HomePage>
      <Hero />
 <SquareAvatar />
    </HomePage>
  );
}
