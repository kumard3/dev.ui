import { useState } from "react";

export default function TabSection() {
  const [tab, setTab] = useState("First");
  const data = [
    {
      title: "First",
      data: "first",
    },
    {
      title: "Second",
      data: "Second",
    },
  ];

  const filterdata = data.filter((e) => e.title === tab);
  const active = filterdata[0].title;

  return (
    <div>
      <div>
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title ? "text-blue-400 bg-white/10 rounded-lg " : ""
              } px-10 py-3  `}
              key={index}
            >
              {n.title}
            </button>
          );
        })}
      </div>

      <div className="flex justify-center mt-4">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>;
        })}
      </div>
    </div>
  );
}
