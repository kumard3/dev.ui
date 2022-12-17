'use client'

import { Suspense } from 'react'
import { codeData } from '../../../data/components/data'
import CodeDisplay from '../../../website/codeDisplay/CodeDisplay'
import Loader from '../../loader'

export async function generateStaticParams() {
  return codeData.map((post) => ({
    title: [post.urlTitle],
  }))
}

export default function page({ params }: any) {
  const route = params?.title
  const filterdata = codeData.filter((e) => e.urlTitle === route)
  const Filter = filterdata[0]?.store

  return (
    <div>
      <div className="flex w-full justify-center flex-col items-center">
        <Suspense fallback={<Loader />}>
          {Filter?.map((n, index) => (
            <CodeDisplay
              component={n.component}
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
