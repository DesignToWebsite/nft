import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

//component
import Card_nft from "./Card_nft";

//data
import { clubs } from "../data/clubs";

const Carousel_create = () => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: -15,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        // pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper my_carousel"
      >
        {clubs.map((item, index) => (
          <SwiperSlide>
            <Card_nft
              title={item.name}
              key={index}
              price={item.price}
              like={item.like}
              image={item.image}
              days_left={item.days_left}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};


export default Carousel_create;
