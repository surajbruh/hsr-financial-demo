import React from 'react'

const LandingGridItem = ({ mainHeading, branchName, subHeading, content, buttonText }) => {
    return (
        <article className="relative group bg-[url(/test.jpg)] bg-center bg-cover h-[70vh] overflow-hidden p-4" aria-label={mainHeading} role="article" >
            <h3 className="text-white text-center mt-10 px-4 text-xl sm:text-2xl md:text-3xl font-bold">
                {mainHeading}
            </h3>

            {/* HOVER OVERLAY */}
            <div
                className="absolute top-0 right-0 w-full h-full bg-gray-100 flex flex-col items-center justify-center space-y-6 
            translate-y-full group-hover:translate-y-0 transition-all duration-700 p-4"
            >
                <div className="w-max mx-auto leading-tight">
                    {/* LOGO */}
                    <div className="w-[100px] sm:w-[125px] mx-auto">
                        <img
                            className="w-full h-full object-cover object-center"
                            src="/logo.svg"
                            alt="Company brand logo"
                            loading="lazy"
                        />
                    </div>

                    <p className="uppercase font-medium w-full text-center text-sm sm:text-base tracking-wide">
                        {branchName}
                    </p>
                </div>

                <section
                    className="text-center space-y-4 p-3 overflow-y-auto max-h-[55vh]"
                    aria-label={`${mainHeading} details`}
                >
                    <h4 className="uppercase font-semibold text-lg sm:text-xl">
                        {subHeading}
                    </h4>

                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                        {content}
                    </p>
                </section>

                <button>
                    <a
                        href="#"
                        className="bg-red-500 font-semibold text-white px-4 py-2 hover:bg-red-600 transition text-center"
                        aria-label={`Learn more about ${mainHeading}`}
                    >
                        {buttonText}
                    </a>
                </button>
            </div>
        </article>
    )
}

export default LandingGridItem