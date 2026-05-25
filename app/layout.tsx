import "@/styles/globals.css";
import { Inter } from "next/font/google";
import Analytics from "@/website/analytics";
import Nav from "@/website/components/Nav";
const inter = Inter({ subsets: ["latin"] });

export const dynamic = "force-static";

export const metadata = {
  title: {
    default: "Dev.UI",
    template: "%s | Dev.UI",
  },
  description:
    "Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS",
  keywords: [
    "next.js",
    "react.js",
    "open source",
    "dev.ui",
    "component library",
    "free components",
    "free template",
  ],
  openGraph: {
    type: "website",
    url: "https://www.devui.in/",
    title: "Dev.Ui",
    description:
      "Dev UI is a free, open-source collection of UI components and templates based on Tailwind CSS",
    siteName: "Dev.Ui",
    images: [
      {
        url: "https://www.devui.in/dev-ui.gif",
      },
    ],
    videos: [
      {
        url: "https://www.devui.in/dev-ui.gif",
      },
    ],
  },
  robots: "index, follow",
  metadataBase: new URL("https://www.devui.in/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body
        className={`${inter.className} bg-black w-full min-h-screen text-white antialiased`}
      >
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
        <a
          title="Lumbox: email, browser, and credential vault for AI agents"
          href="https://lumbox.co?utm_source=devui&utm_medium=banner&utm_campaign=devui-top"
          target="_blank"
          rel="noreferrer"
          aria-label="Lumbox for AI agents"
          className="group relative block w-full font-mono text-sm py-2 px-4 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 transition-colors"
        >
          <span className="hidden sm:inline">
            Building AI agents? <span className="font-bold">Lumbox</span> gives them a real email inbox, stealth browser, and credential vault. Free to get started
          </span>
          <span className="sm:hidden">
            <span className="font-bold">Lumbox</span>: email + browser + vault for AI agents. Free to start
          </span>
          <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
        </a>
        <Nav />
        <div className=" overflow-hidden">{children}</div>
        <Analytics />
      </body>
    </html>
  );
}
