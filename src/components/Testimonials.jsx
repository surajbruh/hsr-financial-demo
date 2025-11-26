import React from "react";
import QuoteBlock from "./QuoteBlock";
import config from "../config/index.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
    return (
        <section
            aria-labelledby="testimonials-heading"
            className="relative px-4 py-12 bg-[url('/meeting.jpg')] bg-cover bg-center"
        >
            {/* Dark overlay behind content */}
            <div className="absolute inset-0 bg-black/70 pointer-events-none" />

            <div className="relative z-10 mx-auto w-[92vw] md:w-[85vw] lg:w-[75vw]">
                <div className="bg-transparent rounded-lg overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        {/* Left: Text + Slider */}
                        <div className="px-4 md:px-6 lg:px-8 py-8">
                            <div className="mb-6 text-white">
                                <h3 className="uppercase font-medium text-sm md:text-base" id="testimonials-heading">
                                    Testimonials
                                </h3>
                                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl leading-snug mt-2">
                                    Don’t Believe Us? Check Our Client Feedback
                                </h2>
                            </div>

                            <div className="text-white">
                                <Swiper
                                    modules={[Autoplay, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    loop={true}
                                    autoplay={{
                                        delay: 4500,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    aria-live="polite"
                                >
                                    {config.quotes?.map((quoteItem, idx) => (
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

                        {/* Right: Visual / Person image */}
                        <div className="hidden lg:flex items-center justify-center p-6">
                            {/* Use <img> for semantics & alt */}
                            <img
                                src="/person.png"
                                alt="Client testimonial example"
                                className="w-full max-w-[420px] h-auto object-contain rounded-lg shadow-xl"
                                loading="lazy"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
