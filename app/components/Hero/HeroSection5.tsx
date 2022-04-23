/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function HeroSection5() {
  const NavData = ['Marketplace', 'Artists', 'Community']

  const image =
    'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650696868/new-nft-hero-section-image_gcqla0.png'
  return (
    <div className="h-screen bg-black relative overflow-hidden w-full">
      <nav className=" relative  flex justify-between z-50 items-center px-5 py-3 w-full ">
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650702001/Group1_nn2bfi.png"
            width="140"
            height="100"
          />
        </div>
        <>
          <div className=" hidden sm:flex">
            {NavData.map((item, index) => {
              return (
                <h1 className="text-xl Rubik-SemiBold mx-2" key={index}>
                  {item}
                </h1>
              )
            })}
          </div>
        </>
        <div>
          <button className="border-2 rounded-xl border-[#FFA503] hover:bg-[#FFA503] duration-150 ease-in-out hover:duration-150  w-[170.13px] h-[60.05px] text-xl Rubik-SemiBold">
            Login
          </button>
        </div>
      </nav>
      <div className=" grid lg:grid-cols-2 items-center overflow-hidden">
        <div className="px-3 sm:px-4 max-w-3xl relative z-50 ">
          <h1 className="Rubik-Medium text-4xl pt-10 sm:pt-0 md:text-[55px] leading-[1.2] max-w-3xl text-left">
            Discover unique NFTs and Digital arts on our platform with ease
          </h1>
          <div className="relative overflow-hidden flex max-w-3xl items-center ">
            <div className="max-w-[345px] h-[70px] relative overflow-hidden ">
              <svg
                viewBox="0 0 445 75"
                className=" relative w-[280px] h-[70px] sm:w-[345px] sm:h-[70px] "
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.31746 2.2262H434.97C441.244 2.2262 444.609 9.60364 440.496 14.3409L391.96 70.2456C390.57 71.8465 388.554 72.7659 386.435 72.7659H9.31746C5.27614 72.7659 2 69.4897 2 65.4484V9.54364C2 5.50233 5.27613 2.2262 9.31746 2.2262Z"
                  stroke="#FFA503"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
              <input
                placeholder="Enter your email to get started"
                className="Rubik-Bold sm:text-lg -top-1 rounded-br-3xl text-sm bg-transparent focus:outline-none px-4 text-white z-10 w-full absolute inset-0"
              />
            </div>
            <svg
              width="153"
              height="75"
              viewBox="0 0 183 75"
              className=" relative w-[110px] h-[70px] sm:w-[155px] sm:h-[75px] "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M66.1943 3.25782C67.9595 1.32639 70.4555 0.226196 73.072 0.226196H173.682C178.828 0.226196 183 4.39777 183 9.54366V65.4484C183 70.5943 178.828 74.7659 173.682 74.7659H21.9785C13.8779 74.7659 9.63588 65.1421 15.1008 59.1626L66.1943 3.25782Z"
                fill="#FFA503"
              />
              <path
                d="M102.366 51.7544L98.3921 47.7801"
                stroke="white"
                strokeWidth="2.81027"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M125.119 23.7851C120.872 23.3131 105.434 22.9778 100.379 41.8186L108.328 49.7673C127.032 44.5758 126.796 29.2622 126.361 25.0271C126.333 24.7073 126.192 24.4079 125.965 24.1809C125.738 23.9539 125.439 23.8138 125.119 23.7851Z"
                stroke="white"
                strokeWidth="2.81027"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M107.645 29.0634L99.075 29.8334C98.8621 29.8498 98.6563 29.917 98.4747 30.0294C98.2932 30.1417 98.1413 30.296 98.0317 30.4792L92.6415 38.9247C92.514 39.126 92.4397 39.3564 92.4257 39.5943C92.4117 39.8322 92.4584 40.0698 92.5615 40.2847C92.6646 40.4995 92.8206 40.6847 93.015 40.8226C93.2093 40.9606 93.4355 41.0468 93.6724 41.0733L100.379 41.8185"
                stroke="white"
                strokeWidth="2.81027"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M121.108 42.3278L120.313 51.0713C120.296 51.2842 120.229 51.49 120.117 51.6715C120.004 51.8531 119.85 52.005 119.667 52.1146L111.221 57.5048C111.02 57.6323 110.79 57.7066 110.552 57.7206C110.314 57.7346 110.076 57.6879 109.861 57.5848C109.647 57.4817 109.461 57.3256 109.323 57.1313C109.185 56.937 109.099 56.7108 109.073 56.4739L108.328 49.7672"
                stroke="white"
                strokeWidth="2.81027"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M114.786 35.3603C115.609 36.1834 116.944 36.1834 117.767 35.3603C118.59 34.5372 118.59 33.2026 117.767 32.3795C116.944 31.5564 115.609 31.5564 114.786 32.3795C113.963 33.2026 113.963 34.5372 114.786 35.3603Z"
                fill="white"
              />
            </svg>
          </div>
          <div className="py-10 sm:py-20 relative overflow-hidden">
            <h1 className="Rubik-Medium text-left pt-20 text-2xl">
              Trade with any of the following Coins
            </h1>
            <div className="flex">
              <img src="/bitcoin-(btc).svg" />
              <img src="/binance-coin-(bnb).svg" />
              <img src="/ethereum-classic-(etc).svg" />
              <img src="/litecoin(ltc).svg" />
              <img src="/solana-(sol).svg" />
              <img src="/trontron-(trx).svg" />
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0  overflow-hidden object-contain">
          <div className="bg-black/40 sm:bg-black/0 w-full h-full absolute z-10 "></div>
          <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px]  h-full absolute  -left-10 z-10  "></div>
          <img src={image} alt="Upload" height="600" width="600" className="relative opacity-95 object-fill" />
          <div className="bg-gradient-to-t from-black to-[#00000000] w-full  h-[200px] absolute  bottom-0 "></div>
          <div className="bg-gradient-to-b from-black to-[#00000000] w-full  h-[150px] absolute  top-0 "></div>
        </div>
      </div>
    </div>
  )
}
// export default function HeroSection5() {
//   const NavData = ['Marketplace', 'Artists', 'Community']

