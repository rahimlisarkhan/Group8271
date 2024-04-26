import { Box, Button, Input } from "@chakra-ui/react";
import React, { useState } from "react";

function SearchBox({ onFocus, onSearch }) {
  const [search, setSearch] = useState("");

  const handleSubmit = () => {
    onSearch(search);
  };

  return (
    <Box display="flex" alignItems="center" gap={4}>
      <Input
        value={search}
        placeholder="Search"
        onFocus={onFocus}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleSubmit}>
        Search
      </Button>
    </Box>
  );
}

export default SearchBox;
