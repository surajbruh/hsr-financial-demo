import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import config from "../config/index.json"

const PartnerSection = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={false}
            pagination={{ clickable: true }}
            spaceBetween={20}
            className="relative lg:w-[70vw]"

            // ⭐ RESPONSIVE BREAKPOINTS
            breakpoints={{
                320: { slidesPerView: 2, spaceBetween: 10 },   // small phones
                480: { slidesPerView: 3, spaceBetween: 10 },   // large phones
                640: { slidesPerView: 3, spaceBetween: 15 },   // tablets
                768: { slidesPerView: 4, spaceBetween: 15 },   // iPad portrait
                1024: { slidesPerView: 5, spaceBetween: 20 },  // small laptop
                1280: { slidesPerView: 6, spaceBetween: 20 },  // large desktop
            }}
        >
            {config.aboutPage.PartnersClientsSection.clientImageURL.map((imageURL, index) => (
                <SwiperSlide key={index}>
                    <div className="p-4 flex items-center justify-center rounded-lg">
                        <img
                            className="object-contain object-center w-full h-full max-h-20"
                            src={imageURL}
                            alt=""
                        />
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default PartnerSection;
