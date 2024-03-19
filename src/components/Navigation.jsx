import React from "react";
import { Box, Container, Flex, Heading, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" color="brand.500">
            MySize
          </Heading>
          <Flex>
            <Link as={RouterLink} to="/" mx={4} fontWeight="medium" _hover={{ color: "brand.600" }}>
              Home
            </Link>
            <Link as={RouterLink} to="/profile" mx={4} fontWeight="medium" _hover={{ color: "brand.600" }}>
              Profile
            </Link>
            <Link as={RouterLink} to="/models" mx={4} fontWeight="medium" _hover={{ color: "brand.600" }}>
              3D Models
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
