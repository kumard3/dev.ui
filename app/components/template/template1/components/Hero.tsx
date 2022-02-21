/* eslint-disable @next/next/no-img-element */

export default function Hero() {
  return (
    <>
      <section className="overflow-hidden">
        <div className="absolute z-[-1] top-[13rem] left-[-8rem] ">
          <svg
            width="323"
            height="323"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        
        <div className="hidden md:block  absolute z-[-1] top-[30rem] left-[50rem] w-[10rem] ">
          <svg
            width="100%"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>

        <div className="hidden lg:block  absolute z-[-1] top-[12rem] right-[10rem] w-[10rem] ">
          <svg
            width="100%"
            viewBox="0 0 323 323"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_b_2_51)">
              <circle
                cx="161.5"
                cy="161.5"
                r="161.5"
                fill="#DCF0FF"
                fillOpacity="0.25"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_2_51"
                x="-12"
                y="-12"
                width="347"
                height="347"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_2_51"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_2_51"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
          <div className="flex flex-col justify-center p-6 text-center rounded-sm  lg:text-left">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl text-[#7C76BB]">
              How to <span className="text-[#FF87B0]">level up</span> your business
            </h1>
            <p className="mt-6 mb-8 text-md sm:mb-12 lg:max-w-md xl:max-w-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est
              faucibus tellus leo non pellentesque lorem vel. Arcu magna eros,
              potenti duis.
            </p>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <a
                href="#"
                className="px-8 py-3 text-lg font-semibold rounded text-white bg-[#7C76BB]"
              >
                Lorem
              </a>
              <a
                href="#"
                className="px-8 py-3 text-lg font-semibold border rounded border-[#7C76BB]"
              >
                Lorem
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src="/build your business.png"
              alt=""
              className="object-contain "
            />
          </div>
        </div>
      </section>
    </>
  );
}
