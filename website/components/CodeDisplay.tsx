/* eslint-disable @next/next/no-sync-scripts */

import { useState } from "react";

import { Prism } from "@mantine/prism";
import { Modal } from "@mantine/core";

export default function CodeDisplay({ component, jsx }: any) {
  const [opened, setOpened] = useState(false);
  const [tab, setTab] = useState("Preview");
  const data = [
    {
      title: "Preview",
      data: component,
      code: "",
    },
    {
      title: "Jsx",

      data: "",
      code: jsx,
    },
  ];
  console.log(tab);

  const filterdata = data.filter((e) => e.title === tab);

  return (
    <div>
      <section className="bg-[#1F2A37] mb-5 min-h-[10rem]  md:w-[70vw] w-[90vw] flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
        <section className="flex p-3 w-full justify-between">
          <div>
            {data.map((n, index) => {
              return (
                <button
                  onClick={() => setTab(n.title)}
                  className="p-3 "
                  key={index}
                >
                  {n.title}
                </button>
              );
            })}
          </div>
          <button type="button" onClick={() => setOpened(true)} className="   ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-4 h-4 my-3 mx-4 "
            >
              <polygon points="208 48 208 16 16 16 16 208 48 208 48 70.627 208.687 231.313 231.313 208.687 70.627 48 208 48"></polygon>
              <polygon points="464 304 464 441.373 299.313 276.687 276.687 299.313 441.373 464 304 464 304 496 496 496 496 304 464 304"></polygon>
            </svg>
          </button>
        </section>
        <hr />
        <div>
          <div>
            {filterdata.map((n) => {
              return (
                <>
                  {n.data === "" ? (
                    ""
                  ) : (
                    <div className="max-h-[50rem] overflow-scroll">
                      <section className=" p-3 flex flex-col items-center justify-center w-full ">
                        {n.data}
                      </section>
                    </div>
                  )}

                  {n.code === "" ? (
                    ""
                  ) : (
                    <div className="max-h-[20rem] overflow-scroll">
                      <Prism
                        colorScheme="dark"
                        language="jsx"
                        copyLabel="Copy code to clipboard"
                        copiedLabel="Code copied to clipboard"
                        withLineNumbers={true}
                      >
                        {n.code}
                      </Prism>
                    </div>
                  )}
                </>
              );
            })}
          </div>
        </div>
        <section>
          <div>
            <Modal
              overflow="inside"
              opened={opened}
              onClose={() => setOpened(false)}
              size="100%"
            >
              {component}
            </Modal>
          </div>
        </section>
      </section>
    </div>
  );
}
