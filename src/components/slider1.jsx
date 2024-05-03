"use client"
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Img from "/public/images/image1.png";
import Image from 'next/image';


export default function slider1() {
  return (

       <div className="swiper flex flex-row gap-2 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={8}
            slidesPerView={1.1}
            loop={true}
            autoplay={{ delay: 2000 }}
            centeredSlides={true}
            initialSlide={1}
          >
            <SwiperSlide>
              <Image src={Img} alt="" width={354} height={139} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Img} alt="" width={354} height={139} />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={Img} alt="" width={354} height={139} />
            </SwiperSlide>
          </Swiper>
        </div>

  
  )
}
