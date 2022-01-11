/* eslint-disable @next/next/no-img-element */
export default function Card2() {
  return (
    <div className="max-w-xs rounded-md shadow-md dark:bg-gray-900 dark:text-gray-100">
      <img
        src="https://source.unsplash.com/301x301/?random"
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72 dark:bg-gray-500"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
		  Lorem
          </h2>
          <p className="dark:text-gray-100">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta amet corporis accusantium aliquid consectetur eaque! Beatae quis natus voluptas amet fugiat quam nulla voluptatum quod, impedit neque?
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-blue-400 dark:text-gray-900"
        >
          Read more
        </button>
      </div>
    </div>
  );
}
