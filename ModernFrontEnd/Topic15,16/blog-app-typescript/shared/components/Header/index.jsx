import { Badge, Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { ROUTER } from "../../constant/router";
import { useAppSelector } from "@/redux/store";
// import { useGlobalStore } from "../../store/global/GlobalProvider";
import { selFavorites } from "@/redux/global/globalSlice";
import { useRouter } from "next/router";

function Header() {
  const { push, asPath, query } = useRouter();

  const color = query?.color ?? "success";
  console.log("query", query);

  const favorites = useAppSelector(selFavorites);

  const isActive = (p) => (asPath == p ? "orange" : "white");

  const favCount = favorites?.length;

  return (
    <Box
      height="100px"
      p="12px"
      px={50}
      as="header"
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
          onClick={() => push(ROUTER.HOME)}
        >
          Home
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          color={isActive(ROUTER.ARTICLES)}
          as="li"
          onClick={() => push(ROUTER.ARTICLES)}
        >
          Articles
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive(ROUTER.ABOUT)}
          onClick={() => push(ROUTER.ABOUT)}
        >
          About
        </Button>
        <Button
          variant="ghost"
          cursor="pointer"
          as="li"
          color={isActive(ROUTER.FAV)}
          onClick={() => push(ROUTER.FAV)}
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
          onClick={() => push(ROUTER.FAQ)}
        >
          FAQ
        </Button>
      </Stack>

      <ButtonGroup>
        <Button onClick={() => push(ROUTER.ARTICLE_CREATE)} as="button">
          Create
        </Button>
        <Button
          colorScheme={color}
          onClick={() => push(ROUTER.SETTING)}
          as="button"
        >
          Setting
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default Header;
