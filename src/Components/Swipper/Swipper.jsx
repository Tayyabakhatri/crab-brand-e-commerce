// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import React from "react";
import logo1 from '../../assets/slideLogos/angrybuchi.webp'
import logo2 from '../../assets/slideLogos/branreluaoandassociates.webp'
import logo3 from '../../assets/slideLogos/angrybuchi.webp'
import logo4 from '../../assets/slideLogos/angrybuchi.webp'
import logo5 from '../../assets/slideLogos/angrybuchi.webp'
import logo6 from '../../assets/slideLogos/angrybuchi.webp'
import logo7 from '../../assets/slideLogos/angrybuchi.webp'
import logo8 from '../../assets/slideLogos/angrybuchi.webp'
import logo9 from '../../assets/slideLogos/angrybuchi.webp'

const Swipper = () => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide><img src={logo1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={logo2} alt="" /></SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        ...
      </Swiper>
    </>
  );
};

export default Swipper;
