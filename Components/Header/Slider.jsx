import React from "react";
import styled from "styled-components";
import 'swiper/css/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,Pagination,Navigation
} from 'swiper';
import Image from 'next/image';
  SwiperCore.use([Autoplay,Pagination,Navigation]);

  const Slider = () => { 
    return(
      <MySlider>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">
            <SwiperSlide>
              <Image src="/house-1.jpeg" 
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/house-2.jpeg" 
                  layout='fill'
                  objectFit='cover'
                />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/gal-1.jpeg" 
                    layout='fill'
                    objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/gal-2.jpeg" 
                      layout='fill'
                      objectFit='cover'
                />
            </SwiperSlide>
        </Swiper>
      </MySlider>
   )}

  export default Slider;

  const MySlider = styled.div`
      height: 90vh;
    .swiper {
      width: 100%;
      height: 100%;
    }

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: white;
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

  `;