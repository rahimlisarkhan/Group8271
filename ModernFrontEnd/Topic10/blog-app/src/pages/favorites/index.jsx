import { Box, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header";
import BlogCard from "../../components/BlogCard";
import NavigationShow from "../../components/NavigationShow";
import { useNavigate } from "react-router-dom";
import { useGlobalStore } from "../../store/global/GlobalProvider";
import { useTitle } from "../../hooks/useTitle";

function FavPage() {
  const navigate = useNavigate();

  useTitle("Favorites | Blog app");

  const {
    state: { favorites },
  } = useGlobalStore();

  return (
    <>
      <Header />
      <Box px={50}>
        <NavigationShow routes={["Favorites"]} />
      </Box>
      <SimpleGrid columns={{ sm: 2 }} p="20" spacing="10">
        {favorites
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
    </>
  );
}

export default FavPage;
