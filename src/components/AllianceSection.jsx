import React from 'react'

const AllianceSection = ({ backgroundImage, heading, paragraphs }) => {
    return (
        <div
            className="relative w-full py-24"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content container */}
            <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-10">
                <section className="text-white text-center w-full max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        {heading}
                    </h1>
                    {
                        paragraphs.map((desc, index) => (
                            <p
                                key={index}
                                className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">{desc}</p>
                        ))
                    }
                </section>
            </div>
        </div>
    )
}

export default AllianceSection
