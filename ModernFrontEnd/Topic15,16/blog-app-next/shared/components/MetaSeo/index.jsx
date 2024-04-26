import Head from "next/head";
import React from "react";

function MetaSeo({ title, description, img_url }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={img_url} />
      <meta property="og:url" content={img_url} />
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="My Page Title" />
      <meta name="twitter:description" content="Description of my page" />
      <meta name="twitter:image" content="https://example.com/image.jpg" /> */}
    </Head>
  );
}

export default MetaSeo;
