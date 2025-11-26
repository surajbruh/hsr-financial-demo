import React from "react";
import config from "../../config/index.json";

import LandingSection from "./LandingSection";
import LandingGrid from "../../components/LandingGrid/LandingGrid";
import JurisdictionSection from "../../components/Jurisdiction/JurisdictionSection";
import Testimonials from "../../components/Testimonials/Testimonials";
import StatsSection from "../StatsSection";
import ContactSection from "../Contact/ContactSection";

const LandingPage = () => {
    const hero = config.landingPage.hero;

    return (
        <main>
            <LandingSection />

            <JurisdictionSection />
            <Testimonials />
            <LandingGrid />
            <StatsSection />

            <div className="py-[5vw]">
                <ContactSection />
            </div>
        </main>
    );
};

export default LandingPage;
