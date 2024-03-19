import React from "react";
import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" py={4}>
      <Flex justify="center">
        <Link as={RouterLink} to="/" mx={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/profile" mx={4}>
          Profile
        </Link>
        <Link as={RouterLink} to="/models" mx={4}>
          3D Models
        </Link>
      </Flex>
    </Box>
  );
};

export default Navigation;
