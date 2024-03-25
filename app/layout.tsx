import "../styles/globals.css";
import Analytics from "../website/analytics";
import Nav from "../website/components/Nav";

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
export const dynamic = "auto",
  dynamicParams = true,
  revalidate = false,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
