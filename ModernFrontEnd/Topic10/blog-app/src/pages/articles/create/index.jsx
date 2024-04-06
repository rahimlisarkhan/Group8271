import React from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  FormHelperText,
  FormLabel,
  Image,
  Input,
  Select,
  Text,
  Textarea,
} from "@chakra-ui/react";
import Header from "../../../components/Header";

function ArticleCreatePage() {
  return (
    <>
      <Header />
      <Box py={100} px={250}>
        <Text fontSize="6xl" align="center" fontWeight={600}>
          Create Your Blog
        </Text>

        <Box display="flex" flexDirection="column" my={10} gap={6}>
          <Image
            width={200}
            height={200}
            objectFit="cover"
            borderRadius={10}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfY64FmgMyoDjqvRuoz32rYEVB5puOZTO9QQmmDqd7Fg&s"
          />
          <FormControl>
            <FormLabel>Cover Url</FormLabel>
            <Input />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>
          <Divider />
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Description</FormLabel>
            <Textarea />
            {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
          </FormControl>

          <FormControl>
            <FormLabel>Category</FormLabel>
            <Select placeholder="Select category">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </FormControl>
          <Button colorScheme="teal" my={10}>
            Create blog
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default ArticleCreatePage;
