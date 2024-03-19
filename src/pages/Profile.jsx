import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";

const Profile = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={4}>
        Profile
      </Heading>
      <Text>Manage your clothing sizes and customize your public profile here.</Text>
    </Box>
  );
};

export default Profile;
