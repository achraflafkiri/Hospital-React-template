import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";


const App = () => {
  return (
    <Router>
       <Header />
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/service" element={<ServicesPage />} />
          {/* <Route path="/services" element={<ServicesPage />} /> */}
        </Routes>
       <Footer />
    </Router>
  );
};

export default App;
