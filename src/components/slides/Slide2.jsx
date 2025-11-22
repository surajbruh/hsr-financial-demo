import React from 'react'
import config from "../../config/index.json"

const Slide2 = () => {
    return (
        <div
            className="relative bg-[url(/images/background2.jpg)] bg-no-repeat bg-center bg-cover min-h-[70vh] md:min-h-screen flex items-center">
            <div className="w-full">
                <div className="mx-auto w-[90vw] md:w-[80vw]">
                    <div className="flex flex-col justify-center py-16 md:py-0">
                        {/* HERO HEADING */}
                        <section className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-center">
                            <h1 className="text-white">
                                <strong>We make your corporate brand ideation</strong>
                            </h1>
                            <p className='text-white'>To Start Your Business in the UAE.</p>
                            <p className="bg-black p-2 text-white text-base sm:text-lg md:text-xl font-normal text-body mx-auto w-max max-w-[600px] mt-2">
                                Unlocking performance excellence for thriving work forces for generations.
                            </p>
                        </section>

                        {/* CTA BUTTON */}
                        <button className="uppercase font-bold bg-white text-black text-3xl mt-8 md:mt-10 px-6 py-3 w-max mx-auto tracking-wide">
                            start now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slide2
