import React from "react";
import QuoteBlock from "./QuoteBlock";
import config from "../../../config/index.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

const Testimonials = () => {
    return (
        <section aria-labelledby="testimonials-heading" className="relative px-4 py-12 bg-[url('/meeting.jpg')] bg-cover bg-center" role="region" >
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            <div className="relative z-10 mx-auto w-[92vw] md:w-[85vw] lg:w-[75vw]">
                <div className="bg-transparent rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                        {/* TEXT + SLIDER SECTION */}
                        <div className="px-4 md:px-6 lg:px-8 py-8 text-white">

                            {/* Section heading */}
                            <header className="mb-6">
                                <h2
                                    id="testimonials-heading"
                                    className="uppercase font-semibold tracking-wide text-sm md:text-base"
                                >
                                    Client Testimonials
                                </h2>

                                <h3 className="font-extrabold text-2xl md:text-3xl lg:text-4xl leading-snug mt-2">
                                    What Our Clients Say About Us
                                </h3>
                            </header>

                            {/* Slider */}
                            <div>
                                <Swiper
                                    modules={[Autoplay]}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 4500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    aria-label="Client testimonial slider"
                                >
                                    {config.landingPage.testimonials.quotes?.map((quoteItem, idx) => (
                                        <SwiperSlide key={idx}>
                                            <QuoteBlock
                                                quote={quoteItem.quote}
                                                name={quoteItem.name}
                                                designation={quoteItem.designation}
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>

                        {/* IMAGE: RIGHT SIDE */}
                        <figure className="hidden lg:flex items-center justify-center p-6">
                            <img
                                src="/person.png"
                                alt="Happy client giving positive testimonial"
                                className="w-full max-w-[420px] h-auto object-contain rounded-lg shadow-xl"
                                loading="lazy"
                            />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;