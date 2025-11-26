import React from "react";
import StepsSection from "./StepsSection";

const locations = [
    "Dubai",
    "Abu Dhabi",
    "Sharjah",
    "Ras Al Khaimah"
];

const LandingSection = () => {
    return (
        <div
            className="relative min-h-[90vh] md:min-h-screen bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(/images/background2.jpg)` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main container */}
            <div className="relative z-10 w-full">
                <div className="mx-auto w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-7xl py-12 md:py-20">

                    {/* Landing heading + location buttons */}
                    <div className="flex flex-col gap-6 text-white mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            Business Setup Is <br /> Just The Beginning
                        </h1>

                        <div className="flex gap-4 flex-wrap">
                            {locations.map((name, i) => (
                                <button
                                    key={i}
                                    className="capitalize text-lg md:text-xl font-medium bg-white/10 px-4 py-2 rounded-md hover:bg-white/20 transition"
                                >
                                    {name}
                                </button>
                            ))}
                        </div>
                    </div>
                    <h1 className="text-white text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-medium text-center">
                        <strong>We make your corporate brand ideation</strong>
                    </h1>
                    {/* Steps Section */}
                    <StepsSection />

                </div>
            </div>
        </div>
    );
};

export default LandingSection;
