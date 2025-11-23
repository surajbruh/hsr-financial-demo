import React from 'react'

const LandingGridItem = ({ mainHeading, branchName, subHeading, content, buttonText }) => {
    return (
        <div
            className="relative group bg-[url(/test.jpg)] bg-center bg-cover h-[70vh] overflow-hidden p-4"
        >
            {/* MAIN HEADING */}
            <h1 className="text-white text-center mt-10 px-4 text-xl sm:text-2xl md:text-3xl font-bold">
                {mainHeading}
            </h1>

            {/* HOVER OVERLAY - FIXED */}
            <div className="absolute top-0 right-0 w-full h-full bg-gray-100 flex flex-col items-center justify-center space-y-6 
translate-y-full group-hover:translate-y-0 transition-all duration-700 p-4">

                <div className="w-max mx-auto leading-tight">
                    {/* LOGO */}
                    <div className="w-[100px] sm:w-[125px] mx-auto">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="/logo.svg"
                            alt="brand-logo"
                        />
                    </div>

                    {/* branch name */}
                    <p className="uppercase font-medium w-full text-center text-sm sm:text-base">
                        {branchName}
                    </p>
                </div>

                {/* CONTENT */}
                <section className="text-center space-y-4 p-3 overflow-y-auto max-h-[55vh]">
                    <h1 className="uppercase font-semibold text-lg sm:text-xl">
                        {subHeading}
                    </h1>

                    <p className="text-sm sm:text-base">
                        {content}
                    </p>
                </section>

                <button className="bg-red-500 font-semibold text-white px-4 py-2 hover:bg-red-600 transition">
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default LandingGridItem
