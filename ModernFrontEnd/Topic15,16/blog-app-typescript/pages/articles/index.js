import { getBlogs } from "@/services/articles";
import BlogCard from "@/shared/components/BlogCard";
// import Header from "@/shared/components/Header";
import NavigationShow from "@/shared/components/NavigationShow";
// import SearchBox from "@/shared/components/SearchBox";
import { Box, SimpleGrid } from "@chakra-ui/react";
import axios from "axios";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = dynamic(() => import("@/shared/components/Header"), {
  ssr: false,
});

const SearchBox = dynamic(() => import("@/shared/components/SearchBox"), {
  ssr: false,
});

function Articles(props) {
  const [searchData, setSearchData] = useState();

  useEffect(() => {
    setSearchData(props?.data);
  }, [props]);

  const handleSearch = async (text) => {
    // const res =  await getBlogs({q:text})

    // setSearchData(res.data);

    if (!text.trim()) {
      setSearchData(data);
      return;
    }

    const filterData = searchData.filter((item) =>
      // item.title.toLowerCase().includes(text.toLowerCase())
      new RegExp(text, "i").test(item.title)
    );
    // new RegExp(/text/gui)

    setSearchData(filterData);
  };

  return (
    <>
      <Header />
      <Box as="section" px={50}>
        <NavigationShow />
        <SearchBox
          onFocus={() => setSearchData(props.data)}
          onSearch={handleSearch}
        />
      </Box>

      <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
        {searchData
          ?.filter((item, index) => item.id > 100)
          ?.map((item) => (
            <BlogCard
              key={"blog-id" + item.id}
              {...item}
              onReadMore={() => push("/articles/detail/" + item.id)}
            />
          ))}
      </SimpleGrid>
    </>
  );
}

export default Articles;

export async function getServerSideProps(context) {
  try {
    const res = await getBlogs();

    return {
      props: {
        data: res.data,
      },
    };
  } catch (err) {
    return {
      redirect: "/404",
    };
  }
}