//   const image =
//     'https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650696868/new-nft-hero-section-image_gcqla0.png'
//   return (
//     <div className=" bg-black relative overflow-hidden w-full">
//       <nav className=" relative  flex justify-between z-50 items-center px-5 py-3 w-full ">
//         <div>
//           <img
//             src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1650702001/Group1_nn2bfi.png"
//             width="140"
//             height="100"
//           />
//         </div>
//         <>
//           <div className=" hidden sm:flex">
//             {NavData.map((item, index) => {
//               return (
//                 <h1 className="text-xl Rubik-SemiBold mx-2" key={index}>
//                   {item}
//                 </h1>
//               )
//             })}
//           </div>
//         </>
//         <div>
//           <button className="border-2 rounded-xl border-[#FFA503] hover:bg-[#FFA503] duration-150 ease-in-out hover:duration-150  w-[170.13px] h-[60.05px] text-xl Rubik-SemiBold">
//             Login
//           </button>
//         </div>
//       </nav>
//       <div className=" grid lg:grid-cols-2 items-center overflow-hidden">
//         <div className="px-3 sm:px-4 max-w-3xl relative z-50 ">
//           <h1 className="Rubik-Medium text-4xl pt-10 sm:pt-0 md:text-[55px] leading-[1.2] max-w-3xl text-left">
//             Discover unique NFTs and Digital arts on our platform with ease
//           </h1>
//           <div className="relative overflow-hidden flex max-w-3xl items-center ">
//             <div className="max-w-[345px] h-[70px] relative overflow-hidden ">
//               <svg
//                 viewBox="0 0 445 75"
//                 className=" relative w-[280px] h-[70px] sm:w-[345px] sm:h-[70px] "
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M9.31746 2.2262H434.97C441.244 2.2262 444.609 9.60364 440.496 14.3409L391.96 70.2456C390.57 71.8465 388.554 72.7659 386.435 72.7659H9.31746C5.27614 72.7659 2 69.4897 2 65.4484V9.54364C2 5.50233 5.27613 2.2262 9.31746 2.2262Z"
//                   stroke="#FFA503"
//                   strokeWidth="4"
//                   strokeLinejoin="round"
//                 />
//               </svg>
//               <input
//                 placeholder="Enter your email to get started"
//                 className="Rubik-Bold sm:text-lg -top-1 rounded-br-3xl text-sm bg-transparent focus:outline-none px-4 text-white z-10 w-full absolute inset-0"
//               />
//             </div>
//             <svg
//               width="153"
//               height="75"
//               viewBox="0 0 183 75"
//               className=" relative w-[110px] h-[70px] sm:w-[155px] sm:h-[75px] "
//               fill="none"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M66.1943 3.25782C67.9595 1.32639 70.4555 0.226196 73.072 0.226196H173.682C178.828 0.226196 183 4.39777 183 9.54366V65.4484C183 70.5943 178.828 74.7659 173.682 74.7659H21.9785C13.8779 74.7659 9.63588 65.1421 15.1008 59.1626L66.1943 3.25782Z"
//                 fill="#FFA503"
//               />
//               <path
//                 d="M102.366 51.7544L98.3921 47.7801"
//                 stroke="white"
//                 strokeWidth="2.81027"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M125.119 23.7851C120.872 23.3131 105.434 22.9778 100.379 41.8186L108.328 49.7673C127.032 44.5758 126.796 29.2622 126.361 25.0271C126.333 24.7073 126.192 24.4079 125.965 24.1809C125.738 23.9539 125.439 23.8138 125.119 23.7851Z"
//                 stroke="white"
//                 strokeWidth="2.81027"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M107.645 29.0634L99.075 29.8334C98.8621 29.8498 98.6563 29.917 98.4747 30.0294C98.2932 30.1417 98.1413 30.296 98.0317 30.4792L92.6415 38.9247C92.514 39.126 92.4397 39.3564 92.4257 39.5943C92.4117 39.8322 92.4584 40.0698 92.5615 40.2847C92.6646 40.4995 92.8206 40.6847 93.015 40.8226C93.2093 40.9606 93.4355 41.0468 93.6724 41.0733L100.379 41.8185"
//                 stroke="white"
//                 strokeWidth="2.81027"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M121.108 42.3278L120.313 51.0713C120.296 51.2842 120.229 51.49 120.117 51.6715C120.004 51.8531 119.85 52.005 119.667 52.1146L111.221 57.5048C111.02 57.6323 110.79 57.7066 110.552 57.7206C110.314 57.7346 110.076 57.6879 109.861 57.5848C109.647 57.4817 109.461 57.3256 109.323 57.1313C109.185 56.937 109.099 56.7108 109.073 56.4739L108.328 49.7672"
//                 stroke="white"
//                 strokeWidth="2.81027"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//               <path
//                 d="M114.786 35.3603C115.609 36.1834 116.944 36.1834 117.767 35.3603C118.59 34.5372 118.59 33.2026 117.767 32.3795C116.944 31.5564 115.609 31.5564 114.786 32.3795C113.963 33.2026 113.963 34.5372 114.786 35.3603Z"
//                 fill="white"
//               />
//             </svg>
//           </div>
//           <div className="py-10 sm:py-20 relative overflow-hidden">
//             <h1 className="Rubik-Medium text-left pt-20 text-2xl">
//               Trade with any of the following Coins
//             </h1>
//             <div className="flex">
//               <img src="/bitcoin-(btc).svg" />
//               <img src="/binance-coin-(bnb).svg" />
//               <img src="/ethereum-classic-(etc).svg" />
//               <img src="/litecoin(ltc).svg" />
//               <img src="/solana-(sol).svg" />
//               <img src="/trontron-(trx).svg" />
//             </div>
//           </div>
//         </div>
//         <div className="absolute top-0 right-0  overflow-hidden object-contain">
//           <div className="bg-black/40 sm:bg-black/0 w-full h-full absolute z-10 "></div>
//           <div className="bg-gradient-to-r from-black to-[#fff0] w-[100px]  h-full absolute  -left-10 z-10  "></div>
//           <img src={image} alt="Upload" height="600" width="600" className="relative opacity-95 object-fill" />
//           <div className="bg-gradient-to-t from-black to-[#00000000] w-full  h-[200px] absolute  bottom-0 "></div>
//         </div>
//       </div>
//     </div>
//   )
// }
