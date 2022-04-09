/* eslint-disable @next/next/no-sync-scripts */
import { useState, ReactNode, useEffect } from 'react'
//@ts-ignore
import SyntaxHighlighter from 'react-syntax-highlighter'
//@ts-ignore
import { stackoverflowDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import useCopyToClipboard from './useCopyToClipboard'

import { useRouter } from 'next/router'

interface Props {
  component?: ReactNode
  jsx?: string
}

export default function CodeDisplay({ component, jsx }: Props) {
  const [value, copy] = useCopyToClipboard()
  const [tab, setTab] = useState('Preview')
  const [CopiedText, setCopiedText] = useState(false)
  const data = [
    {
      title: 'Preview',
    },
    {
      title: 'Jsx',
    },
  ]

  const router = useRouter()

  useEffect(() => {
    if (router.asPath.slice(12).toString() === router.query.title) {
      setTab('Preview')
    }
  }, [router.asPath])

  function handleCopy(e: any) {
    e.preventDefault()
    copy(`${jsx}`)
    setCopiedText(true)
    setTimeout(() => {
      setCopiedText(false)
    }, 3000)
  }
console.log(component)
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
              <div className="max-h-[50rem] overflow-scroll relative ">
                <div className="sticky right-2 top-2">
                  <button
                    onClick={(e) => handleCopy(e)}
                    className="absolute right-2 top-2 bg-white/10 backdrop-blur-xl backdrop-filter filter w-40 h-10 rounded-md "
                  >
                    {CopiedText ? (
                      <span className="text-green-400">Copied</span>
                    ) : (
                      <span className="text-white">Copy</span>
                    )}
                  </button>
                </div>
                <SyntaxHighlighter language="javascript" style={stackoverflowDark}>
                  {jsx}
                </SyntaxHighlighter>
              </div>
            )}
          </>
        </div>
      </section>
    </>
  )
}
