import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceGrid = ({ services }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[80vw]">
            {services.map((service) => (
                <ServiceCard
                    key={service.id}
                    name={service.name}
                    color={service.color}
                    image={service.image}
                    slug={service.slug}
                />
            ))}
        </div>
    );
};

export default ServiceGrid;