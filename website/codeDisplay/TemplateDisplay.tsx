import { ReactNode } from "react";

interface Props {
  component?: ReactNode;
  Weburl?: string;
  github?: string;
  images?: string;
  title?: string;
}

export default function TemplateDisplay({
  Weburl,
  github,
  images,
  title,
}: Props) {
  return (
    <>
      <section className="container bg-black-1 mx-auto max-w-lg rounded overflow-hidden my-5 h-80 ">
        <div className=" mx-1 flex flex-col rounded  border-gray-500  border relative ">
          <div className=" relative h-[270px] w-full overflow-hidden rounded ">
            <img
              src={images}
              loading="lazy"
              alt={title}
              className="h-full w-full object-cover object-center transition duration-200 "
            />
          </div>
          <div className="h-12 flex justify-between items-center shrink-0  border-gray-500  border-t">
            <h1 className=" text-md font-bold ml-10 ">{title}</h1>
            <nav className="flex shrink-0 divide-x border-gray-500  border-l">
              <a
                href={Weburl}
                target="_blank"
                rel="noreferrer"
                title="Display preview "
                className="action focus-on-key flex justify-center items-center w-12 h-12 border-gray-500  border-b hover:text-sky-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noreferrer"
                title="Display code"
                className="action focus-on-key flex justify-center items-center w-12 h-12 border-gray-500  border-b hover:text-violet-400"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-auto"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                  ></path>
                </svg>
              </a>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
