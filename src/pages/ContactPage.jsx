import React from 'react'
import ContactSection from "../components/ContactSection";
import EmbeddedMap from "../components/EmbeddedMap"
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
    return (
        <div>
            <PageBanner page={"contact"} />
            <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="tracking-tight leading-tight mb-8 sm:mb-12 md:mb-10">
                        <p className="uppercase font-medium text-(--accent-color) text-center text-sm sm:text-base">
                            contact us
                        </p>
                        <h1 className="capitalize text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                            let's get started
                        </h1>
                    </div>
                    <div className="w-full">
                        <ContactSection />
                    </div>
                </div>
            </section>
            <EmbeddedMap />
        </div>
    )
}

export default ContactPage
