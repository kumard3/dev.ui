/* eslint-disable @next/next/no-sync-scripts */

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { Prism } from "@mantine/prism";
import { Modal,Tabs  } from "@mantine/core";
export default function CodeDisplay({ component, jsx, html }: any): JSX.Element {
const dark = '#000'

  const [opened, setOpened] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Tab.Group>
        <section className="bg-[#1F2A37] mb-5 min-h-[10rem]  w-[90vw] flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
          <section className="flex p-3 w-full justify-between">
            <Tab.List className="p-3 ">
              <Tab className="px-3  ">Preview</Tab>
              <Tab className="px-3  ">HTML</Tab>
              <Tab className="px-3  ">JSX</Tab>
            </Tab.List>
            <button
              type="button"
              onClick={() => setOpened(true)}
              className="   "
            >
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
          <Tab.Panels>
            <Tab.Panel >
              <div className="max-h-[50rem] overflow-scroll">
                <section className=" p-3 flex flex-col items-center justify-center w-full ">
                  {component}
                </section>
              </div>
            </Tab.Panel>
            <Tab.Panel className="max-h-[20rem] overflow-scroll">
              <Prism
                colorScheme="dark"
                language="markup"
                copyLabel="Copy code to clipboard"
                copiedLabel="Code copied to clipboard"
              >
                {html}
              </Prism>
            </Tab.Panel>
            <Tab.Panel className="max-h-[20rem] overflow-scroll">
              <Prism
                colorScheme="dark"
                language="tsx"
                copyLabel="Copy code to clipboard"
                copiedLabel="Code copied to clipboard"
              >
                {jsx}
              </Prism>
            </Tab.Panel>
          </Tab.Panels>
          <section>
            <div >
              {/* <Dialog
                as="div"
                className="fixed top-0 w-full z-[200] overflow-y-auto"
                onClose={closeModal}
              >
                <div className="h-full bg-[#1F2A37] w-full px-4 o">
                  <button
                    onClick={closeModal}
                    className= " float-right p-[1rem]"
                  >
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      className="w-4 h-4"
                    >
                      <polygon
                        fill="currentColor"
                        points="204 181.372 38.628 16 16 16 16 38.628 181.372 204 44 204 44 236 236 236 236 44 204 44 204 181.372"
                      ></polygon>
                      <polygon
                        fill="currentColor"
                        points="326.628 304 464 304 464 272 272 272 272 464 304 464 304 326.628 473.372 496 496 496 496 473.372 326.628 304"
                      ></polygon>
                    </svg>
                  </button>
                  <section className= " pt-[3rem] h-screen overflow-scroll flex justify-center ">
                    
                  </section>
                </div>
              </Dialog> */}
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
      </Tab.Group>
    </>
  );
}
