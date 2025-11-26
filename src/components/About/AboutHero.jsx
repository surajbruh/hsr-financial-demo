const AboutHero = ({ title, subtitle, background }) => {
    return (
        <div
            className="relative w-full h-[80vh] md:h-screen flex items-center"
            style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />

            <div className="relative z-10 w-full max-w-[80vw] mx-auto px-6 md:px-10 lg:px-16">
                <h1 className="text-white font-semibold uppercase tracking-tight text-3xl sm:text-4xl md:text-5xl lg:text-7xl">
                    {title}
                </h1>

                <p className="text-white opacity-90 mt-6 text-sm sm:text-base md:text-lg max-w-xl">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default AboutHero;