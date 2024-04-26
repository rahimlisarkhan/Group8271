import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
// import { Inter, Poppins } from "next/font/google";

// const popins = Poppins({ subsets: ["latin"], weight: [300, 400, 600] });

export default function Home({ data }) {
  // const [data, setData] = useState();

  // useEffect(() => {
  //   //? Client Side
  //   (async () => {
  //     const res = await fetch("https://blog-api-t6u0.onrender.com/posts");
  //     const articles = await res.json();

  //     setData(articles);

  //     console.log("data", data);
  //   })();
  // });

  return (
    <div>
      <Head>
        <meta />
        <title>Home</title>
      </Head>
      <h1>Home</h1>
      <img src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg" />
      <Image
        width={300}
        height={300}
        src="https://kidlingoo.com/wp-content/uploads/flowers_name_in_english.jpg"
      />

      <Image width={300} height={300} src="/flower.jpeg" />

      <ul>
        {data?.map((item) => (
          <li key={item?.id}>{item?.title}</li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps(context) {
  const res = await fetch("https://blog-api-t6u0.onrender.com/posts");
  const articles = await res.json();

  console.log("-----------");
  console.log("articles", articles);
  console.log("-----------");

  return {
    props: {
      data: articles,
    },
  };
}
