import config from "../config/index.json"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Slide1 from "./slides/Slide1";
import Slide2 from "./slides/Slide2";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Carousel = () => {
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
            <SwiperSlide>
                <Slide1 />
            </SwiperSlide>
            <SwiperSlide>
                <Slide2 />
            </SwiperSlide>
        </Swiper>
    );
};

export default Carousel;