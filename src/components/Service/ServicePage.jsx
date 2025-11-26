import React from "react";
import config from "../../config/index.json";
import ServiceGrid from "./ServiceGrid";

const ServicePage = () => {
    return (
        <div
            className="min-h-[70vh] py-20 flex justify-center"
            style={{
                background:
                    "linear-gradient(135deg, #0a1e45 0%, #123a74 40%, #1c4fa0 70%, #275cc7 100%)",
            }}
        >
            <ServiceGrid services={config.servicePage.services} />
        </div>
    );
};

export default ServicePage;
