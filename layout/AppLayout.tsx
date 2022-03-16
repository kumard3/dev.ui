import React, { ReactNode } from 'react'
import Footer from '../website/components/Footer'
import Nav from '../website/components/Nav'

interface Props {
  children: React.ReactNode
  toggleSidebar: boolean
  setToggleSidebar: React.Dispatch<React.SetStateAction<boolean>>
}
interface Children {
  children: ReactNode
}

export const LayoutNav = ({ children, toggleSidebar, setToggleSidebar }: Props) => {
  return (
    <>
      <div
        // className="sidebarOpen ? 'block' : 'hidden'"
        className={`fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden ${
          toggleSidebar ? 'block' : 'hidden'
        }`}
        onClick={() => setToggleSidebar((prevState: any) => !prevState)}
      ></div>

      <div
        // className="sidebarOpen ? 'translate-x-0 ease-out' : '-translate-x-full ease-in'"
        className={`fixed top-0 px-2  z-30 inset-y-0 left-0 w-[15rem]  overflow-y-auto transition duration-300 transform lg:translate-x-0 lg:static ${
          toggleSidebar ? 'translate-x-0 ease-out h-full bg-black' : '-translate-x-full ease-in  '
        }`}
      >
        <nav className="mt-10">{children}</nav>
      </div>
    </>
  )
}

export const LayoutBody = ({ children, setToggleSidebar }: Props) => {
  return (
    <div className="flex-1 px-2 flex flex-col  w-full lg:h-screen lg:overflow-y-scroll  ">
      <button
        className="  transition fixed z-50 flex items-center justify-center w-16 h-16 text-white bg-white  rounded-full  bottom-4 right-4 lg:hidden focus:outline-none focus-visible:ring bg-opacity-20 backdrop-filter backdrop-blur"
        onClick={() => setToggleSidebar((prevState: any) => !prevState)}
      >
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 6H20M4 12H20M4 18H11"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></path>
        </svg>
      </button>
      <div>{children}</div>
    </div>
  )
}
export default function AppLayout({ children }: Children) {
  return (
    <div className="flex flex-col">
      <Nav />
      <div className="flex container mx-auto w-full min-h-screen">{children}</div>
      <Footer />
    </div>
  )
}
