import React from "react";
import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import Header from "../../../components/Header";
import { useParams } from "react-router-dom";
import { getBlogId } from "../../../services/articles";

import { useFetchData } from "../../../hooks/useFetchData";
import Loading from "../../../components/Loading";
import { convertTime } from "../../../utils/convertTime";

import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { useGlobalStore } from "../../../store/global/GlobalProvider";
import { TYPES } from "../../../store/global/types";
import NavigationShow from "../../../components/NavigationShow";
import { useTitle } from "../../../hooks/useTitle";

function ArticleDetailPage() {
  const { id } = useParams();

  const { state, dispatch } = useGlobalStore();

  const { data, loading } = useFetchData({
    requestFn: () => getBlogId(id),
    dependecy: [id],
  });

  useTitle(`${data?.title} | Blog app`);

  const isFav = state.favorites.find((item) => item.id == id);

  const handleToggleFav = async () => {
    if (isFav) {
      // await axios({method:"POST",url:"/favorite/add",data:{id}})
      //? remove
      const filterFav = state.favorites.filter((item) => item.id != id);

      dispatch({ type: TYPES.TOGGLE_FAV, payload: filterFav });
      return;
    }

    // await axios({method:"POST",url:"/favorite/delete",data:{id}})
    //? add
    dispatch({ type: TYPES.TOGGLE_FAV, payload: [...state.favorites, data] });
  };

  return (
    <>
      <Header />
      <NavigationShow routes={["Articles", data?.title]} />
      {loading ? (
        <Loading />
      ) : (
        <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
          <Box>
            <Image src={data?.cover_url} alt={data?.title} />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="flex-start"
            gap="16px"
          >
            <Text bgClip="text" fontSize="md" fontWeight="medium" color="gray">
              {convertTime(parseInt(data?.time))}
            </Text>
            <Text
              bgClip="text"
              fontSize="2xl"
              fontWeight="extrabold"
              color="black"
            >
              {data?.title}
            </Text>

            <Text bgClip="text" fontSize="lg" fontWeight="medium" color="gray">
              {data?.desc}
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
