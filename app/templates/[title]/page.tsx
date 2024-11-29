import { Metadata } from "next";
import { Key, Suspense } from "react";
import TemplateDisplay from "../../../website/codeDisplay/TemplateDisplay";
import Loader from "../../loader";

export const dynamic = "force-static";
// export async function generateStaticParams() {
//   const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/template`);

//   const data = await res.json();
//   return data.map((post: { urlTitle: any }) => ({
//     title: post.urlTitle,
//   }));
// }
export async function generateMetadata({ params }: any): Promise<Metadata> {
  const capitalize = (s: string | any[]) =>
    s && s[0].toUpperCase() + s.slice(1);

  return {
    title: capitalize(params?.title) + " Templates",
    metadataBase: new URL("https://www.devui.in/template"),
    openGraph: {
      images: "/dev-ui.gif",
    },
  };
}

export default async function page({ params }: any) {
  const route = params?.title;
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/template`);
  const data = await res.json();
  const filterdata = data.filter(
    (e: { urlTitle: any }) => e.urlTitle === route
  );
  const Filter = filterdata[0]?.store;
  return (
    <div>
      <div className=" grid md:grid-cols-2 2xl:grid-cols-3 w-full justify-center  items-center">
        <Suspense fallback={<Loader />}>
          {Filter?.map(
            (
              n: {
                Weburl: string | undefined;
                github: string | undefined;
                image: string | undefined;
                title: string | undefined;
              },
              index: Key | null | undefined
            ) => (
              <TemplateDisplay
                Weburl={n.Weburl}
                github={n.github}
                images={n.image}
                key={index}
                title={n.title}
              />
            )
          )}
        </Suspense>
      </div>
    </div>
  );
}
