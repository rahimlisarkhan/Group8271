import { Badge, Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ROUTER } from "../../constant/router";
import { useGlobalStore } from "../../store/global/GlobalProvider";

function Header() {
  const navigate = useNavigate();

  const { state } = useGlobalStore();

  const { pathname } = useLocation();

  const isActive = (p) => (pathname == p ? "orange" : "white");

  const favCount = state.favorites?.length;

  return (
    <Box
      height="100px"
      p="12px"
      px={50}
      alignItems="center"
      display="flex"
      justifyContent="space-between"
      backgroundColor="teal"
    >
      <Text as="h1" fontSize="4xl" color="white" fontWeight={600}>
        Devil
      </Text>

      <Stack direction="row" spacing={4} align="center" as="ul">
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.HOME)}
          as="li"
          onClick={() => navigate(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.ARTICLES)}
          as="li"
          onClick={() => navigate(ROUTER.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive(ROUTER.ABOUT)}
          onClick={() => navigate(ROUTER.ABOUT)}
        >
          About
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive(ROUTER.FAV)}
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
          cursor="pointer"
          color={isActive(ROUTER.FAQ)}
          as="li"
          onClick={() => navigate(ROUTER.FAQ)}
        >
          FAQ
        </Button>
      </Stack>

      <ButtonGroup>
        <Button onClick={() => navigate(ROUTER.ARTICLE_CREATE)} as="button">
          Create
        </Button>
        <Button onClick={() => navigate(ROUTER.SETTING)} as="button">
          Setting
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Header;
