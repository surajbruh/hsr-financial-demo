import React from "react";
import config from "../config/index.json"

const data = [
    { value: "12", label: "Years of Excellence" },
    { value: "40", label: "Global Awards" },
    { value: "120,000", label: "Active Clients" },
    { value: "220", label: "Skilled Professionals" },
    { value: "32", label: "Countries Served" },
    { value: "98%", label: "Service Success Rate" },
];

const AboutPage = () => {
    // local uploaded image path (used for banner + item thumbnails)
    const uploadedImg = "/test.jpg";

    return (
        <div className="min-h-screen text-gray-900">
            {/* Banner */}
            <header
                className="relative md:h-screen h-[80vh] w-full"
                style={{
                    backgroundImage: `url(${uploadedImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
                aria-label="banner"
            >
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative z-10 flex items-center justify-center h-full">
                    <h1 className="text-white uppercase font-semibold text-2xl md:text-3xl lg:text-4xl">
                        current page
                    </h1>
                </div>
            </header>

            {/* Description */}
            <section className="px-4 py-8">
                <div className="mx-auto lg:w-[60vw] space-y-4">
                    <blockquote className="italic text-left font-light text-lg md:text-2xl leading-snug">
                        "We’ve helped startups become scale-ups, and guided SMEs into new
                        markets—offering more than just trade licenses, but real
                        partnerships that enable growth."
                    </blockquote>
                </div>
            </section>

            {/* Management section (team grid) */}
            <section className="px-4 py-8">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
                        {config.teamData.map((item, idx) => (
                            <article
                                key={idx}
                                className="bg-white shadow-sm overflow-hidden flex flex-col items-center p-4"
                                aria-label={`team-member-${idx + 1}`}
                            >
                                <div className="w-full max-w-[220px]">
                                    <div className="aspect-square overflow-hidden">
                                        <img
                                            src={uploadedImg}
                                            alt={`Team member ${idx + 1}`}
                                            className="object-cover object-center w-full h-full"
                                            loading="lazy"
                                        />
                                    </div>
                                </div>

                                <div className="mt-3 text-center">
                                    <h3 className="font-semibold text-sm md:text-base">{item.name}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-tight mt-1">
                                        {item.designation}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section
                className="relative py-12 bg-[url(/meeting.jpg)] bg-cover bg-center "
                aria-labelledby="stats-heading"
            >
                <div className="absolute inset-0 bg-black/70" />
                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    <h2 id="stats-heading" className="sr-only">
                        Company statistics
                    </h2>

                    {/* responsive grid: small -> 2 cols, sm -> 3, lg -> 6 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 text-white text-center items-center">
                        {data.map((item, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <div className="text-3xl md:text-4xl lg:text-5xl font-bold leading-none">
                                    {item.value}
                                </div>
                                <div className="mt-2 text-sm md:text-base">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutPage;
