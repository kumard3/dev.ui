import Head from 'next/head'
import React from 'react'

import Nav from '../website/components/Nav'

export default function HomePage({ children }: any) {
  return (
    <>
      <Head>
        <title>DevUI</title>
        <meta name="title" content="DevUI" />
        <meta
          name="description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dev-ui.vercel.app/" />
        <meta property="og:title" content="DevUI" />
        <meta
          property="og:description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="og:video" content="https://dev-ui.vercel.app/dev-ui.gif" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dev-ui.vercel.app/" />
        <meta property="twitter:title" content="DevUI" />
        <meta
          property="twitter:description"
          content="Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS"
        />
        <meta property="twitter:video" content="https://dev-ui.vercel.app/dev-ui.gif" />
      </Head>

      <Nav />
      <div className="py-[50px] overflow-hidden">{children}</div>
    </>
  )
}
