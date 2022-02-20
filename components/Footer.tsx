/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
  const button = `min-h-[3rem] px-4  active:scale-105 scale-110 active:transition-all duration-50 active:bg-white/10 flex justify-center items-center rounded-xl`;

  return (
    <footer className="px-4 py-8 mt-[40px] bg-black z-[100] border-t-2 border-white ">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <h1
            className={` ${button} hero-title text-[32px] font-bold leading-none `}
          >
            {" "}
            dev.UI{" "}
          </h1>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a href="#">Github</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
