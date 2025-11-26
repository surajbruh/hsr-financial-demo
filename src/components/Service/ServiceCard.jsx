import React from "react";
import { useNavigate } from "react-router-dom";

const ServiceCard = ({ name, color, image, slug }) => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center text-center gap-3">
            <div
                onClick={() => navigate(`/services/${slug}`)}
                className="cursor-pointer transition-transform duration-200 hover:scale-105"
            >
                <img
                    className="w-full h-full object-contain"
                    src={image}
                    alt={name}
                />
            </div>

            <label
                className="uppercase font-semibold text-base md:text-lg lg:text-xl w-full text-left tracking-tight"
                style={{ color }}
            >
                {name}
            </label>
        </div>
    );
};

export default ServiceCard;