import React from 'react'
import config from "../config/index.json"

const StatsSection = () => {
    return (
        <section aria-labelledby="company-stats-heading" className="relative py-16 bg-[url(/meeting.jpg)] bg-cover bg-center min-h-[60vh] flex items-center" >
            <h2 id="company-stats-heading" className="sr-only">
                Company Achievements and Statistics
            </h2>

            <div className="absolute inset-0 bg-black/70" />

            <div className="relative z-10 max-w-6xl mx-auto px-4 text-white">

                {/* Stats Grid */}
                <div
                    className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center"
                    aria-label="Company performance statistics"
                >
                    {config.statsSection.data.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="text-3xl md:text-4xl lg:text-5xl font-bold">
                                {item.value}
                            </div>
                            <p className="mt-2 text-sm md:text-base">{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Awards Grid */}
                <div
                    className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-white text-center"
                    aria-label="Awards and recognitions"
                >
                    {config.statsSection.awards.map((awardItem, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full h-20 flex items-center justify-center">
                                <img
                                    className="object-contain max-h-full"
                                    src={awardItem.awardImageURL}
                                    alt={`Award received: ${awardItem.description}`}
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-3 text-xs sm:text-sm md:text-base leading-snug">
                                {awardItem.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default StatsSection