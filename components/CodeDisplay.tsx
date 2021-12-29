/* eslint-disable @next/next/no-sync-scripts */
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import { Prism } from "@mantine/prism";

export default function CodeDisplay({ component, jsx, html }: any) {
  let [isOpen, setIsOpen] = useState(false);
 
  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <Tab.Group>
        <section className="bg-[#1F2A37] mb-5 min-h-[10rem]  w-[90vw] flex flex-col rounded-2xl container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
          <section className="flex p-3 w-full justify-between">
            <Tab.List className="p-3">
              <Tab className="px-3">Preview</Tab>
              <Tab className="px-3">HTML</Tab>
              <Tab className="px-3">JSX</Tab>
            </Tab.List>
            <button type="button" onClick={openModal}>
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
            <Tab.Panel>
              <div className="max-h-[50rem] overflow-scroll">
                <section className=" p-3 flex flex-col items-center justify-center w-full">
                  {component}
                </section>
              </div>
            </Tab.Panel>
            <Tab.Panel className="max-h-[20rem] overflow-scroll">
              {/* <button
                className="absolute border-indigo-400 border-1 right-[10%] flex items-center px-4 py-2 m-3 border rounded-lg hover:ring-4 focus:ring-indigo-400 hover:ring-indigo-400 border-indigo-400 bg-gray-800 text-gray-100
 
                "
                color={clipboard.copied ? "teal" : "blue"}
                onClick={() => clipboard.copy(html)}
              >
                {clipboard.copied ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-[10px]"
                    >
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-[10px]"
                    >
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                    </svg>
                    Copy
                  </>
                )}
              </button> */}
              {/* <pre className="p-6 overflow-scroll  language-html  w-full prism-dark">
                {" "}
                <code className=" language-markup">{html}</code>
              </pre> */}
              <Prism
                colorScheme="dark"
                language="tsx"
                copyLabel="Copy code to clipboard"
                copiedLabel="Code copied to clipboard"
              >
                {html}
              </Prism>
            </Tab.Panel>
            <Tab.Panel className="max-h-[20rem] overflow-scroll">
              {/* <button
                className="absolute border-indigo-400 border-1 right-[10%] flex items-center px-4 py-2 m-3 border rounded-lg hover:ring-4 focus:ring-indigo-400 hover:ring-indigo-400 border-indigo-400 bg-gray-800 text-gray-100
 
                "
                color={clipboard.copied ? "teal" : "blue"}
                onClick={() => clipboard.copy(jsx)}
              >
                {clipboard.copied ? (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-[10px]"
                    >
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                    </svg>
                    Copied
                  </>
                ) : (
                  <>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5 mr-[10px]"
                    >
                      <path d="M9 2a2 2 0 00-2 2v8a2 2 0 002 2h6a2 2 0 002-2V6.414A2 2 0 0016.414 5L14 2.586A2 2 0 0012.586 2H9z"></path>
                      <path d="M3 8a2 2 0 012-2v10h8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"></path>
                    </svg>
                    Copy
                  </>
                )}
              </button> */}

              {/* <pre className="p-6 overflow-scroll  language-html  w-full prism-dark">
                {" "}
                <code className=" language-javascript">{jsx}</code>
              </pre> */}

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
            <Transition appear show={isOpen} as={Fragment}>
              <Dialog
                as="div"
                className="fixed top-0 w-full z-10 overflow-y-auto"
                onClose={closeModal}
              >
                <div className="min-h-screen bg-[#1F2A37] w-full px-4">
                  <button
                    onClick={closeModal}
                    className="text-white float-right p-[1rem]"
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
                  <section className="text-white pt-[3rem]">
                    {component}
                  </section>
                </div>
              </Dialog>
            </Transition>
          </section>
        </section>
      </Tab.Group>
    </>
  );
}
