import React from 'react'
import { useNavigate } from 'react-router-dom'

const branches = [
    {
        name: "Fit Out",
        color: "#E91E63"
    },
    {
        name: "Banking Assistance",
        color: "#D32F2F"
    },
    {
        name: "Communication Hub",
        color: "#F48FB1"
    },
    {
        name: "Certification",
        color: "#7986CB"
    },
    {
        name: "Tax & Accounting",
        color: "#4CAF50"
    },
    {
        name: "Recruitment",
        color: "#7E57C2"
    },
    {
        name: "Media & Marketing",
        color: "#8BC34A"
    },
    {
        name: "Concierge",
        color: "#FF9800"
    },
    {
        name: "Business Hub",
        color: "#00ACC1"
    }
]

const ServicePage = () => {
    const navigate = useNavigate()

    return (
        <div className="min-h-[70vh] py-20 flex justify-center"
            style={{
                background: "linear-gradient(135deg, #0a1e45 0%, #123a74 40%, #1c4fa0 70%, #275cc7 100%)"
            }}>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 w-[80vw]">
                {branches.map((branch, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center gap-3"
                    >
                        <div
                            onClick={() => navigate("/")}
                            className="cursor-pointer transition-transform duration-200 hover:scale-105"
                        >
                            <img
                                className="w-full h-full object-contain"
                                src="/logo.svg"
                                alt="brand-logo"
                            />
                        </div>

                        <label
                            className="uppercase font-semibold text-base md:text-lg lg:text-xl w-full text-left tracking-tight"
                            style={{
                                "color": branch.color
                            }}>
                            {branch.name}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ServicePage