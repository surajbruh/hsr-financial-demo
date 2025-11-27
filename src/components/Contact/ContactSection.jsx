import React from 'react';
import Form from './Form';

import config from "../../config/index.json"

const ContactSection = ({ imageURL }) => {

    return (
        <section
            aria-labelledby="contact-title"
            role="region"
            className="flex items-center justify-center p-4"
        >
            <div className="bg-white shadow-xl overflow-hidden w-full max-w-6xl flex flex-col md:flex-row">

                {/* Left: Image */}
                <figure className="w-full md:w-1/2 h-64 md:h-auto relative">
                    <img
                        src={config.contactPage.form.imageURL}
                        alt="Professional business team working in an office"
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </figure>

                {/* Right: Form */}
                <div className="w-full md:w-1/2 p-8 md:p-12 lg:p-16 relative">
                    <h2
                        id="contact-title"
                        className="capitalize text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-4"
                    >
                        Get In Touch
                    </h2>

                    <Form />
                </div>
            </div>
        </section>
    );
};

export default ContactSection;