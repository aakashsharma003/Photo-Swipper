import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./App.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function App() {
  return (
    <div id="App">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="images/img20.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img13.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img17.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img14.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img15.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img19.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="images/img22.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
