import React from 'react'
import LandingGridItem from './LandingGridItem'
import config from "../../config/index.json"

const LandingGrid = () => {
    return (
        < div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
            {
                config.gridData.map((item) => (
                    <LandingGridItem
                        key={item.id}
                        mainHeading={item.mainHeading}
                        branchName={item.branchName}
                        subHeading={item.subHeading}
                        content={item.content}
                        buttonText={item.buttonText}
                    />
                ))
            }
        </div >
    )
}

export default LandingGrid
