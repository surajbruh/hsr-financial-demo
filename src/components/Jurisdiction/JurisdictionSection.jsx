import React from 'react'
import config from "../../config/index.json"
import Jurisdiction from './JurisdictionItem'

const JurisdictionSection = () => {
    return (
        <section aria-labelledby="jurisdiction-heading">
            <h2 id="jurisdiction-heading" className="capitalize font-bold bg-blue-900 text-3xl text-white text-center py-5" >
                Choose Your Jurisdiction
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {config.jurisdictionData.map((item) => (
                    <Jurisdiction
                        key={item.id}
                        imageURL={item.imageURL}
                        setupName={item.setup_name}
                        setupDescription={item.setup_description}
                        mainHeading={item.main_heading}
                        content={item.jurisdiction_description}
                    />
                ))}
            </div>
        </section>
    )
}

export default JurisdictionSection