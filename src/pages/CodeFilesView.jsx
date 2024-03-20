import React from "react";
import { Box, Code, Heading } from "@chakra-ui/react";

const CodeFilesView = () => {
  return (
    <Box>
      <Heading as="h2" size="xl" mb={8}>
        Code Files
      </Heading>

      <Heading as="h3" size="lg" mb={4}>
        App.jsx
      </Heading>
      <Code p={4} mb={8} borderRadius="md" backgroundColor="gray.100">
        {`import { Box, Container } from "@chakra-ui/react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Models from "./pages/Models.jsx";
import Navigation from "./components/Navigation.jsx";
import CodeFilesView from "./pages/CodeFilesView.jsx";
import AppInstructions from "./pages/AppInstructions.jsx";

function App() {
  return (
    <Box bg="gray.100" minH="100vh">
      <Router>
        <Navigation />
        <Container maxW="container.lg" py={8}>
          <Routes>
            <Route exact path="/" element={<Index />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/models" element={<Models />} />
            <Route path="/code" element={<CodeFilesView />} />
            <Route path="/instructions" element={<AppInstructions />} />
          </Routes>
        </Container>
      </Router>
    </Box>
  );
}

export default App;`}
      </Code>

      <Heading as="h3" size="lg" mb={4}>
        Navigation.jsx
      </Heading>
      <Code p={4} mb={8} borderRadius="md" backgroundColor="gray.100">
        {`import React from "react";
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

export default Navigation;`}
      </Code>

      {}
    </Box>
  );
};

export default CodeFilesView;
