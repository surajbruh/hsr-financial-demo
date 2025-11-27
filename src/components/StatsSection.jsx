import React from 'react'

const data = [
    { value: "12", label: "Years of Excellence" },
    { value: "40", label: "Global Awards" },
    { value: "120,000", label: "Active Clients" },
    { value: "220", label: "Skilled Professionals" },
    { value: "32", label: "Countries Served" },
    { value: "98%", label: "Service Success Rate" },
];

const awardDescription = [
    "Free Zone Industry Excellence Award 2016",
    "Most Innovative Business Setup Consultancy 2020",
    "Corporate Service Provider of the Year 2022",
    "Finalist SME of the Year 2016",
    "Certificate of Appreciation February 2020"
];

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
                    {data.map((item, i) => (
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
                    {awardDescription.map((desc, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="w-full h-20 flex items-center justify-center">
                                <img
                                    className="object-contain max-h-full"
                                    src={`/awards/award${index}.png`}
                                    alt={`Award received: ${desc}`}
                                    loading="lazy"
                                />
                            </div>
                            <p className="mt-3 text-xs sm:text-sm md:text-base leading-snug">
                                {desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}

export default StatsSection