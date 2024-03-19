import React from "react";
import { Box, Button, Flex, FormControl, FormLabel, Heading, Icon, Input, Text } from "@chakra-ui/react";
import { FaUser, FaEnvelope } from "react-icons/fa";

const Profile = () => {
  return (
    <Box>
      <Heading as="h2" size="2xl" mb={8}>
        Profile
      </Heading>

      <Flex direction={["column", "row"]} align="start" mb={12}>
        <Box flex={1} mr={[0, 12]} mb={[8, 0]}>
          <Heading as="h3" size="xl" mb={6}>
            User Information
          </Heading>
          <FormControl mb={6}>
            <FormLabel fontSize="lg">
              <Flex align="center">
                <Icon as={FaUser} mr={2} /> Name
              </Flex>
            </FormLabel>
            <Input type="text" value="John Doe" size="lg" />
          </FormControl>
          <FormControl mb={6}>
            <FormLabel fontSize="lg">
              <Flex align="center">
                <Icon as={FaEnvelope} mr={2} /> Email
              </Flex>
            </FormLabel>
            <Input type="email" value="johndoe@email.com" size="lg" />
          </FormControl>
          <Button colorScheme="brand" size="lg">
            Update Info
          </Button>
        </Box>

        <Box flex={1}>
          <Heading as="h3" size="xl" mb={6}>
            Current Sizes
          </Heading>
          <Text fontSize="lg" mb={2}>
            T-Shirt: Medium
          </Text>
          <Text fontSize="lg" mb={2}>
            Jeans: 32x32
          </Text>
          <Text fontSize="lg" mb={2}>
            Shoes: 10
          </Text>
          <Text fontSize="lg">Jacket: Large</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Profile;
