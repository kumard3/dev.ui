export default function HeroSection2() {
  return (
    <div className="relative min-h-screen w-full ">
      <div className="absolute inset-0 -z-0 opacity-90 w-full min-h-screen">
        {' '}
        <img
          src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650305343/background_ebzfkk.jpg"
          className="object-cover w-full h-full"
          alt="Background"
        />
      </div>

      <div className=" relative z-10 flex h-full w-full justify-between px-10  py-10 ">
        <section className="flex   flex-col items-center justify-center  ">
          <div className="relative w-full max-w-2xl">
            <h1 className="joyride flex flex-col text-left font-mono text-6xl font-bold">
              NFT that are Out of this{' '}
              <span className="flex items-center">
                world
                <div className="">
                  <img src="/KEEPSMILING.png" width="60" height="60" alt="keep" />
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
          <div className="outerSans relative flex w-full flex-wrap  justify-around">
            <button className="relative flex h-10 w-32 items-center justify-center ">
              <div className=" absolute  sm:h-16 sm:w-48 h-10 w-36 skew-x-[23deg] items-center justify-center  bg-gradient-to-r from-[#B1D26F]  to-[#60E7CE]	"></div>
              <h1 className="absolute z-10  text-xl sm:text-2xl font-bold text-black ">Explore</h1>
            </button>
            <button className=" text-xl sm:text-2xl ml-1 font-bold ">Learn more</button>
          </div>
        </section>
        <div className="relative hidden  flex-col items-center xl:flex">
          <div className="relative hidden md:block ">
            <img src="/nft.png" alt="nft" />
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
          <img src="/binance 1.svg" className="px-5 py-2" />
          <img src="/bitmex 1.svg" className="px-5 py-2" />
          <img src="/blockport 1.svg" className="px-5 py-2" />
          <img src="/coinbase 1.svg" className="px-5 py-2" />
        </div>
      </div>
    </div>
  )
}
