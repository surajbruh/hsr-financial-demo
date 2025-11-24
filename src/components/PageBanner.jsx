import React from 'react'

const PageBanner = ({ page }) => {
    return (
        <div
            className="relative z-50 bg-[url(/meeting.jpg)] bg-cover bg-center">
            <div className="absolute inset-0 bg-black/80"></div>
            <div className='relative z-10 text-white h-[15vh] flex justify-center items-center'>
                <label className='uppercase font-bold text-2xl md:text-3xl lg:text-4xl'>{page}</label>
            </div>
        </div>
    )
}

export default PageBanner
