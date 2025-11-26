const AboutDescription = ({ paragraphs, quote }) => {
    return (
        <section className="px-4 py-12">
            <div className="mx-auto lg:w-[60vw] space-y-6 text-base sm:text-lg md:text-xl">
                {paragraphs.map((p, i) => (
                    <p key={i}>{p}</p>
                ))}

                <blockquote className="italic font-light text-lg md:text-3xl leading-snug">
                    "{quote}"
                </blockquote>
            </div>
        </section>
    );
};

export default AboutDescription;