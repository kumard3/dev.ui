import Head from 'next/head'
import React from 'react'

import Nav from '../website/components/Nav'

export default function HomePage({ children }: any) {
  return (
    <>
      {/* <NextSeo
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
          },
        ]}
        canonical="https://dev-ui.vercel.app/"
        
        
      /> */}
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta
          name="description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Dev.ui" />
        <meta
          property="og:description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="og:url" content="https://dev-ui.vercel.app/" />
        <meta property="og:site_name" content="Dev.ui" />
        <meta property="og:image" content="https://dev-ui.vercel.app/preview.png" />
        <meta property="og:image:secure_url" content="https://dev-ui.vercel.app/" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="py-[50px] overflow-hidden">{children}</div>
    </>
  )
}
