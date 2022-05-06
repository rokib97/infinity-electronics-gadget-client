import React from "react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import five from "../../../Images/five.jpg";
import four from "../../../Images/four.jpg";
import one from "../../../Images/one.jpg";
import seven from "../../../Images/seven.jpg";
import six from "../../../Images/six.jpg";
import three from "../../../Images/three.jpg";
import two from "../../../Images/two.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="container mb-5">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={30}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        // autoplay={{
        //   delay: 0,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[Autoplay, EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={one} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={three} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={six} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={seven} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
