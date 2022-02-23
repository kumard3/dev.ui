import { useState } from "react";

export default function VerticalTab() {
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
    <div className="flex items-center">
      <div className="flex flex-col">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title
                  ? "text-blue-400 bg-white/10 rounded-md"
                  : ""
              } p-3`}
              key={index}
            >
              {n.title}
            </button>
          );
        })}
      </div>

      <div className="ml-5 font-bold text-lg">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>;
        })}
      </div>
    </div>
  );
}
