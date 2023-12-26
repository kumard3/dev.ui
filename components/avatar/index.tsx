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
      <div>
        <img
          src="https://source.unsplash.com/100x100/?portrait"
          alt="image"
          className="rounded-[50%] "
        />
      </div>
    </div>
  );
};
export const UserAvatar = () => {
  return (
    <div className="max-w-full py-4 px-2 w-full h-full scrollbar-hide overflow-x-scroll">
      <div className="flex h-full w-full ">
        <div className="inline-flex items-center justify-center gap-2 rounded-small outline-none   ">
          <span className="flex relative justify-center items-center box-border overflow-hidden align-middle z-0 outline-none    w-10 h-10 rounded-full">
            <img
              src="https://source.unsplash.com/120x120/?portrait"
              className="flex object-cover w-full h-full transition-opacity duration-500  "
              alt="image avatar"
            />
          </span>
          <div className="inline-flex flex-col items-start">
            <span className="text-base text-inherit">Jane Doe</span>
            <span className="text-xs text-gray-300">Web Designer</span>
          </div>
        </div>
      </div>
    </div>
  );
};
