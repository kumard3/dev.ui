export default function ContactPage() {
  return (
    <div className="relative overflow-hidden" >
      <div className=" hidden md:block absolute z-[-1]  w-[13rem] right-[28rem]">
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
      
      <div className=" hidden md:block  absolute z-[-1] top-[34rem] w-[18rem] left-[23rem]">
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
    <div className="container overflow-hidden flex items-center justify-center flex-col my-5 mx-auto">
      
      <h1 className="text-5xl font-bold text-[#7C76BB] mt-[4rem] ">
        Start your business now !!!
      </h1>
      <div>
        <img src="/Shopping 1.png" />
      </div>
      <button className="border-2 border-[#7C76BB] px-6 py-2 flex justify-evenly  items-center rounded-xl">
        <h2 className="font-bold"> Lets Talk </h2>
        <div className="pl-2">
          <svg
            width="27"
            height="19"
            viewBox="0 0 27 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1833 0.779053L16.0082 2.9644L21.0498 7.98247L0.0753632 8.00358L0.0784662 11.0869L20.9954 11.0659L16.0387 16.0458L18.2241 18.2209L26.9247 9.47961L18.1833 0.779053Z"
              fill="#7C76BB"
            />
          </svg>
        </div>
      </button>
    </div>
    </div>
  );
}
