/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import { useState } from 'react'

import { codeData } from '../../data/components/data'
import AppLayout, { LayoutBody, LayoutNav } from '../../layout/AppLayout'
import { Componentbutton } from '../../website/components/ComponentButton'

export default function Component() {
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

  return (
    <AppLayout title="Components">
      {/* <div className="bg-slate-700 min-h-screen max-w-sm"> </div> */}
      <>
        <LayoutNav setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}>
          {' '}
          <>
            <h1 className="text-4xl font-bold ">
              <Link href="/components"> Components</Link>{' '}
            </h1>
            <section className="dark:text-white text-dark flex flex-wrap flex-col justify-center items-start  my-4 ">
              {codeData.map((n) => (
                <div className="flex flex-wrap my-2 w-full text-left " key={n.title}>
                  <Componentbutton
                    title={n.title}
                    urlTitle={n.urlTitle}
                    url={n.url}
                    length={n.store.length}
                  />
                </div>
              ))}
            </section>
          </>
        </LayoutNav>
        <LayoutBody setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}>
          <div className="container flex items-center justify-center p-6 mx-auto mt-8 lg:my-16 h-80 sm:h-96 md:h-112 xl:h-128">
            <img
              alt="pc_guy"
              className="object-contain h-80 sm:h-96 md:h-112 xl:h-128"
              src="/pc_guy.png"
            />
          </div>
        </LayoutBody>
      </>
    </AppLayout>
  )
}
