export default function Card1() {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-900 dark:text-gray-50 resize">
      <img
        src="https://source.unsplash.com/300x300/?random"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 dark:bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-xs font-medium tracking-widest uppercase dark:text-indigo-400">
          Title
        </span>
        <h2 className="text-xl font-semibold tracking-wide">
        Lorem ipsum dolor
        </h2>
      </div>
      <p className="dark:text-gray-100">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Distinctio tempora ipsum soluta amet corporis accusantium aliquid consectetur eaque!

      </p>
    </div>
  );
}
