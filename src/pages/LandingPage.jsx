import React from "react";
import Carousel from "../components/Carousel";
import LandingGrid from "../components/LandingGrid/LandingGrid";
import Testimonials from "../components/Testimonials";

const LandingPage = () => {
  return (
    <main className="bg-gray-50">
      <Carousel />
      <LandingGrid />
      {/* Testimonials */}
      <Testimonials />
    </main >
  );
};

export default LandingPage;
