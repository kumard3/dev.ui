import { useState } from 'react'

export default function TabSection() {
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
    <div className="h-60 bg-black max-w-xs mx-2 sm:w-[20rem] rounded-xl">
      <div className="px-10 flex justify-between">
        {data.map((n, index) => {
          return (
            <button
              onClick={() => setTab(n.title)}
              className={`${
                active === n.title
                  ? 'text-blue-400 border-b-blue-400 border-b-2 transition-all  duration-200 ease-in-out'
                  : ''
              } w-[110px] py-2 `}
              key={index}
            >
              {n.title}
            </button>
          )
        })}
      </div>

      <div className="pt-4 px-4">
        {filterdata.map((n, index) => {
          return <div key={index}>{n.data}</div>
        })}
      </div>
    </div>
  )
}
