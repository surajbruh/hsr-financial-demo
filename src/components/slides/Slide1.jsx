import React from 'react'
import config from "../../config/index.json"

const Slide1 = ({ imageURL }) => {
    return (
        <div
            className="relative bg-[url(/images/background.jpg)] bg-no-repeat bg-center bg-cover min-h-[80vh] md:min-h-screen flex items-center">
            <div className="w-full">
                <div className="mx-auto w-[90vw] md:w-[80vw]">
                    <div className="flex flex-col justify-center py-16 md:py-0">
                        {/* HERO HEADING */}
                        <section className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                            <h1 className="text-(--accent-color)">
                                <strong>Easy Steps</strong>
                            </h1>
                            <p>To Start Your Business in the UAE.</p>
                            <p className="text-white text-base sm:text-lg md:text-xl font-normal text-body max-w-[600px] mt-2">
                                {config.company.tagline}
                            </p>
                        </section>

                        {/* CTA BUTTON */}
                        <button className="uppercase font-bold bg-black text-white mt-8 md:mt-10 px-6 py-3 w-max tracking-wide">
                            start now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide1
