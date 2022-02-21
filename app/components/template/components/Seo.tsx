import Head from "next/head";
interface Props {
  title: string;
  description: string;
  image: string;
  url: string;
}
export default function SEO({ title, description, image,url }: Props) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="viewport"
        content="width=device-width,minimum-scale=1,initial-scale=1"
      />
      <meta property="og:type" content="website" />
      <meta name="og:title" property="og:title" content={title} />
      <meta
        name="og:description"
        property="og:description"
        content={description}
      />
      <meta property="og:site_name" content="Kumar deepanshu Personal Portfolio" />

      <meta name="twitter:card" content="It is my personal portfolio" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@propernoun" />
      <meta name="twitter:creator" content="@propernounco" />

    
        <meta property="og:image" content={`${image}`} />
     <meta name="twitter:image" content={`${image}`} />

              {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content={title} />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta name="robots" content="Index" />
      <link rel="manifest" href="/manifest.json" />


    </Head>
  );
}
// import React from "react";
// import Head from "next/head";
// interface Props {
//   data: any
// }
// function SEO({ data }: Props) {
//   return (
//     <Head>
//       <title>{data.title}</title>
//       <meta name="title" content={data.title} />
//       <meta name="author" content="Hanzla Tauqeer" />
//       <meta name="description" content={data.description} />
//       <meta name="keywords" content={data.keywords.join(", ")} />
//       <link rel="canonical" href={data.url} />
      // {/* Open Graph / Facebook */}
      // <meta property="og:type" content="website" />
      // <meta property="og:url" content={data.url} />
      // <meta property="og:title" content={data.title} />
      // <meta property="og:description" content={data.description} />
      // <meta property="og:image" content={data.image} />
      // <meta property="og:site_name" content={data.title} />
      // {/* Twitter */}
      // <meta property="twitter:card" content="summary_large_image" />
      // <meta property="twitter:url" content={data.url} />
      // <meta property="twitter:title" content={data.title} />
      // <meta property="twitter:description" content={data.description} />
      // <meta property="twitter:image" content={data.image} />
      // <meta name="robots" content="Index" />
      // <link rel="manifest" href="/manifest.json" />
//       {/* Favicon */}
//       <link rel="apple-touch-icon" sizes="120x120" href="./favicon.png" />
//       <link rel="icon" type="image/png" sizes="32x32" href="./favicon.png" />
//       <link rel="icon" type="image/png" sizes="16x16" href="./favicon.png" />
//       <script
//         async
//         src="https://code.iconify.design/1/1.0.4/iconify.min.js"
//       ></script>
//     </Head>
//   );
// }

// export default SEO;
