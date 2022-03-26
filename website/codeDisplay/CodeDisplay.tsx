// /* eslint-disable @next/next/no-sync-scripts */

// import { useState, ReactNode, useEffect } from 'react'

// import { Prism } from '@mantine/prism'

// interface Props {
//   component?: ReactNode
//   jsx?: ReactNode
// }

// export default function CodeDisplay({ component, jsx }: Props) {
//   const [opened, setOpened] = useState('100%')
//   const [tab, setTab] = useState('Preview')
//   const data = [
//     {
//       title: 'Preview',
//       data: component,
//       code: '',
//     },
//     {
//       title: 'Jsx',
//       data: '',
//       code: jsx,
//     },
//   ]

//   const widths = [
//     {
//       width: '640px',
//       title: 'Mobile',
//     },
//     {
//       width: '768px',
//       title: 'Small',
//     },
//     {
//       width: '1024px',
//       title: 'Medium',
//     },
//     {
//       width: '1280px',
//       title: 'Large',
//     },
//     {
//       width: '100%',
//       title: 'Full',
//     },
//   ]

//   const filterdata = data.filter((e) => e.title === tab)

//   return (
//     <>
//       <section className=" mb-5 min-h-[10rem] w-full flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
//         <section className="flex bg-[#111111] p-3 justify-center items-center lg:justify-between">
//           <div>
//             {data.map((n, index) => {
//               return (
//                 <>
//                   <button onClick={() => setTab(n.title)} className="p-3 " key={index}>
//                     {n.title}
//                   </button>
//                 </>
//               )
//             })}
//           </div>
//           <div className="lg:flex justify-between hidden ">
//             {widths.map((n, index) => {
//               return (
//                 <>
//                   <button
//                     key={index}
//                     onClick={() => setOpened(n.width)}
//                     className="px-5 py-2  mx-1 rounded-xl border "
//                   >
//                     {n.title}
//                   </button>
//                 </>
//               )
//             })}
//           </div>
//         </section>
//         <hr />

//         <div>
//           <style jsx>{`
//             .widthTest {
//               width: ${opened};
//             }
//             @media (max-width: 1025px) {
//               .widthTest {
//                 width: 100%;
//               }
//             }
//           `}</style>
//           <>
//             {filterdata.map((n) => {
//               return (
//                 <>
//                   {n.data === '' ? (
//                     ''
//                   ) : (
//                     <div className="max-h-[50rem] overflow-scroll bg-[#151515] backdrop-blur-xl widthTest">
//                       <section className=" p-3 flex flex-col items-center justify-center w-full ">
//                         {n.data}
//                       </section>
//                     </div>
//                   )}

//                   {n.code === '' ? (
//                     ''
//                   ) : (
//                     <div className="max-h-[50rem] overflow-scroll">
//                       <Prism
//                         colorScheme="dark"
//                         language="jsx"
//                         copyLabel="Copy code to clipboard"
//                         copiedLabel="Code copied to clipboard"
//                         withLineNumbers={true}
//                       >
//                         {n.code}
//                       </Prism>
//                     </div>
//                   )}
//                 </>
//               )
//             })}
//           </>
//         </div>
//       </section>
//     </>
//   )
// }

/* eslint-disable @next/next/no-sync-scripts */

import { useState, ReactNode } from 'react'

import { Prism } from '@mantine/prism'

interface Props {
  component?: ReactNode
  jsx?: ReactNode
}

export default function CodeDisplay({ component, jsx }: Props) {
  const [opened, setOpened] = useState('100%')
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
      width: '340px',
      title: 'Mobile',
    },
    {
      width: '640px',
      title: 'Small',
    },
    {
      width: '768px',
      title: 'Medium',
    },
    {
      width: '1024px',
      title: 'Large',
    },
    {
      width: '100%',
      title: 'Full',
    },
  ]

  const filterdata = data.filter((e) => e.title === tab)

  return (
    <>
      <section className="bg-[#120e0e] mb-5 min-h-[10rem] w-full flex flex-col  container mx-auto overflow-hidden rounded-lg shadow-sm scrollbar-none my-5 ">
        <section className="flex p-3 bg-[#111111] justify-center items-center lg:justify-between">
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
          <div className="lg:flex justify-between hidden ">
            {widths.map((n, index) => {
              return (
                <>
                  <button
                    key={index}
                    onClick={() => setOpened(n.width)}
                    className="px-5 py-2  mx-1 rounded-xl border "
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
          <style jsx>{`
            .widthTest {
              width: ${opened};
            }
            @media (max-width: 1025px) {
              .widthTest {
                width: 100%;
              }
            }
          `}</style>
          <>
            {filterdata.map((n) => {
              return (
                <>
                  {n.data === '' ? (
                    ''
                  ) : (
                    <div className={` max-h-[50rem] overflow-scroll bg-[#181818] widthTest`}>
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
