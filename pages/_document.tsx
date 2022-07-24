import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta
            name="google-site-verification"
            content="ojrNbpH_TNGvB76f7GhW14IFc9z24nOduorPB2SOdYc"
          />
        </Head>
        <body className="bg-black w-full min-h-screen text-white ">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
