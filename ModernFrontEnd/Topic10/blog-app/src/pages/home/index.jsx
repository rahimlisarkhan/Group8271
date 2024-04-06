import React from "react";
import { Box, Text, Button, Image, SimpleGrid } from "@chakra-ui/react";
import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { useTitle } from "../../hooks/useTitle";

function HomePage() {
  const navigate = useNavigate();

  useTitle("Home | Blog app");

  return (
    <>
      <Header />
      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          gap="16px"
        >
          <Text
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            color="black"
          >
            Welcome to Articles Devil
          </Text>

          <Text bgClip="text" fontSize="2xl" fontWeight="medium" color="black">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quos
            maiores eos impedit praesentium fuga quasi libero ducimus repellat
            doloremque earum rerum, ullam tempora exercitationem a ad, voluptas,
            rem tenetur.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            alignSelf="flex-start"
            onClick={() => navigate(ROUTER.ARTICLE_CREATE)}
          >
            Get started
          </Button>
        </Box>
        <Box>
          <Image src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png" />
        </Box>
      </SimpleGrid>
    </>
  );
}

export default HomePage;
