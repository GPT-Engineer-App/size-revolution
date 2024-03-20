import { Box, Container } from "@chakra-ui/react";
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

export default App;
