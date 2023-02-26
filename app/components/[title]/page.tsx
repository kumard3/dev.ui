import { Key, Suspense } from 'react'
import { codeData } from '../../../data/components/data'
import CodeDisplay from '../../../website/codeDisplay/CodeDisplay'
import Loader from '../../loader'
export const dynamic = 'force-static'
export async function generateStaticParams() {
  const res  = await fetch("http://localhost:3000/api/components")
  const data  = await res.json()
  return data.map((post: { urlTitle: any }) => ({
    title: post.urlTitle,
  }))
}

export default async function page({ params }: any) {
  const route = params?.title
  const res  = await fetch("http://localhost:3000/api/components")
  const data  = await res.json()
  const filterdata = data.filter((e: { urlTitle: any }) => e.urlTitle === route)
  const Filter = filterdata[0]?.store

  return (
    <div>
      <div className="flex w-full justify-center flex-col items-center">
        <Suspense fallback={<Loader />}>
          {Filter?.map((n: { jsx: string | undefined }, index: Key | null | undefined) => (
            <CodeDisplay
              // component={n.component}
              jsx={n.jsx}
              key={index}
              params={{
                title: params?.title[0],
              }}
            />
          ))}
        </Suspense>
      </div>
    </div>
  )
}
