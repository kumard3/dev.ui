/* eslint-disable @next/next/no-sync-scripts */

import { useState, ReactNode } from 'react'

import { Prism } from '@mantine/prism'
import { Modal } from '@mantine/core'

interface Props {
  component?: ReactNode
  jsx?: ReactNode
}

export default function CodeDisplay({ component, jsx }: Props) {
  const [opened, setOpened] = useState('')
  const [tab, setTab] = useState('Preview')
  const data = [
    {
      title: 'Preview',
      data: component,
      code: '',
    },
    {
      title: 'Jsx',
      data: '',
      code: jsx,
    },
  ]

  const widths = [
    {
      width: 'sm',
    },
    {
      width: 'md',
    },
    {
      width: 'lg',
    },
    {
      width: 'xl',
    },
    {
      width: '100%',
    },
  ]

  const filterdata = data.filter((e) => e.title === tab)
  console.log(opened)
  return (
    <>
      <section className="bg-[#111111] mb-5 min-h-[10rem] w-[90vw] lg:max-w-[65vw] flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
        <section className="flex p-3  justify-between">
          <div>
            {data.map((n, index) => {
              return (
                <>
                  <button onClick={() => setTab(n.title)} className="p-3 " key={index}>
                    {n.title}
                  </button>
                </>
              )
            })}
          </div>
          <div className="lg:flex justify-between w-1/2 hidden ">
            {widths.map((n, index) => {
              return (
                <>
                  <button
                    key={index}
                    onClick={() => setOpened(n.width)}
                    className="px-7 rounded-xl border "
                  >
                    {n.width}
                  </button>
                </>
              )
            })}
          </div>
        </section>
        <hr />

        <div>
          <>
            {filterdata.map((n) => {
              return (
                <>
                  {n.data === '' ? (
                    ''
                  ) : (
                    <div className={` max-h-[50rem] overflow-scroll bg-black max-w-${opened}`}>
                      <section className=" p-3 flex flex-col items-center justify-center w-full ">
                        {n.data}
                      </section>
                    </div>
                  )}

                  {n.code === '' ? (
                    ''
                  ) : (
                    <div className={`max-h-[20rem] overflow-scroll `}>
                      <Prism
                        colorScheme="dark"
                        language="jsx"
                        copyLabel="Copy code to clipboard"
                        copiedLabel="Code copied to clipboard"
                        withLineNumbers={true}
                      >
                        {n.code}
                      </Prism>
                    </div>
                  )}
                </>
              )
            })}
          </>
        </div>
      </section>
    </>
  )
}
