import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import i1 from "/public/images/1.png";
import i2 from "/public/images/2.png";
import i3 from "/public/images/3.png";
import i4 from "/public/images/4.png";
import i5 from "/public/images/5.png";
import i6 from "/public/images/6.png";
import i7 from "/public/images/7.png";
import i8 from "/public/images/8.png";
import i9 from "/public/images/9.png";
import Image from 'next/image';

export default function slider234() {
  return (
    <div className="gap-6 grid pb-[95px]">
          <div className="gap-4  grid">
            <p className="font-semibold pl-5 text-[20px]">Visit Popup Store</p>
            <div className="swiper flex flex-row gap-2 ">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
                // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  <Image
                    src={i1}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px] "
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i2}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i3}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="gap-4 grid">
            <p className="font-semibold pl-5 text-[20px]">Play Gacha</p>
            <div className="swiper flex flex-row gap-2 ">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
               // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  <Image
                    src={i4}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i5}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i6}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className="gap-4 grid">
            <p className="font-semibold pl-5 text-[20px]">Latest Products</p>
            <div className="swiper flex flex-row gap-2 ">
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={8}
                slidesPerView={2.2}
                // loop={true}
                // autoplay={{ delay: 2000 }}
                initialSlide={1}
              >
                <SwiperSlide>
                  <Image
                    src={i7}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i8}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src={i9}
                    alt=""
                    className="h-[120px] w-[167px] rounded-[12px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
  )
}
