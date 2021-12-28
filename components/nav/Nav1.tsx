/* eslint-disable @next/next/link-passhref */
import { Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { ChartBarIcon, XIcon } from "@heroicons/react/outline";

import Link from "next/link";

const solutions = [
  {
    name: "Components",
    href: "/",
    icon: ChartBarIcon,
  },
];

export default function Nav1() {
  return (
    <Popover className="relative bg-[#818CF8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="flex justify-between items-center   py-6 sm:justify-between sm:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="text-4xl font-bold">Dev.ui</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 sm:hidden">
            <Popover.Button className=" rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 ">
              <button
                type="button"
                className="inline-flex items-center lg:hidden px-8 py-3 font-semibold border rounded dark:border-gray-100 dark:text-gray-100 hover:bg-gray-300 focus-visible:ring ring-indigo-300  active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
                Menu
              </button>
            </Popover.Button>
          </div>
          <Popover.Group
            as="nav"
            className="hidden sm:flex space-x-10 items-center text-xl"
          >
            <Link
              href="/components"
              //   className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Components
            </Link>
          </Popover.Group>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute top-0 inset-x-0 p-2 h-[100vh] transition transform origin-top-right md:hidden"
        >
          <div className="rounded-lg shadow-lg ring-1 h-full ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div className="text-black">
                  <Link href="/">
                    <span className="text-4xl font-bold">Dev.ui</span>
                  </Link>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-black hover:text-gray-500 hover:bg-gray-100 ">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {solutions.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                    >
                      <h1 className="my-3 ml-3 text-3xl font-bold text-gray-900">
                        {item.name}
                      </h1>
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
}

// bg-[#EF404A]
