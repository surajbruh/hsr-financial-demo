import React from 'react'
import config from "../config/index.json"
import { MapPin, Phone, Mail } from "lucide-react"

const TopHeaderBar = () => {
    return (
        <div
            className="bg-black text-white w-full hidden lg:block">
            <div className="w-[80vw] mx-auto py-2 flex flex-col md:flex-row items-center justify-between gap-2 md:gap-0">

                {/* LOCATION */}
                <div className="text-sm flex items-center gap-2">
                    <MapPin strokeWidth={1.5} size={18} />
                    <span className="text-center md:text-left">{config.contact.address}</span>
                </div>

                {/* CONTACT DETAILS */}
                <div className="flex items-center flex-col md:flex-row gap-2 md:gap-4">

                    <div className="text-sm flex items-center gap-2">
                        <Phone strokeWidth={1.5} size={18} />
                        <span>{config.contact.phone}</span>
                    </div>

                    <div className="text-sm flex items-center gap-2">
                        <Mail strokeWidth={1.5} size={18} />
                        <span>{config.contact.email}</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TopHeaderBar
