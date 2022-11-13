import React from 'react'

export default function Button7() {
  return (
    <button className="relative block group ">
      <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
      <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="p-2 ">
          <p className="text-xl font-outerSans font-medium">Button</p>
        </div>
      </div>
    </button>
  )
}
