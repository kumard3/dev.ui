import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { showCode } from '../../data/templates/data'
import AppLayout, { LayoutBody, LayoutNav } from '../../layout/AppLayout'
import TemplateDisplay from '../../website/codeDisplay/TemplateDisplay'
import { Componentbutton } from '../../website/components/ComponentButton'

export default function Post() {
  const router = useRouter()
  const route = router.query.title
  const filterdata = showCode.filter((e) => e.urlTitle === route)
  const Filter = filterdata[0]?.store
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <AppLayout>
      <>
        <LayoutNav setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}>
          <>
            <h1 className="text-4xl font-bold ">
              <Link href="/templates"> Templates</Link>{' '}
            </h1>
            <section className="dark:text-white text-dark flex flex-wrap flex-col justify-center items-start  my-4 ">
              {showCode.map((n) => (
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
          <div className="dark:text-white">
            <div className="container mx-auto flex w-full justify-center flex-col items-center">
              {Filter?.map((n, index) => (
                <TemplateDisplay Weburl={n.Weburl} github={n.github} key={index} />
              ))}
            </div>
          </div>
        </LayoutBody>
      </>
    </AppLayout>
  )
}
