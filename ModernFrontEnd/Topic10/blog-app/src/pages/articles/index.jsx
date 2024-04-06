import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { getBlogs } from "../../services/articles";
import { useNavigate } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";
import Loading from "../../components/Loading";
import SearchBox from "../../components/SearchBox";
import { useTitle } from "../../hooks/useTitle";

function ArticlesPage() {
  const navigate = useNavigate();

  const [searchData, setSearchData] = useState();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogs(),
  });

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  useTitle(`Articles | Blog app`);

  // const [data, setData] = useState();
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true);
  //     try {
  //       const res = await getBlogs();
  //       setData(res.data);
  //     } catch (err) {
  //       setError(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  //   // (async function(){

  //   // })()
  // }, []);

  console.log("data", data);

  const handleSearch = (text) => {
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

  console.log("searchData", searchData);

  return (
    <>
      <Header />
      <Box px={50}>
        <NavigationShow />
        <SearchBox
          onFocus={() => setSearchData(data)}
          onSearch={handleSearch}
        />
      </Box>
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
          {searchData
            ?.filter((item, index) => item.id > 100)
            ?.map((item) => (
              <BlogCard
                key={"blog-id" + item.id}
                {...item}
                onReadMore={() => navigate("/articles/" + item.id)}
              />
            ))}
          {/* <BlogCard />
          <BlogCard /> */}
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticlesPage;
