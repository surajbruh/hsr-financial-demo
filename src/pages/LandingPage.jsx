import React from "react";
import Carousel from "../components/Carousel";
import LandingGrid from "../components/LandingGrid/LandingGrid";

const LandingPage = () => {
  return (
    <main className="bg-gray-50">
      <Carousel />
      <LandingGrid />
    </main>
  );
};

export default LandingPage;
