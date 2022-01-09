export default function Hero() {
  return (
    <section id="home" className="">
      <div className="flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center  lg:text-left">
          <div className="">
            <div className="mb-[.7rem] ">
              <h1 className="text-5xl font-bold  sm:text-6xl">
                Hey, Im <span className="text-[#FC4370]" >Deepanshu</span>
              </h1>
            </div>
            <div className="my-[2rem]">
              <h1 className="text-5xl font-bold  sm:text-5xl">
                a <span className="text-[#FC4370]" >self-taught</span> designer
              </h1>
            </div>
            <div className="mb-[3rem]">
              <h1 className="text-5xl font-bold  sm:text-5xl ">
              & front-end developer.
              </h1>
            </div>
          </div>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <a
              href="#work"
              className="px-8 py-3 text-lg font-semibold rounded bg-[#FC4370]"
            >
              See my work
            </a>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="/hero_illustration.svg"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
}
