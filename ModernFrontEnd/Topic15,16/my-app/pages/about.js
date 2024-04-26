import Head from "next/head";

export default function About() {
  return (
    <div>
      <Head>
        <meta name="description" content="Description of the page" />
        <meta property="og:title" content="Title of the Open Graph story" />
        <meta
          property="og:description"
          content="Description that will show in the preview"
        />
        <meta property="og:image" content="URL of the image" />
        <meta property="og:url" content="URL of the webpage" />
        <meta name="twitter:card" content="summary_large_image" />

        <title>About</title>
      </Head>
      About
    </div>
  );
}
