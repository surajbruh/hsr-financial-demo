import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import LandingPage from "./components/Landing/LandingPage";
import AboutPage from "./components/About/AboutPage";
import ServicePage from "./components/Service/ServicePage";
import ContactPage from "./components/Contact/ConrtactPage";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <div className="relative">
      <Header />

      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
