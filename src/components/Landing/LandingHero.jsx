import React from "react";

const LandingHero = ({ background, title, subButtons, mainHeading, subHeading }) => {
    return (
        <div
            className="relative bg-no-repeat bg-center bg-cover min-h-[80vh] md:min-h-screen flex items-center"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative z-10 w-full mx-auto px-6 md:px-10 lg:px-16">
                <div className="text-white space-y-6">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                        {title}
                    </h1>

                    <div className="flex flex-wrap gap-3 py-4">
                        {subButtons.map((btn, idx) => (
                            <button
                                key={idx}
                                className="capitalize bg-white/20 hover:bg-white/30 px-4 py-2 rounded-md transition text-sm sm:text-base"
                            >
                                {btn}
                            </button>
                        ))}
                    </div>

                    <div className="text-center space-y-2">
                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                            {mainHeading}
                        </h2>
                        <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">
                            {subHeading}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingHero;