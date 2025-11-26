import React from "react";
import Carousel from "../components/Carousel";
import LandingGrid from "../components/LandingGrid/LandingGrid";
import Testimonials from "../components/Testimonials";
import StepSection from "../components/StepsSection";
import Slide2 from "../components/slides/Slide2";
import LandingSection from "../components/LandingSection";
import ContactSection from "../components/ContactSection";
import StatsSection from "../components/StatsSection";
import JurisdictionSection from "../components/JurisdictionSection";

const LandingPage = () => {
  return (
    <main className="bg-gray-50">
      {/* <Carousel /> */}
      {/* <Slide2 />
  {/* <Testimonials /> */}
      <LandingSection />
      <JurisdictionSection />
      <Testimonials />
      <LandingGrid />
      <StatsSection />
      <div className="py-[5vw]">
        <ContactSection />
      </div>
    </main >
  );
};

export default LandingPage;
