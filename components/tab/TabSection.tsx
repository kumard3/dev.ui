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
  console.log(tab);

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
                active === n.title ? "border-b-2 border-black" : ""
              } p-3  `}
              key={index}
            >
              {n.title}
            </button>
          );
        })}
      </div>
      <div>
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>;
        })}
      </div>
    </div>
  );
}
