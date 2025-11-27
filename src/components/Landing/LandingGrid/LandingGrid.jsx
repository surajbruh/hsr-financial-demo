import React from 'react'
import LandingGridItem from './LandingGridItem'
import config from "../../../config/index.json"

const LandingGrid = () => {
    return (
        <section aria-labelledby="business-services-heading" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            <h2 id="business-services-heading" className="sr-only">
                Business Setup & Corporate Services Grid
            </h2>

            {config.landingPage.gridData.map((item) => (
                <LandingGridItem
                    key={item.id}
                    mainHeading={item.mainHeading}
                    branchName={item.branchName}
                    subHeading={item.subHeading}
                    content={item.content}
                    buttonText={item.buttonText}
                />
            ))}
        </section>
    )
}

export default LandingGrid