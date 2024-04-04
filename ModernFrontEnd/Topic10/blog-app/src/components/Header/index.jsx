import { Badge, Box, Button, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { useGlobalStore } from "../../store/global/GlobalProvider";

function Header() {
  const navigate = useNavigate();

  const { state } = useGlobalStore();

  const favCount = state.favorites?.length;

  return (
    <Box
      height="100px"
      p="12px"
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="teal"
    >
      <Text as="h1" fontSize="4xl" color="white">
        Blog
      </Text>

      <Stack direction="row" spacing={4} align="center" as="ul">
        <Button
          variant="ghost"
          color="white"
          as="li"
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          color="white"
          as="li"
          onClick={() => navigate(ROUTER.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          variant="ghost"
          as="li"
          color="white"
          onClick={() => navigate(ROUTER.ABOUT)}
        >
          About
        </Button>
        <Button
          variant="ghost"
          as="li"
          color="white"
          onClick={() => navigate(ROUTER.FAV)}
        >
          Favorites
          {!!favCount && (
            <Badge variant="solid" colorScheme="red">
              {favCount}
            </Badge>
          )}
        </Button>
        <Button
          variant="ghost"
          color="white"
          as="li"
          onClick={() => navigate(ROUTER.FAQ)}
        >
          FAQ
        </Button>
        <Button onClick={() => navigate(ROUTER.ARTICLE_CREATE)} as="li">
          Create your article
        </Button>
      </Stack>
    </Box>
  );
}

export default Header;
