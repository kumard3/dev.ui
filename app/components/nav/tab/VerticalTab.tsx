import { useState } from 'react'

export default function VerticalTab() {
  const data = [
    {
      title: 'Item One',
      data: 'lorem ipsum dolor sit amet, consectetur adip',
    },
    {
      title: 'Item two',
      data: 'lorem ipsum dolor sit amet, consectetur adip lorem ipsum dolor sit amet, consectetur adip',
    },
  ]
  const [tab, setTab] = useState(data[0].title)

  const filterdata = data.filter((e) => e.title === tab)
  const active = filterdata[0].title

  return (
    <div className=" flex h-60 bg-black rounded-xl">
      <div className=" flex flex-col mt-5">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title
                  ? 'text-blue-400 border-r-blue-400 border-r-2 max-w-full transition-all  duration-200 ease-in-out'
                  : ''
              } px-10 py-5  `}
              key={index}
            >
              {n.title}
            </button>
          )
        })}
      </div>
      <div className=" pt-4 px-4 max-w-xs">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>
        })}
      </div>
    </div>
  )
}
{
  /* 

 <div className="h-60 bg-black max-w-sm rounded-xl">
      <div className=" px-10">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title
                  ? 'text-blue-400 border-b-blue-400 border-b-2 transition-all  duration-200 ease-in-out'
                  : ''
              } px-10 py-3  `}
              key={index}
            >
              {n.title}
            </button>
          )
        })}
      </div>

      <div className=" pt-4 px-4">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>
        })}
      </div>
    </div>

*/
}
