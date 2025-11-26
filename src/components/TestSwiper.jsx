import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TestSwiper = () => {
    return (
        <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={0}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3500 }}
            navigation={false}
            className="relative w-full"
        >
            <SwiperSlide></SwiperSlide>
        </Swiper>
    );
};

export default TestSwiper;