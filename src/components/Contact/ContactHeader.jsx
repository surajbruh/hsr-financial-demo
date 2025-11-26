import React from "react";

const ContactHeader = ({ subtitle, title }) => {
    return (
        <div className="tracking-tight leading-tight mb-8 sm:mb-12 md:mb-10">
            <p className="uppercase font-medium text-(--accent-color) text-center text-sm sm:text-base">
                {subtitle}
            </p>

            <h1 className="capitalize text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
                {title}
            </h1>
        </div>
    );
};

export default ContactHeader;