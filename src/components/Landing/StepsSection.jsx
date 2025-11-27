import React, { useState } from "react";

const StepSection = ({ steps }) => {
    const [active, setActive] = useState(0);

    return (
        <section
            aria-labelledby="steps-heading"
            className="relative bg-cover bg-center px-4 py-16 md:px-12"
            style={{
                backgroundImage: `url(/your-background.jpg)`,
            }}
        >
            <h2 id="steps-heading" className="sr-only">Business Setup Steps</h2>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                <aside className="space-y-6" aria-label="Setup Steps Navigation">
                    {steps.map((step, index) => (
                        <button
                            key={index}
                            onClick={() => setActive(index)}
                            aria-current={active === index ? "step" : false}
                            className={`cursor-pointer text-left block w-full text-lg md:text-xl transition font-medium px-4
            ${active === index
                                    ? "text-red-500 border-red-500 border-l-4"
                                    : "text-gray-300 hover:text-white/80"
                                }
          `}
                        >
                            {step}
                        </button>
                    ))}
                </aside>

                <article className="backdrop-blur-sm bg-white/10 border border-white/30 rounded-3xl p-8 md:p-12 shadow-xl max-w-xl">
                    <div className="flex items-start gap-4">
                        <span className="text-5xl md:text-6xl font-bold text-red-500">
                            {active + 1}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-semibold text-white leading-snug">
                            {steps[active]}
                        </h3>
                    </div>

                    <p className="mt-6 text-gray-200 leading-relaxed">
                        A corporate bank account is essential for doing business in the UAE.
                        Our experts help you choose the right bank and prepare all requirements.
                    </p>
                </article>
            </div>
        </section>
    );


};

export default StepSection;