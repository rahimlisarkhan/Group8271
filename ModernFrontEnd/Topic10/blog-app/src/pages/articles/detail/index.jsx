import React from "react";
import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { getBlogId } from "../../../services/articles";

import { useFetchData } from "../../../hooks/useFetchData";
import Loading from "../../../components/Loading";
import { convertTime } from "../../../utils/convertTime";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
// import { useGlobalStore } from "../../../store/global/GlobalProvider";
import { TYPES } from "../../../store/global/types";
import NavigationShow from "../../../components/NavigationShow";
import { useTitle } from "../../../hooks/useTitle";

import {
  selFavorites,
  toggleFavorite,
} from "../../../redux/global/globalSlice";

import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";

function ArticleDetailPage() {
  const { id } = useParams();

  // const favorites = useSelector((state) => state.global.favorites);
  const favorites = useSelector(selFavorites);
  const dispatch = useDispatch();

  console.log("a", favorites);

  // const { state, dispatch } = useGlobalStore();

  const { data, isFetching } = useQuery({
    // queryKey: ["blog", id],
    queryKey: ["blog_detail"],
    queryFn: () => getBlogId(id),
    refetchInterval: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: true,
  });

  const articleItem = data?.data;

  console.log('"data', data);

  // const { data, loading } = useFetchData({
  //   requestFn: () => getBlogId(id),
  //   dependecy: [id],
  // });

  useTitle(`${articleItem?.title} | Blog app`);

  const isFav = favorites.find((item) => item.id == id);

  const handleToggleFav = async () => {
    const payload = { id, data };
    dispatch(toggleFavorite(payload));

    // if (isFav) {
    //   // await axios({method:"POST",url:"/favorite/add",data:{id}})
    //   //? remove
    //   const filterFav = favorites.filter((item) => item.id != id);

    //   dispatch({ type: TYPES.TOGGLE_FAV, payload: filterFav });
    //   return;
    // }

    // // await axios({method:"POST",url:"/favorite/delete",data:{id}})
    // //? add
    // dispatch({ type: TYPES.TOGGLE_FAV, payload: [...favorites, data] });
  };

  return (
    <>
      <Header />
      <NavigationShow routes={["Articles", articleItem?.title]} />
      {isFetching ? (
        <Loading />
      ) : (
        <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
          <Box>
            <Image src={articleItem?.cover_url} alt={data?.title} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="16px"
          >
            <Text bgClip="text" fontSize="md" fontWeight="medium" color="gray">
              {convertTime(parseInt(articleItem?.time || articleItem?.created))}
            </Text>
            <Text
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              color="black"
            >
              {articleItem?.title}
            </Text>

            <Text bgClip="text" fontSize="lg" fontWeight="medium" color="gray">
              {articleItem?.desc}
            </Text>
            <Button
              alignSelf="flex-start"
              leftIcon={isFav ? <MinusIcon /> : <AddIcon />}
              colorScheme={isFav ? "red" : "teal"}
              onClick={handleToggleFav}
            >
              {isFav ? "Remove" : "Add"} Favorite
            </Button>
          </Box>
        </SimpleGrid>
      )}
    </>
  );
}

export default ArticleDetailPage;
