import React from "react";
import { Box, Heading, OrderedList, ListItem } from "@chakra-ui/react";

const AppInstructions = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={8}>
        App Instructions
      </Heading>

      <OrderedList spacing={4} fontSize="lg">
        <ListItem>Clone the repository and navigate to the project directory.</ListItem>
        <ListItem>
          Install the required dependencies by running <code>npm install</code>.
        </ListItem>
        <ListItem>
          Start the development server with <code>npm start</code>.
        </ListItem>
        <ListItem>
          Open the app in your browser at <code>http://localhost:3000</code>.
        </ListItem>
        <ListItem>Explore the different pages and features of the app.</ListItem>
        <ListItem>Customize the app by modifying the code files as needed.</ListItem>
        <ListItem>
          Build the production-ready app using <code>npm run build</code>.
        </ListItem>
        <ListItem>Deploy the app to a hosting platform of your choice.</ListItem>
      </OrderedList>
    </Box>
  );
};

export default AppInstructions;
