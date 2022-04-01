import Link from 'next/link'
// Import CodeDisplay from "../../website/components/CodeDisplay/CodeDisplay";
import { useRouter } from 'next/router'
import { useState } from 'react'

import { codeData } from '../../data/components/data'
import AppLayout, { LayoutBody, LayoutNav } from '../../layout/AppLayout'
import CodeDisplay from '../../website/codeDisplay/CodeDisplay'
import { Componentbutton } from '../../website/components/ComponentButton'

export default function Post() {
  const router = useRouter()
  const route = router.query.title
  const filterdata = codeData.filter((e) => e.urlTitle === route)
  const Filter = filterdata[0]?.store
  const [toggleSidebar, setToggleSidebar] = useState<boolean>(false)

  return (
    <AppLayout title="Components">
      <LayoutNav setToggleSidebar={setToggleSidebar} toggleSidebar={toggleSidebar}>
        <>
          <h1 className="text-4xl font-bold outerSans">
            <Link href="/components"> Components</Link>
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
        <div className=" flex w-full justify-center flex-col items-center">
          {Filter?.map((n, index) => (
            <CodeDisplay component={n.component} jsx={n.jsx} key={index} />
          ))}
        </div>
      </LayoutBody>
    </AppLayout>
  )
}
