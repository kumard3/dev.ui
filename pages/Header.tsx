import React from "react";
import Drawer from "./Drawer";

function Header({ setIsOpen }: any) {
  return (
    <header className="flex justify-between p-4">
      <h1 className="font-medium">Example of a drawer</h1>
      <button
        className="bg-green-600  text-white rounded px-4 py-1"
        onClick={() => setIsOpen(true)}
      >
        open
      </button>
    </header>
  );
}

function Card() {
  return (
    <div className="border border-gray-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div className="animate-pulse flex space-x-4">
        <div className="rounded-full bg-gray-400 h-12 w-12"></div>
        <div className="flex-1 space-y-4 py-1">
          <div className="h-4 bg-gray-400 rounded w-3/4"></div>
          <div className="space-y-2">
            <div className="h-4 bg-gray-400 rounded"></div>
            <div className="h-4 bg-gray-400 rounded w-5/6"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Test() {
  const [isOpen, setIsOpen] = React.useState<any>(false);

  return (
    <main className="">
      <Header setIsOpen={setIsOpen} />
      <section className="flex space-x-6 m-4">
        <div className="text-6xl">{"🦙"}</div>
        <div className="text-6xl">{"🐝"}</div>
        <div className="text-6xl">{"🦄"}</div>
        <div className="text-6xl">{"🐌"}</div>
      </section>
      <p className="m-4">
        This is an implementation of a drawer using tailwindcss.
      </p>
      <p className="m-4 bg-yellow-100 p-6 text-yellow-900 border border-dashed border-yellow-400">
        Follow me at Twitter{" "}
        <a className="text-blue-600" href="https://twitter.com/@Cuadraman">
          @Cuadraman
        </a>{" "}
        for more tips
      </p>
      <Drawer isOpen={isOpen} setIsOpen={setIsOpen}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Drawer>
    </main>
  );
}
