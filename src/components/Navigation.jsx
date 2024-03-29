import React from "react";
import { Box, Container, Flex, Heading, Icon, Link } from "@chakra-ui/react";
import { FaHome, FaUser, FaCube, FaCode, FaBook } from "react-icons/fa";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="white" py={4} boxShadow="md">
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center">
          <Heading as="h1" size="lg" color="brand.500">
            MySize
          </Heading>
          <Flex align="center">
            <Link as={RouterLink} to="/" mr={8} fontWeight="medium" fontSize="lg" _hover={{ color: "brand.600" }}>
              <Icon as={FaHome} mr={2} />
              Home
            </Link>
            <Link as={RouterLink} to="/profile" mr={8} fontWeight="medium" fontSize="lg" _hover={{ color: "brand.600" }}>
              <Icon as={FaUser} mr={2} />
              Profile
            </Link>
            <Link as={RouterLink} to="/models" mr={8} fontWeight="medium" fontSize="lg" _hover={{ color: "brand.600" }}>
              <Icon as={FaCube} mr={2} />
              3D Models
            </Link>
            <Link as={RouterLink} to="/code" mr={8} fontWeight="medium" fontSize="lg" _hover={{ color: "brand.600" }}>
              <Icon as={FaCode} mr={2} />
              Code Files
            </Link>
            <Link as={RouterLink} to="/instructions" fontWeight="medium" fontSize="lg" _hover={{ color: "brand.600" }}>
              <Icon as={FaBook} mr={2} />
              Instructions
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Navigation;
