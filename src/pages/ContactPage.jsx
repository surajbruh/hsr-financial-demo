import React from 'react'
import ContactSection from "../components/ContactSection";
import EmbeddedMap from "../components/EmbeddedMap"
import PageBanner from '../components/PageBanner';

const ContactPage = () => {
    return (
        <div>
            {/* <PageBanner page={"contact"} /> */}
            <div
                className="h-[80vh] relative flex items-end justify-center"
                style={{
                    backgroundImage: `url(/contact-bg.jpg)`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Content */}
                <section className="relative z-10 text-white text-center px-4 max-w-3xl mb-40">
                    <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                        Talk to Our <br /> <span className='text-(--accent-color)'>Business Setup Advisors</span>
                    </h1>

                    <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                        We know that there are hefty processes you want to avoid. Don’t worry!
                        We’re here to give you and your venture a promising head start.
                    </p>
                </section>
            </div>

            <section className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20">

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
