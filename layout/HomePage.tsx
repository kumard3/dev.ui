import { NextSeo } from 'next-seo'
import React from 'react'

import Nav from '../website/components/Nav'

export default function HomePage({ children }: any) {
  return (
    <>
      <NextSeo
        title="Dev.ui"
        description="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        additionalLinkTags={[
          {
            rel: 'icon',
            href: 'https://dev-ui.vercel.app/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: 'https://dev-ui.vercel.app/touch-icon-ipad.jpg',
            sizes: '76x76',
          },
          {
            rel: 'manifest',
            href: '/manifest.json',
          }
        ]}
      />

      <Nav />
      <div className="py-[50px] overflow-hidden">{children}</div>
    </>
  )
}
