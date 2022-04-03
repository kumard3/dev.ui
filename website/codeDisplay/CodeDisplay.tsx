/* eslint-disable @next/next/no-sync-scripts */

import { useState, ReactNode } from 'react'

import { Prism } from '@mantine/prism'

interface Props {
  component?: ReactNode
  jsx?: ReactNode
}

export default function CodeDisplay({ component, jsx }: Props) {
  const [tab, setTab] = useState('Preview')
  const data = [
    {
      title: 'Preview',
    },
    {
      title: 'Jsx',
    },
  ]

  return (
    <>
      <section className="bg-[#120e0e] mb-5 min-h-[10rem] w-full flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
        <section className="flex p-3 bg-[#111111] justify-center items-center lg:justify-between">
          <div>
            {data.map((n, index) => {
              return (
                <>
                  <button
                    onClick={() => setTab(n.title)}
                    className="p-3 text-xl outerSans"
                    key={index}
                  >
                    {n.title}
                  </button>
                </>
              )
            })}
          </div>
        </section>
        <hr />

        <div>
          <>
            {tab === 'Preview' ? (
              <div className="max-h-[50rem] overflow-scroll bg-[#181818]  ">
                <section className="min-h-[5rem] py-2 flex flex-col justify-center items-center  w-full ">
                  {component}
                </section>
              </div>
            ) : (
              <div className="max-h-[50rem] overflow-scroll ">
                <Prism
                  colorScheme="dark"
                  language="jsx"
                  copyLabel="Copy code to clipboard"
                  copiedLabel="Code copied to clipboard"
                  withLineNumbers={true}
                >
                  {jsx}
                </Prism>
              </div>
            )}
          </>
        </div>
      </section>
    </>
  )
}
