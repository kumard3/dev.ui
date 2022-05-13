import Head from 'next/head'
import Nav from '../website/components/Nav'

export default function Error() {
  return (
    <>
      <Head>
        <title>Dev-ui</title>
      </Head>
      <div className="w-full ">
        <Nav />
        <div className="w-full flex justify-center py-10 ">
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652463672/giphy_awwf25.gif"
            alt="404"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
      </div>
    </>
  )
}
