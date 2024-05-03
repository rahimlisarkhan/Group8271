import {
  Card,
  CardBody,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
  Image,
} from "@chakra-ui/react";
import React, { PropsWithChildren } from "react";
import { shortText } from "../../utils/shortText";
import { categories } from "../../constant/categories";
import { BlogType } from "@/interface/data";
// import Image from "next/image";

interface Props extends BlogType {
  onReadMore: () => void;
}

// const BlogCard: React.FC<PropsWithChildren<Props>> = ({
const BlogCard: React.FC<Props> = ({
  title,
  cover_url,
  desc,
  onReadMore,
  category,
}) => {
  const blogCategory = categories?.find((item) => item.id == category);

  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      // color="xususisari.700"
    >
      <Image
        width={200}
        height={200}
        className="object-cover w-full"
        src={cover_url}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="sm" color="teal">
            Category: {blogCategory?.title}
          </Heading>
          <Heading size="md" py="2">
            {title}
          </Heading>
          <Text>{shortText(desc, 80)}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal" onClick={onReadMore}>
            Read more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default BlogCard;

// "Lorem ipsum lore lorem"
// shortText("Lorem ipsum lore lorem",20) // "Lorem ipsum ..."
