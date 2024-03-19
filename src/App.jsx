import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Profile from "./pages/Profile.jsx";
import Models from "./pages/Models.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </Router>
  );
}

export default App;
