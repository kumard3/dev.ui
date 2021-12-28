import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { Tab } from '@headlessui/react'


export default function CodeDisplay({component,jsx,html}:any) {
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
    <section className="bg-[#1F2A37] h-[37rem] w-[90vw] flex flex-col rounded-2xl container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-3 ">
      <section className="flex w-full justify-between">
        <Tab.List className="p-3">
        <Tab className="px-3" >Preview</Tab>
        <Tab className="px-3" >HTML</Tab>
        <Tab className="px-3" >JSX</Tab>
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
      <Tab.Panels>
      <Tab.Panel>
      <div className="max-h-[50rem] overflow-scroll">

        <section className=" p-3 flex flex-col items-center justify-center w-full">
            {component}
                </section>
                </div>
                </Tab.Panel>
                <Tab.Panel><pre className="p-6 overflow-scroll  language-html max-h-[50vw] w-full prism-dark" > <code className="language-html">{html}</code></pre></Tab.Panel>
        <Tab.Panel><pre className="p-6 overflow-scroll  language-html max-h-[50vw] w-full prism-dark" > <code className="language-html">{jsx}</code></pre></Tab.Panel>
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
