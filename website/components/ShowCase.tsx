"use client"

import Link from 'next/link'
import  { useState } from 'react'

const ShowCaseProfile = () => {
  const [play, setPlay] = useState(false)
  return (
    <div className="border  w-[350px] glass rounded-xl flex">
      <img
        src="https://media4.giphy.com/media/BKv6EPd7ZCgmMg0iQK/giphy.gif?cid=ecf05e47dwh9vdr5bezeb3lbg1bqy8y3kfe61f2oopjxa2jw&rid=giphy.gif&ct=g"
        alt="music"
        width="150"
        height="150"
        className="rounded-2xl p-2"
      />

      <div className="px-4 py-4 ">
        <div className="font-outerSans py-3">
          <h1>Toxic</h1>
          <p className="text-xs">BoyWithUke</p>
        </div>
        <div className="flex w-full justify-evenly  ">
          <button className="fill-[#ffffff4d] mx-2 border rounded-full border-gray-500 p-1">
            <svg
              width="30"
              height="30"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FastRewindRoundedIcon"
            >
              <path d="M11 16.07V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.56.4-.56 1.24 0 1.63l5.77 4.07c.67.47 1.58 0 1.58-.81zm1.66-3.25 5.77 4.07c.66.47 1.58-.01 1.58-.82V7.93c0-.81-.91-1.28-1.58-.82l-5.77 4.07c-.57.4-.57 1.24 0 1.64z"></path>
            </svg>
          </button>

          <button
            className="fill-white border rounded-full border-gray-500 p-1"
            onClick={() => setPlay(!play)}
          >
            {play === true ? (
              <svg
                width="30"
                height="30"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PlayArrowRoundedIcon"
              >
                <path d="M8 6.82v10.36c0 .79.87 1.27 1.54.84l8.14-5.18c.62-.39.62-1.29 0-1.69L9.54 5.98C8.87 5.55 8 6.03 8 6.82z"></path>
              </svg>
            ) : (
              <svg
                width="30"
                height="30"
                focusable="false"
                aria-hidden="true"
                viewBox="0 0 24 24"
                data-testid="PauseRoundedIcon"
              >
                <path d="M8 19c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2v10c0 1.1.9 2 2 2zm6-12v10c0 1.1.9 2 2 2s2-.9 2-2V7c0-1.1-.9-2-2-2s-2 .9-2 2z"></path>
              </svg>
            )}
          </button>

          <button className="fill-[#ffffff4d] mx-2  border rounded-full border-gray-500 p-1">
            <svg
              width="30"
              height="30"
              focusable="false"
              aria-hidden="true"
              viewBox="0 0 24 24"
              data-testid="FastForwardRoundedIcon"
            >
              <path d="m5.58 16.89 5.77-4.07c.56-.4.56-1.24 0-1.63L5.58 7.11C4.91 6.65 4 7.12 4 7.93v8.14c0 .81.91 1.28 1.58.82zM13 7.93v8.14c0 .81.91 1.28 1.58.82l5.77-4.07c.56-.4.56-1.24 0-1.63l-5.77-4.07c-.67-.47-1.58 0-1.58.81z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

const ShowCaseCard = () => {
  return (
    <div className=" w-72 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
      <div>
        <img
          src="https://media4.giphy.com/media/1gbqIc1fK8QgR3bHL7/giphy.gif?cid=790b7611a2f696d51a46ce892e420e77735707466a4abd3b&rid=giphy.gif&ct=g"
          alt="test"
          width="300"
          height="300"
          className="rounded-t-xl w-full"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
        <div className="flex justify-between">
          <h1 className="font-RubikBold ">Bored ape nft accidental</h1>
          <h1 className="font-bold font-RubikBold">Price</h1>
        </div>
        <div className="flex  justify-between font-mono">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  )
}
const ShowCaseCard2 = () => {
  return (
    <div className="w-60 h-60 rounded-xl">
      <img
        src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g"
        alt="Giphy"
        className="rounded-t-xl"
      />
      <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
        <h1 className="font-bold  font-mono  text-xl">Available soon</h1>
      </div>
    </div>
  )
}

export default function ShowCase() {
  return (
    <div className=" w-full relative -mt-[10rem]  ">
      <div className="absolute cursor-pointer top-[23rem] right-[15rem] ">
        <ShowCaseProfile />
      </div>
      <Link href="components/card">
        <div className="absolute cursor-pointer top-[7rem] -right-[4rem]">
          <ShowCaseCard />
        </div>
      </Link>
      <Link href="components/card">
        <div className="absolute cursor-pointer top-[6rem]  right-[15rem]">
          <ShowCaseCard2 />
        </div>
      </Link>
    </div>
  )
}

{
  /* export default function ShowCase() {
  return (
    <div className="flex w-[400px] min-h-[40rem]">
      {" "}
      <div className="absolute top-[28rem] right-[330px]" >
        <ShowCaseProfile />
      </div>
      <div className="absolute top-[13rem] right-[30px]">
        <ShowCaseCard />
      </div>
      <div className="absolute  right-[330px]">
        <ShowCaseCard2 />
      </div>
    </div>
  );
}
  */
}
