import Head from 'next/head'
import React from 'react'

import Nav from '../website/components/Nav'

export default function HomePage({ children }: any) {
  return (
    <>
      <Head>
        
        {/* <meta name="twitter:card" content="summary_large_image" />
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
        <meta property="og:image" content="https://dev-ui.vercel.app/dev-ui.gif" />
        <meta property="og:image:secure_url" content="https://dev-ui.vercel.app/" />
        <meta property="og:image:width" content="1440" />
        <meta property="og:image:height" content="800" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" /> */}

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
