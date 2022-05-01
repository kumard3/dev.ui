import React from 'react'

const ShowCaseProfile = () => {
  return (
    <div className="flex flex-col glass max-w-xs rounded-3xl p-4 ">
      <div className="flex justify-start items-center">
        <div className="pr-6">
          {' '}
          <img
            className="rounded-[50%] border-pink-400 border-2 h-[70px]"
            src="https://source.unsplash.com/50x50/?portrait"
          />
        </div>
        <div className="flex flex-col">
          <h1 className="font-bold">Show-Case</h1>
          <span>@show</span>
        </div>
      </div>
      <div className="py-2">
        {' '}
        <h1 className="font-sans font-semibold text-lg">
          Full-stack developer, @getnextui lover she/her 🎉
        </h1>
      </div>
      <div className="flex ">
        <h1 className="px-2">
          4 <span>Following</span>
        </h1>
        <h1>
          100k <span>Followers</span>
        </h1>
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
      <img src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif?cid=790b7611a5ba988db1bc7457636dd163c28af6f6dbc84a77&rid=giphy.gif&ct=g" alt="Giphy" className="rounded-t-xl" />
      <div className="glass py-4 px-5 relative -top-[3.4rem]  rounded-b-xl z-10">
        <h1 className="font-bold  font-mono  text-xl">Available soon</h1>
      </div>
    </div>
  )
}

export default function ShowCase() {
  return (
    <div className="flex w-[400px] min-h-[40rem]">
      {' '}
      <div className="absolute top-[33rem] right-[300px]">
        <ShowCaseProfile />
      </div>
      <div className="absolute top-[8rem] right-[30px]">
        <ShowCaseCard />
      </div>
      <div className="absolute  right-[350px]">
        <ShowCaseCard2 />
      </div>
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
