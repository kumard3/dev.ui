/* eslint-disable @next/next/no-html-link-for-pages */
export default function Footer() {
  return (
    <footer className="px-4 py-8 mt-[40px] bg-black  border-t-2 border-white ">
      <div className="container flex flex-wrap items-center justify-center mx-auto space-y-4 sm:justify-between sm:space-y-0">
        <div className="flex flex-row pr-3 space-x-4 sm:space-x-8">
          <h1 className="gradientText hero-title text-[50px] font-bold leading-none"> dev.UI </h1>
        </div>
        <ul className="flex flex-wrap pl-3 space-x-4 sm:space-x-8">
          <li>
            <a href="https://github.com/kumard3/dev.ui" target="_blank" rel="noreferrer" aria-label="Github">
              {' '}
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
