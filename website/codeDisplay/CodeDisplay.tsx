"use client";

/* eslint-disable @next/next/no-sync-scripts */
import { useState, ReactNode, useEffect } from "react";
//@ts-ignore
import SyntaxHighlighter from "react-syntax-highlighter";
//@ts-ignore
import { stackoverflowDark } from "react-syntax-highlighter/dist/cjs/styles/hljs";
import useCopyToClipboard from "./useCopyToClipboard";

import { usePathname } from "next/navigation";
import ComponentDisplay from "./ComponentDisplay";

interface Props {
  component?: ReactNode;
  jsx?: string;
  params: { title: string };
  route: any;
}

export default function CodeDisplay({ component, jsx, params, route }: Props) {
  const [value, copy] = useCopyToClipboard();
  const [tab, setTab] = useState("Preview");
  const [CopiedText, setCopiedText] = useState(false);
  const data = [
    {
      title: "Preview",
    },
    {
      title: "Code",
    },
  ];

  const pathname = usePathname();

  useEffect(() => {
    if (pathname?.slice(12).toString() === params.title) {
      setTab("Preview");
    }
  }, [params.title, pathname]);

  function handleCopy(e: any) {
    e.preventDefault();
    copy(`${jsx}`);
    setCopiedText(true);
    setTimeout(() => {
      setCopiedText(false);
    }, 3000);
  }

  return (
    <>
      <section className="bg-[#120e0e]  w-full flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none  ">
        <section className="flex p-3 bg-black-1 justify-center items-center lg:justify-between">
          <div>
            {data.map((n, index) => {
              return (
                <>
                  <button
                    onClick={() => setTab(n.title)}
                    className="p-3 text-xl outerSans"
                    key={index}
                  >
                    {n.title}
                  </button>
                </>
              );
            })}
          </div>
        </section>
        <hr />

        <div>
          {tab === "Preview" ? (
            <div className="  bg-[#181818]  ">
              <div className="py-3 px-2 flex justify-center ">
                <ComponentDisplay componentName={component as string} />
              </div>
            </div>
          ) : (
            <div className="max-h-[50rem] overflow-scroll relative ">
              <div className="sticky right-2 top-2">
                <button
                  onClick={(e) => handleCopy(e)}
                  className="absolute right-2 top-2 bg-white/10 backdrop-blur-xl backdrop-filter filter w-40 h-10 rounded-md "
                >
                  {CopiedText ? (
                    <span className="text-green-400">Copied</span>
                  ) : (
                    <span className="text-white">Copy</span>
                  )}
                </button>
              </div>
              <SyntaxHighlighter
                language="javascript"
                style={stackoverflowDark}
              >
                {jsx}
              </SyntaxHighlighter>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
