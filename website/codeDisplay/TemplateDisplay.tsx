/* eslint-disable @next/next/no-sync-scripts */

import { useState, ReactNode } from "react";


interface Props {
  component?: ReactNode;
  Weburl?: string;
  github?: string;
}

export default function TemplateDisplay({ Weburl, github }: Props) {
  const data = [
    {
      title: "Preview",
      Weburl: Weburl,
      github: github,
    },
  ];

  return (
    <>
      <section className="bg-[#111111] mb-5 min-h-[10rem] w-[90vw] lg:max-w-[65vw] flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
        <section className="flex p-3 w-full justify-between">
          <div>
            <div>
              {data.map((n, index) => {
                return (
                  <div key={index} className="flex">
                    <div className="p-3 ">{n.title}</div>
                    <a className="p-3 " href={n.github} target="_blank">
                      GitHub
                    </a>
                  </div>
                );
              })}
            </div>
          </div>

          <a href={Weburl} target="_blank">
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="w-4 h-4 my-3 mx-4 "
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </section>
        <hr />
        <div>
          <div className=" max-h-[50rem] overflow-scroll">
            <section className=" p-3 flex flex-col items-center justify-center w-full ">
              <iframe
                src={Weburl}
                width="100%"
                height="100%"
                className="h-[40rem]"
              ></iframe>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}
