import React from "react";
import config from "../../config/index.json";

import ContactHero from "./ContactHero";
import ContactHeader from "./ContactHeader";

import ContactSection from "./ContactSection";
import EmbeddedMap from "./EmbeddedMap";

const ContactPage = () => {
    const page = config.contactPage;

    return (
        <div>
            {/* HERO */}
            <ContactHero
                background={page.hero.backgroundImage}
                title={page.hero.title}
                highlight={page.hero.highlight}
                description={page.hero.description}
            />

            {/* CONTACT HEADER + FORM */}
            <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    <ContactHeader subtitle={page.contactHeader.subtitle} title={page.contactHeader.title} />

                    <div className="w-full">
                        <ContactSection />
                    </div>
                </div>
            </section>

            {/* MAP */}
            <EmbeddedMap />
        </div>
    );
};

export default ContactPage;
