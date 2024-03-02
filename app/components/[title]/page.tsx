import { Metadata } from "next";
import { Key, Suspense } from "react";

import CodeDisplay from "../../../website/codeDisplay/CodeDisplay";
import Loader from "../../loader";

export const dynamic = "force-static";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const capitalize = (s: string | any[]) =>
    s && s[0].toUpperCase() + s.slice(1);

  return {
    title: capitalize(params?.title) + " Components",
    metadataBase: new URL("https://devui.in/components"),
    openGraph: {
      images: "/dev-ui.gif",
    },
  };
}

// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/components/`);
//   const data = await res.json();
//   return data.map((post: { urlTitle: any }) => ({
//     title: post.urlTitle,
//   }));
// }

export default async function page({ params }: any) {
  const route = params?.title;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/components/`);
  const data = await res.json();
  const filterdata = data.filter(
    (e: { urlTitle: any }) => e.urlTitle === route
  );
  const Filter = filterdata[0]?.store;
  return (
    <div>
      <div className="flex w-full justify-center flex-col items-center">
        <Suspense fallback={<Loader />}>
          {Filter?.map(
            (
              n: { jsx: string | undefined; name: string },

              index: Key | null | undefined
            ) => (
              <CodeDisplay
                component={n.name}
                jsx={n.jsx}
                key={index}
                params={{
                  title: params?.title[0],
                }}
                route={params?.title}
              />
            )
          )}
        </Suspense>
      </div>
    </div>
  );
}
