import React from 'react'

const AllianceSection = () => {
    return (
        <div
            className="relative w-full py-24"
            style={{
                backgroundImage: `url(/statue.png)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content container */}
            <div className="relative z-10 flex items-center justify-center px-4 sm:px-6 md:px-10">
                <section className="text-white text-center w-full max-w-4xl space-y-6 sm:space-y-8 md:space-y-10">
                    <h1 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                        A Strategic Alliance with Encor Group
                    </h1>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                        In January 2025, Creative Zone embarked on a transformative journey
                        by joining forces with Encor Group, a leading corporate, trust, and
                        fund services platform headquartered in Hong Kong. Encor,
                        majority-owned by Nexus Point Capital, a prominent Asian private
                        equity firm, operates across key markets including China, Southeast
                        Asia, and the GCC. This acquisition not only signifies Encor’s
                        commitment to expanding its geographical footprint but also
                        underscores Creative Zone’s pivotal role in the rapidly growing GCC
                        corporate services sector.
                    </p>

                    <p className="text-sm sm:text-base md:text-lg leading-relaxed opacity-90">
                        In January 2025, Creative Zone embarked on a transformative journey
                        by joining forces with Encor Group, a leading corporate, trust, and
                        fund services platform headquartered in Hong Kong. Encor,
                        majority-owned by Nexus Point Capital, a prominent Asian private
                        equity firm, operates across key markets including China, Southeast
                        Asia, and the GCC. This acquisition not only signifies Encor’s
                        commitment to expanding its geographical footprint but also
                        underscores Creative Zone’s pivotal role in the rapidly growing GCC
                        corporate services sector.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default AllianceSection
