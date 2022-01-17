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
  return (
    <div>
      <div>
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className="p-3  active:text-blue-500 active:border-b-2 active:border-black"
              key={index}
            >
              {n.title}
            </button>
          );
        })}
      </div>
      <div>
        {filterdata.map((n, index) => {
            return(
                <div key={index}>
                {n.data}
                </div>
            )
        })}
      </div>
    </div>
  );
}
