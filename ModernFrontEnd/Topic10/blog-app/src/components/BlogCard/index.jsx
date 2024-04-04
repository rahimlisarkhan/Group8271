import {
  Card,
  CardBody,
  Image,
  Stack,
  Text,
  Heading,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { shortText } from "../../utils/shortText";

function BlogCard({ title, cover_url, desc, onReadMore }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      // color="xususisari.700"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src={cover_url}
        alt={title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{title}</Heading>
          <Text py="2">{shortText(desc, 80)}</Text>
        </CardBody>

        <CardFooter>
          <Button variant="solid" colorScheme="teal" onClick={onReadMore}>
            Read more
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}

export default BlogCard;

// "Lorem ipsum lore lorem"
// shortText("Lorem ipsum lore lorem",20) // "Lorem ipsum ..."
