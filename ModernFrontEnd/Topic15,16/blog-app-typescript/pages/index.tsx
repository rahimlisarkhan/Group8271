// import Image from "next/image";
import MetaSeo from "@/shared/components/MetaSeo";

import { Box, Text, Button, SimpleGrid } from "@chakra-ui/react";

import Header from "@/shared/components/Header";
import { useRouter } from "next/router";
import { ROUTER } from "@/shared/constant/router";
import { useState } from "react";
import { BlogType } from "@/interface/data";
import { useFetchData } from "@/shared/hooks/useFetchData";
import { getBlogs } from "@/services/articles";
import BlogCard from "@/shared/components/BlogCard";

type B = Partial<BlogType>;

export default function Home() {
  const { push } = useRouter();

  const [show, setShow] = useState<boolean>(false);
  const [articles, setArticles] = useState<[] | BlogType[]>([]);

  const a = useFetchData<BlogsType[]>({ requestFn: getBlogs });

  const handleCreateUser = () => {
    setShow(false);
  };

  return (
    <>
      <Header />
      <MetaSeo title="Home" description={"Lorem"} />
      <SimpleGrid bg="gray.50" columns={{ sm: 2 }} spacing="2" p="10">
        {/* <BlogCard /> */}
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          as="main"
          gap="16px"
        >
          <Text
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            color="black"
            as="h2"
          >
            Welcome to Articles Devil
          </Text>

          <Text
            bgClip="text"
            as="p"
            fontSize="2xl"
            fontWeight="medium"
            color="black"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam quos
            maiores eos impedit praesentium fuga quasi libero ducimus repellat
            doloremque earum rerum, ullam tempora exercitationem a ad, voluptas,
            rem tenetur.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            alignSelf="flex-start"
            onClick={() => push(ROUTER.ARTICLE_CREATE)}
          >
            Get started
          </Button>
          <Button colorScheme="red" onClick={handleCreateUser}>
            Create
          </Button>
        </Box>
        <Box>
          <img
            width={300}
            height={300}
            className="w-full"
            src="https://cdni.iconscout.com/illustration/premium/thumb/blog-writer-working-on-article-5691583-4759515.png"
          />
        </Box>
      </SimpleGrid>
    </>
  );
}
