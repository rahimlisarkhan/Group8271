import { selFavorites, toggleFavorite } from "@/redux/global/globalSlice";
import { getBlogId } from "@/services/articles";
import Header from "@/shared/components/Header";
import NavigationShow from "@/shared/components/NavigationShow";
import { convertTime } from "@/shared/utils/convertTime";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import { Box, Button, Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

function DetailBlog(props) {
  const articleItem = props.data;

  const favorites = useSelector(selFavorites);
  const dispatch = useDispatch();

  const isFav = favorites.find((item) => item.id == articleItem?.id);

  const handleToggleFav = async () => {
    const payload = { id: articleItem?.id, data: articleItem };
    dispatch(toggleFavorite(payload));
  };

  return (
    <>
      <Header />
      <NavigationShow routes={["Articles", articleItem?.title]} />

      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
        <Box>
          <Image src={articleItem?.cover_url} alt={articleItem?.title} />
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
    </>
  );
}

export default DetailBlog;

export async function getServerSideProps({ query }) {
  try {
    const res = await getBlogId(query.id);
    console.log(res.data);

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
