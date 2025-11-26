import React from "react";

const ContactHero = ({ background, title, highlight, description }) => {
    return (
        <div
            className="h-[80vh] relative flex items-end justify-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <section className="relative z-10 text-white text-center px-4 max-w-3xl mb-40">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                    {title.split(highlight)[0]}
                    <br />
                    <span className="text-(--accent-color)">{highlight}</span>
                </h1>

                <p className="text-sm md:text-lg text-gray-200 leading-relaxed">
                    {description}
                </p>
            </section>
        </div>
    );
};

export default ContactHero;