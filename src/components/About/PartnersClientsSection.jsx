const PartnersClientsSection = ({ PartnerSection, ClientSection }) => {
    return (
        <div className="py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 space-y-12">
            <div>
                <h1 className="capitalize font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-6">
                    some of our <span className="text-(--accent-color)">partners</span>
                </h1>
                <PartnerSection />
            </div>

            <div>
                <h1 className="capitalize font-semibold text-center text-2xl sm:text-3xl md:text-4xl mb-6">
                    some of our <span className="text-(--accent-color)">clients</span>
                </h1>
                <ClientSection />
            </div>
        </div>
    );
};

export default PartnersClientsSection;