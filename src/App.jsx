import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Import Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import Pages
import Home from "./pages/Home";
import Header from "./components/Header";

const App = () => {
  return (
    <Router>
       <Header />
       <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
       <Footer />
    </Router>
  );
};

export default App;
