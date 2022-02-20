import React from "react";

const ShowCaseProfile = () => {
  return (
    <div className="flex flex-col glass max-w-xs rounded-3xl p-4 ">
      <div className="flex justify-start items-center">
        <div className="pr-6">
          {" "}
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
        {" "}
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
  );
};

const ShowCaseCard = () => {
  return (
    <div className="w-[18.3rem] flex flex-col rounded-xl glass  min-h-[19rem] ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10">
        <div className="flex justify-between ">
          <h1 className="font-bold font-sans  text-lg ">
            Bored ape nft accidental
          </h1>
          <h1 className="font-bold font-sans text-lg ">Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>#345</p>
          <p>0.01</p>
        </div>
      </div>
    </div>
  );
};
const ShowCaseCard2 = () => {
  return (
    <div className="w-[197px] h-[197px] rounded-xl">
      <img src="/hero-card.png" />
      <div className="bg-white/20 border-t-[.5px] border-white/60  backdrop-blur-md py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10">
        <h1 className="font-bold">Available soon</h1>
      </div>
    </div>
  );
};

export default function ShowCase() {
  return (
    <div className="flex w-[400px] min-h-[40rem]">
      {" "}
      <div className="absolute top-[33rem] right-[300px]" >
        <ShowCaseProfile />
      </div>
      <div className="absolute top-[8rem] right-[30px]">
        <ShowCaseCard />
      </div>
      <div className="absolute  right-[350px]">
        <ShowCaseCard2 />
      </div>
    </div>
  );
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