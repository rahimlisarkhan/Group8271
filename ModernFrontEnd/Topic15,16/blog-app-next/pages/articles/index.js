import { getBlogs } from "@/services/articles";
import BlogCard from "@/shared/components/BlogCard";
// import Header from "@/shared/components/Header";
import NavigationShow from "@/shared/components/NavigationShow";
// import SearchBox from "@/shared/components/SearchBox";
import { Box, SimpleGrid } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

const Header = dynamic(() => import("@/shared/components/Header"), {
  ssr: false,
});

const SearchBox = dynamic(() => import("@/shared/components/SearchBox"), {
  ssr: false,
});

function Articles(props) {
  console.log(props);

  return (
    <>
      <Header />
      <Box as="section" px={50}>
        <NavigationShow />
        <SearchBox
        //   onFocus={() => setSearchData(data)}
        //   onSearch={handleSearch}
        />
      </Box>

      <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
        {props.data
          ?.filter((item, index) => item.id > 100)
          ?.map((item) => (
            <BlogCard
              key={"blog-id" + item.id}
              {...item}
              onReadMore={() => navigate("/articles/" + item.id)}
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
