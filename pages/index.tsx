/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import * as React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';

export default function Home() {
  return (
      <div className="">
        {/* <Nav /> */}
        <Hero />
      </div>
  );
}