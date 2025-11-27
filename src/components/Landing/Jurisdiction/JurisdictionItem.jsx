import React from 'react'

const Jurisdiction = ({ setupName, setupDescription, mainHeading, content, imageURL }) => {
    return (
        <article
            className="relative group bg-cover bg-center h-[70vh] overflow-hidden flex items-end"
            style={{ backgroundImage: `url(${imageURL})` }}
            aria-label={setupName}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(to top, rgba(32, 64, 155, 0.95), rgba(32, 64, 155, 0))"
                }}
            />

            <section className="relative z-10 text-white text-center space-y-4 p-4 max-h-[55vh] overflow-y-auto">
                <h3 className="uppercase font-semibold text-xl">
                    {setupName}
                </h3>

                <p className="text-sm sm:text-base leading-relaxed">
                    {setupDescription}
                </p>
            </section>

            <div
                className="absolute z-20 inset-0 bg-white flex flex-col items-center justify-center space-y-6 
            translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-out p-6"
            >
                <section className="text-center space-y-4 max-h-[55vh] overflow-y-auto px-2">
                    <h4 className="uppercase font-bold text-lg sm:text-xl text-[#1B2A4A]">
                        {mainHeading}
                    </h4>

                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                        {content}
                    </p>
                </section>

                <button>
                    <a
                        href="#"
                        className="bg-red-500 font-semibold text-white px-5 py-2 rounded-md hover:bg-red-600 transition"
                    >
                        Learn More
                    </a>
                </button>
            </div>
        </article>
    )
}

export default Jurisdiction