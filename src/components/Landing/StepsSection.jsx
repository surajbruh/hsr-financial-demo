import React, { useState } from "react";

const StepSection = ({ steps }) => {
    const [active, setActive] = useState(0); // default = 6th step (index 5)

    return (
        <div
            className="relative bg-cover bg-center px-4 py-16 md:px-12"
            style={{
                backgroundImage: `url(/your-background.jpg)`,
            }}
        >
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT SIDE LIST */}
                <div className="space-y-6">
                    {steps.map((step, index) => (
                        <p
                            key={index}
                            onClick={() => setActive(index)}
                            className={`cursor-pointer text-lg md:text-xl transition font-medium px-4
                ${active === index
                                    ? "text-red-500 border-red-500 border-l-4"
                                    : "text-gray-300 hover:text-white/80"
                                }
              `}
                        >
                            {step}
                        </p>
                    ))}
                </div>

                {/* RIGHT SIDE CARD */}
                <div className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl max-w-xl">
                    <div className="flex items-start gap-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-red-500">
                            {active + 1}
                        </h1>
                        <h2 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                            {steps[active]}
                        </h2>
                    </div>

                    <p className="mt-6 text-gray-200 leading-relaxed">
                        A corporate bank account is necessary to conduct business in the UAE.
                        You can choose from several national, international, and digital banks,
                        depending on your financial requirements. Our team of experts will help
                        you determine the best bank for your needs and prepare the requirements
                        for submission to the bank.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default StepSection;
