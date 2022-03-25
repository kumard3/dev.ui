import React from 'react'

import Nav from '../website/components/Nav'
import SEO from '../website/components/Seo'

export default function HomePage({ children }: any) {
  return (
    <>
      <SEO
        title={'Devui'}
        description={
          'Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS'
        }
        image={'/WebSiteImage.png'}
        url={'https://dev-ui.vercel.app/'}
      />
      <Nav />
      <div className="py-[50px] overflow-hidden">{children}</div>
    </>
  )
}
