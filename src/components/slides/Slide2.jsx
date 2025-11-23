import React from 'react'

const Slide2 = () => {
    return (
        <div className="relative bg-[url(/images/background2.jpg)] bg-no-repeat bg-center bg-cover min-h-[70vh] md:min-h-screen flex items-center">
            {/* Optional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative w-full z-10">
                <div className="mx-auto w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-7xl">
                    <div className="flex flex-col justify-center py-12 sm:py-16 md:py-20 lg:py-0">
                        {/* HERO HEADING */}
                        <section className="text-center">
                            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                                <strong>We make your corporate brand ideation</strong>
                            </h1>

                            <p className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                                To Start Your Business in the UAE.
                            </p>

                            <div className="flex justify-center px-4">
                                <p className="bg-black/80 backdrop-blur-sm p-3 sm:p-4 md:p-5 text-white text-sm sm:text-base md:text-lg lg:text-xl font-normal max-w-[90vw] sm:max-w-[600px] md:max-w-[700px] mt-2">
                                    Unlocking performance excellence for thriving work forces for generations.
                                </p>
                            </div>
                        </section>

                        {/* CTA BUTTON */}
                        <div className="flex justify-center mt-8 sm:mt-10 md:mt-12 lg:mt-14 px-4">
                            <button className="uppercase font-bold bg-white text-black text-lg sm:text-xl md:text-2xl lg:text-3xl px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 tracking-wide hover:bg-gray-100 transition-colors duration-300 shadow-lg">
                                start now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2