import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Tnc from "./pages/Tnc";
import Notfound from "./pages/Notfound";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";

function App() {
  return (
    <Box>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" excat element={<Home />} />
          <Route path="/book" excat element={<Booking />} />
          <Route path="/blogs" excat element={<Blogs />} />
          <Route path="/contact" excat element={<Contact />} />
          <Route path="/tnc" excat element={<Tnc />} />
          <Route path="*" excat element={<Notfound />} />
        </Routes>
        <Footer />
      </Router>
    </Box>
  );
}

export default App;
