import React , {useEffect, useState} from "react";
import styled from "styled-components";
import { VscArrowLeft } from "react-icons/vsc";
import { VscArrowRight } from "react-icons/vsc";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Autoplay,Navigation
} from 'swiper';

SwiperCore.use([Autoplay,Navigation]);

const Client = () => {
  let  item =[
    {name : "خانم محسن زاده " , client : "کاربر ناراضی"} ,
    {name : "خانم خراسانی" , client : "کاربر راضی"} ,
    {name : "اقای رمضانی فر" , client : "کاربر راضی"}
  ];
     
  return (
    <ClientLayout>
      <p>کاربر</p>
      <p>کاربر چه می گوید ؟</p>
      <p>
        <span></span>
        <span>&#9900;</span>
        <span></span>
      </p>
      <BoxClients>
        <img src="/client.png" alt="" />
        <Comment>
          <VscArrowLeft className="swiper-button-prev"/>
          <VscArrowRight className="swiper-button-next"/>
          <Swiper 
          navigation={
            {
              nextEl : '.swiper-button-next',
              prevEl: '.swiper-button-prev'
          }}
          spaceBetween={70}
          autoplay={{
                "delay": 4000,
                "disableOnInteraction": false
                }}>
                {item.map((user) => (
                  <SwiperSlide>
                        <div className="Logo"></div>
                        <p>
                          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                          استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
                          ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
                        </p>
                        <h3>{user.name}</h3>
                        <h4>{user.client}</h4>
                  </SwiperSlide>
                ))}
          </Swiper>
        </Comment>
      </BoxClients>
    </ClientLayout>
  );
};

export default Client;

const ClientLayout = styled.div`
  width: 100%;
  height: auto;
  display: grid;
  align-content: start;
  padding-top: 5rem;
  p {
    text-align: center;
  }
  p:nth-child(1) {
    font-size: 1rem;
    color: rgb(102, 102, 102);
    font-weight: bold;
  }
  p:nth-child(2) {
    font-size: 2rem;
    font-weight: bold;
    margin: 1rem 0 0.5rem 0;
  }
  p:nth-child(3) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    span:nth-child(odd) {
      width: 3.5rem;
      height: 2px;
      background-color: rgb(232, 68, 68);
    }
    span:nth-child(2) {
      color: rgb(232, 68, 68);
      font-size: 1.5rem;
      font-weight: bold;
      margin: 0 0.25rem 0.4rem 0.25rem;
    }
  }
`;

const BoxClients = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 29rem;
    height: 30rem;
    margin-top: 1.5rem;
  }
  @media only screen and (max-width: 1200px) {
    img{
      width: 24rem;
      height: 25rem;
      margin-top: 4rem;
    }
    
  }
  @media only screen and (max-width: 995px) {
    img{
      width: 20rem;
      height: 21rem;
      margin-top: 10rem;
    }
  }
  @media only screen and (max-width: 770px) {
    flex-direction : column ;
    align-items: center;
    img{
      width: 32rem;
      height: 35rem;
      margin-top: 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    img{
      width: 30rem;
    }
  }
`;

const Comment = styled.div`
  width: 42rem;
  height: 22rem;
  margin-top: 5rem;
  position: relative;
  display: flex;
  box-shadow: 2px 0px 25px 8px #b6b6b63c;
  .swiper{
    width: 100%;
    height: 100%;
    padding: 3rem;
  }
  .swiper-slide{
    width: 90%;
    height: 100%;
    direction: rtl ;
    text-align: right;
  }
  .swiper-button-prev,.swiper-button-next{
    position: absolute;
    color: rgb(232, 68, 68);
    left: 3rem;
    top: 6rem;
  }
  .swiper-button-next{
    left: 6rem;
  }
  p {
      width: 100%;
      font-size: 1.1rem !important;
      text-align: right;
      line-height: 1.5rem;
      font-weight: lighter !important;
      color: rgb(65, 65, 65);
    }
    .Logo {
      width: 5rem !important;
      height: 5rem;
      border-radius: 2.5rem;
      background-color: rgb(245, 245, 245);
      text-align: center;
      font-size: 2rem;
      margin: 0.5rem;
      padding-top: 1.4rem;
      ::before {
        content: "66";
        color: rgb(232, 68, 68);
      }
    }
    h3{
        margin: 2rem 0 1rem 0 ;
    }
    h4{
      color: rgb(102, 102, 102);
      font-weight: lighter;
    }
  @media only screen and (max-width: 1200px) {
    width: 35rem;
  }
  @media only screen and (max-width: 995px) {
    width: 25rem;
    height: 24rem;
    .swiper{
      padding: 2rem;
    }
  }
  @media only screen and (max-width: 770px) {
    width: 35rem;
    height: 22rem;
    margin-top: 0;
    .swiper{
      padding: 3rem;
    }
  }
  @media only screen and (max-width: 600px) {
    width: 30rem;
    margin-bottom: 0;
    .swiper{
      padding: 2rem;
    }
  }
`;
