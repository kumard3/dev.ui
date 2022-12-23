import '../styles/globals.css'
import Analytics from '../website/analytics'
import Nav from '../website/components/Nav'

export const dynamic = 'auto',
  dynamicParams = true,
  revalidate = false,
  fetchCache = 'auto',
  runtime = 'nodejs',
  preferredRegion = 'auto'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head />
      <body className="bg-black w-full min-h-screen text-white ">
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
        <Nav />
        <div className=" overflow-hidden">{children}</div>
        <Analytics />
      </body>
    </html>
  )
}
