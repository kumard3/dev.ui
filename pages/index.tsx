/* eslint-disable @next/next/link-passhref */
import * as React from "react";
import { Feature1 } from "../components/features/Features1";
import Hero from "../components/Hero";
import ReactDOM from "react-dom";
// import Feature1 from "../components/features/Features1"
import { codeData } from "../data/components/data";
import ReactDOMServer from "react-dom/server";

const Hello = () => <div>hello</div>;

const html = ReactDOMServer.renderToString(codeData[1].store[0].component);

console.log(html.toString());

export default function Home() {

console.log(html)
const tms =  html.toString()
console.log(codeData[1].store[0])

  return (
    <div className="overflow-hidden">
      <Hero />
      {/* {tms}
      <div dangerouslySetInnerHTML={{ __html: tms }} /> */}
    </div>
  );
}
