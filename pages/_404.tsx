import Head from 'next/head'

export default function Error() {
  return (
    <div className="h-screen overflow-hidden">
      <Head>
        <title>Dev-ui</title>
      </Head>
      <div className="w-full flex justify-center ">
        <h1>404</h1>
      </div>
    </div>
  )
}
