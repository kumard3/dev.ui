/* eslint-disable @next/next/no-img-element */

export const SquareAvatar = () => {
  return (
    <img
      src="https://source.unsplash.com/120x120/?portrait"
      className="rounded-lg w-32"
      alt="Avatar"
    />
  );
};

export const ContentAvatar = () => {
  return (
    <div className="text-center">
      <img
        src="https://source.unsplash.com/120x120/?portrait"
        className="rounded-full w-32 mb-4 mx-auto"
        alt="Avatar"
      />
      <h5 className="text-xl font-medium leading-tight mb-2">John Doe</h5>
      <p className="text-gray-500">Web designer</p>
    </div>
  );
};

export const CircleAvatar = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div className="">
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt="image"
          className="rounded-[50%] "
        />
      </div>
    </div>
  );
};
