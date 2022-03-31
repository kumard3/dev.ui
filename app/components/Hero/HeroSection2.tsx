import React from 'react'
import Image from 'next/image'
export default function HeroSection2() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 -z-0 opacity-90">
        {' '}
        <Image src="/background.png" layout="fill" alt="Background" />
      </div>

      <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
        <section className="flex   flex-col items-center justify-center">
          <div className="relative w-full max-w-2xl">
            <h1 className="joyride flex flex-col text-left font-mono text-6xl font-bold">
              NFT that are Out of this{' '}
              <span className="flex items-center">
                world
                <div className="">
                  <Image src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
                </div>{' '}
              </span>{' '}
            </h1>
          </div>
          <div className="max-w-xl">
            <p className="outerSans py-12 text-left">
              {' '}
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit nostrum, ab
              perspiciatis, illo laudantium libero quo praesentium eveniet quae saepe deserunt
              aliquid ducimus quibusdam. Veniam earum perspiciatis laudantium rem cupiditate.{' '}
            </p>
          </div>
          <div className="outerSans relative flex w-full justify-around">
            <button className="relative flex h-10 w-32 items-center justify-center ">
              <div className=" absolute  h-16 w-48 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
              <h1 className="absolute z-10  text-2xl font-bold text-black ">Explore</h1>
            </button>
            <button className=" text-2xl font-bold ">Learn more</button>
          </div>
        </section>
        <div className="relative hidden h-[600px] flex-col items-center lg:flex">
          <div className="relative hidden lg:block">
            <Image src="/nft.png" width="700" height="800" alt="nft" />
          </div>
          <div className="hidden absolute bottom-28 lg:flex  h-20 lg:text-xs  items-center rounded bg-black/60 filter backdrop-blur-md lg:px-3 xl:px-6 ">
            <div className="mx-4">
              <div className="outerSans grid grid-cols-2">
                <h1 className="mr-2">Current Bid</h1>
                <h1>Ends In</h1>
              </div>
              <div className="joyride grid grid-cols-2 ">
                <h1>0.99eth</h1>
                <h1>25 HRS</h1>
              </div>
            </div>
            <button className="outerSans  rounded bg-gradient-to-r  from-[#B1D26F] to-[#60E7CE] px-7 py-3 text-black">
              {' '}
              Start Bid
            </button>
          </div>
        </div>
      </div>
      <div className="container relative z-50 mx-auto flex flex-col py-10">
        <h1 className="joyride text-3xl text-center">Our Partners</h1>
        <div className="flex flex-wrap items-center justify-center py-4">
          <img src="/binance 1.svg" className="px-5" />
          <img src="/bitmex 1.svg" className="px-5" />
          <img src="/blockport 1.svg" className="px-5" />
          <img src="/coinbase 1.svg" className="px-5" />
        </div>
      </div>
    </div>
  )
}
