import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay,Pagination,Navigation} from 'swiper';



function Slider() {
  return (
    <></>
    // <MySlider>
    //     <Swiper >
    //         <SwiperSlide>Slide 1</SwiperSlide>
    //         <SwiperSlide>Slide 2</SwiperSlide>
    //         <SwiperSlide>Slide 3</SwiperSlide>
    //         <SwiperSlide>Slide 4</SwiperSlide>
    //         <SwiperSlide>Slide 5</SwiperSlide>
    //         <SwiperSlide>Slide 6</SwiperSlide>
    //         <SwiperSlide>Slide 7</SwiperSlide>
    //         <SwiperSlide>Slide 8</SwiperSlide>
    //         <SwiperSlide>Slide 9</SwiperSlide>
    //         </Swiper>
    // </MySlider>
  )
}

export default Slider;

const MySlider = styled.div`
     position: relative;
     background: #eee;
     font-size: 14px;
     color: #000;
     margin: 0;
     padding: 0;
  .swiper {
    width: 50%;
    height: 50%;
}

.swiper-slide {
    text-align: center;
    font-size: 20px;
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.mySwiper{
  
}
`; 