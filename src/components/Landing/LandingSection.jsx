import React from "react";
import StepsSection from "./StepsSection";
import config from "../../config/index.json"

const LandingSection = () => {
    return (
        <div
            className="relative min-h-[90vh] md:min-h-screen bg-fixed bg-cover bg-center bg-no-repeat flex items-center"
            style={{ backgroundImage: `url(${config.landingPage.hero.backgroundImage})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Main container */}
            <div className="relative z-10 w-full">
                <div className="mx-auto w-[90vw] md:w-[85vw] lg:w-[80vw] max-w-7xl py-12 md:py-20">

                    {/* Landing heading + location buttons */}
                    <div className="flex flex-col gap-6 text-white mb-12">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                            {config.landingPage.hero.title}
                        </h1>

                        <div className="flex gap-4 flex-wrap">
                            {config.landingPage.hero.subButtons.map((name, i) => (
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
                        <strong>{config.landingPage.hero.mainHeading}</strong>
                    </h1>
                    {/* Steps Section */}
                    <StepsSection steps={config.landingPage.stepsSection.steps} />
                </div>
            </div>
        </div>
    );
};

export default LandingSection;
