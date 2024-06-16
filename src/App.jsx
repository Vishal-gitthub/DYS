import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "./index.css";
import { Routes, Route } from "react-router-dom";
import RequestFormPage from "./Components/RequestFormPage";
import Footer from "./Components/Footer";
import About from "./Components/About";
import ChooseUs from "./Components/ChooseUs";
import Services from "./Components/Services";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/RequestPage" element={<RequestFormPage />} />
        <Route path="/aboutUs" element={<About />} />
        <Route path="/chooseus" element={<ChooseUs />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
