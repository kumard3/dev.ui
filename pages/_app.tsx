import '../styles/globals.css'

import type { AppProps } from 'next/app'

import Analytics from '../website/analytics'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <a
        title="Github link Dev.Ui"
        href="https://github.com/kumard3/dev.ui"
        target="_blank"
        rel="noreferrer"
        aria-label="Github"
        className="text-center w-full font-mono pt-1  flex items-center justify-center gradientbg "
      >
        ⭐️ Star DevUI on GitHub ⭐️
      </a>
      <Analytics />
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
