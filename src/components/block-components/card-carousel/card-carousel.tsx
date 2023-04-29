import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import "./card-carousel.scss";
 interface IcardSwiper {
     slides: any[]
 }

export default function CardSwiper(props: IcardSwiper) {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        // pagination={true}
        modules={[EffectCards, Pagination, Navigation]}
        className="card-swiper"
        navigation={true}
        autoplay={true}
      >
          {
              props.slides.map((item, index) => (
                <SwiperSlide key={index}>
                    {item}
                </SwiperSlide>
            ))
          }
      </Swiper>
    </>
  );
}
