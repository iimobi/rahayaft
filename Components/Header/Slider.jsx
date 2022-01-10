import React from "react";
import styled from "styled-components";
import {BsBoxSeam} from "react-icons/bs";
import {BiDollar} from "react-icons/bi";
import {BsBarChartLine} from "react-icons/bs";
import {BiChat} from "react-icons/bi";
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
    const slideHandler = (e) => {
      console.log(e.target.id);
    }
    return(
      <MySlider>
        <Swiper spaceBetween={30} centeredSlides={true} autoplay={{
            "delay": 2500,
            "disableOnInteraction": false
          }} pagination={{
            "clickable": true
          }} navigation={true} className="mySwiper">
            <SwiperSlide>
              <Image src="/banner-1.jpg" 
                layout='fill'
                objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/banner-2.jpg" 
                  layout='fill'
                  objectFit='cover'
                />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/banner-3.jpg" 
                    layout='fill'
                    objectFit='cover'
              />
            </SwiperSlide>
            <SwiperSlide>
              <Image src="/banner-4.jpg" 
                      layout='fill'
                      objectFit='cover'
                />
            </SwiperSlide>
        </Swiper>
        <Comment>
          <div onClick={slideHandler} id="resources">
            <BsBoxSeam className="Icon"/>
            <p>منابع انسانی</p>  
          </div>
          <div >
            <BiDollar className="Icon"/>
            <p>سرمایه</p>
          </div>
          <div>
            <BsBarChartLine className="Icon"/>
            <p>بازاریابی</p>
          </div>
          <div>
            <BiChat className="Icon"/>
            <p>مشاوره</p>
          </div>
        </Comment>
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
    .swiper-pagination-bullet {
      display: none;
    }
    .swiper-button-prev{
      background-color: rgb(68,68,68,.6);
      color: white;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 2.5rem;
      margin-left: 0.7rem;
      transform: translateY(-50%);
      padding-right: 0.5rem;
      transition: all 0.5s ease;
      :hover{
        transition: all 0.5s ease;
        background-color: rgb(232, 68, 68,0.5);
      }
    }
    .swiper-button-next{
      background-color: rgb(68,68,68,0.5);
      color: white;
      width: 4.5rem;
      height: 4.5rem;
      border-radius: 2.5rem;
      margin-right: 0.7rem;
      transform: translateY(-50%);
      padding-left: 0.5rem;
      transition: all 0.5s ease;
      :hover{
        transition: all 0.5s ease;
        background-color: rgb(232, 68, 68,0.5);
      }
    }
  `;

  const Comment = styled.div`
      width: 100%;
      height: 5rem;
      border-bottom: 1px solid #d4d4d4;
      direction: rtl;
      display: flex;
      padding: 0 2.5rem 0 2.5rem;

      div{
          width: 20rem;
          display: flex;
          column-gap: 1rem;
          color: #444444;
          align-items: center;
          align-content: center;
          justify-content: center;
          justify-items: center;
          cursor: pointer;
          ::selection{
            color: white;
            background-color: rgb(48, 48, 50);
          }
          .Icon{
            width: 2rem;
            height: 2rem;
          }
          p{
            font-size: 1.25rem;
            font-weight: bold;
          }
      }
  `;