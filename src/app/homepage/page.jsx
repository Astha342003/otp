"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Img from "/public/images/image1.png";
import Image1 from "next/image";
import Img1 from "/public/images/image2.png";

import IMG from "/public/images/lines.png";
import i10 from "/public/images/10.png";

import i1 from "/public/images/1.png";
import i2 from "/public/images/2.png";
import i3 from "/public/images/3.png";
import i4 from "/public/images/4.png";
import i5 from "/public/images/5.png";
import i6 from "/public/images/6.png";
import i7 from "/public/images/7.png";
import i8 from "/public/images/8.png";
import i9 from "/public/images/9.png";

import Welcome from "../../components/welcome";
import Slider1 from "../../components/slider1";
import Buttons from "../../components/buttons";
import Gdooo from "../../components/gdooo";
import Slider234 from "../../components/slider234";
import Navbar from "../../components/navbar";

function page() {
  return (
    <div className="container">
      <div className="grid gap-8">
        {/* <div className="flex flex-row justify-between pt-[76px] pl-[20px] pr-[19px] items-baseline ">
          <div className="text-[28px] font-bold ">Aries, Welcome to Gdooo</div>
          <button>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.35419 21C10.0593 21.6224 10.9856 22 12 22C13.0145 22 13.9407 21.6224 14.6458 21M18 8C18 6.4087 17.3679 4.88258 16.2427 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.8826 2.63214 7.75738 3.75736C6.63216 4.88258 6.00002 6.4087 6.00002 8C6.00002 11.0902 5.22049 13.206 4.34968 14.6054C3.61515 15.7859 3.24788 16.3761 3.26134 16.5408C3.27626 16.7231 3.31488 16.7926 3.46179 16.9016C3.59448 17 4.19261 17 5.38887 17H18.6112C19.8074 17 20.4056 17 20.5382 16.9016C20.6852 16.7926 20.7238 16.7231 20.7387 16.5408C20.7522 16.3761 20.3849 15.7859 19.6504 14.6054C18.7795 13.206 18 11.0902 18 8Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div> */}
        <Welcome/>
        {/* <div className="swiper flex flex-row gap-2 ">
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
        </div> */}
        <Slider1/>
        {/* <div className="px-5 flex flex-row justify-between items-center ">
          <div className="grid gap-3">
            <button className="bg-[#9F8CF0] h-[68px] w-[68px] boxShadow flex justify-center items-center rounded-xl">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.2666 15.3333L27.6007 18L24.9333 15.3333M27.9268 17.3333C27.9752 16.8956 28 16.4507 28 16C28 9.37258 22.6274 4 16 4C9.37258 4 4 9.37258 4 16C4 22.6274 9.37258 28 16 28C19.7697 28 23.1334 26.2618 25.3333 23.5431M16 9.33333V16L20 18.6667"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-[12px] flex justify-center">Check in</p>
          </div>

          <div className="grid gap-3">
            <button className="bg-[#9F8CF0] h-[68px] w-[68px] boxShadow flex justify-center items-center rounded-xl">
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.6667 28V20.8C20.6667 20.0533 20.6667 19.6799 20.5214 19.3947C20.3935 19.1438 20.1896 18.9398 19.9387 18.812C19.6535 18.6667 19.2801 18.6667 18.5334 18.6667H14.8C14.0533 18.6667 13.6799 18.6667 13.3947 18.812C13.1438 18.9398 12.9398 19.1438 12.812 19.3947C12.6667 19.6799 12.6667 20.0533 12.6667 20.8V28M4.66669 9.33333C4.66669 11.5425 6.45755 13.3333 8.66669 13.3333C10.8758 13.3333 12.6667 11.5425 12.6667 9.33333C12.6667 11.5425 14.4575 13.3333 16.6667 13.3333C18.8758 13.3333 20.6667 11.5425 20.6667 9.33333C20.6667 11.5425 22.4575 13.3333 24.6667 13.3333C26.8758 13.3333 28.6667 11.5425 28.6667 9.33333M8.93335 28H24.4C25.8935 28 26.6402 28 27.2107 27.7094C27.7124 27.4537 28.1204 27.0457 28.376 26.544C28.6667 25.9735 28.6667 25.2268 28.6667 23.7333V8.26667C28.6667 6.77319 28.6667 6.02646 28.376 5.45603C28.1204 4.95426 27.7124 4.54631 27.2107 4.29065C26.6402 4 25.8935 4 24.4 4H8.93335C7.43988 4 6.69314 4 6.12271 4.29065C5.62095 4.54631 5.213 4.95426 4.95734 5.45603C4.66669 6.02646 4.66669 6.77319 4.66669 8.26667V23.7333C4.66669 25.2268 4.66669 25.9735 4.95734 26.544C5.213 27.0457 5.62095 27.4537 6.12271 27.7094C6.69314 28 7.43988 28 8.93335 28Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-[12px] flex justify-center">Shop Now</p>
          </div>

          <div className="grid gap-3">
            <button className="bg-[#9F8CF0] h-[68px] w-[68px] boxShadow flex justify-center items-center rounded-xl">
              <svg
                width="29"
                height="24"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M25 8.66683V5.60016C25 4.10669 25 3.35996 24.7094 2.78952C24.4537 2.28776 24.0457 1.87981 23.544 1.62415C22.9735 1.3335 22.2268 1.3335 20.7333 1.3335H5.26667C3.77319 1.3335 3.02646 1.3335 2.45603 1.62415C1.95426 1.87981 1.54631 2.28776 1.29065 2.78952C1 3.35995 1 4.10669 1 5.60016V18.4002C1 19.8936 1 20.6404 1.29065 21.2108C1.54631 21.7126 1.95426 22.1205 2.45603 22.3762C3.02646 22.6668 3.77319 22.6668 5.26667 22.6668L20.7333 22.6668C22.2268 22.6668 22.9735 22.6668 23.544 22.3762C24.0457 22.1205 24.4537 21.7126 24.7094 21.2108C25 20.6404 25 19.8936 25 18.4002V15.3335M18.3333 12.0002C18.3333 11.3806 18.3333 11.0709 18.3846 10.8133C18.595 9.75541 19.4219 8.92849 20.4798 8.71807C20.7374 8.66683 21.0471 8.66683 21.6667 8.66683H24.3333C24.9529 8.66683 25.2626 8.66683 25.5202 8.71807C26.5781 8.92849 27.405 9.75541 27.6154 10.8133C27.6667 11.0709 27.6667 11.3806 27.6667 12.0002C27.6667 12.6197 27.6667 12.9295 27.6154 13.1871C27.405 14.2449 26.5781 15.0718 25.5202 15.2823C25.2626 15.3335 24.9529 15.3335 24.3333 15.3335H21.6667C21.0471 15.3335 20.7374 15.3335 20.4798 15.2823C19.4219 15.0718 18.595 14.2449 18.3846 13.1871C18.3333 12.9295 18.3333 12.6197 18.3333 12.0002Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-[12px] flex justify-center">Wallet</p>
          </div>

          <div className="grid gap-3">
            <button className="bg-[#9F8CF0] h-[68px] w-[68px] boxShadow flex justify-center items-center rounded-xl">
              <svg
                width="29"
                height="24"
                viewBox="0 0 29 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.16669 8.33317H27.8334V5.93317C27.8334 4.4397 27.8334 3.69296 27.5427 3.12253C27.287 2.62077 26.8791 2.21282 26.3773 1.95716C25.8069 1.6665 25.0602 1.6665 23.5667 1.6665H5.43335C3.93988 1.6665 3.19314 1.6665 2.62271 1.95715C2.12095 2.21282 1.713 2.62076 1.45734 3.12253C1.16669 3.69296 1.16669 4.4397 1.16669 5.93317V16.0665C1.16669 17.56 1.16669 18.3067 1.45734 18.8771C1.713 19.3789 2.12095 19.7869 2.62271 20.0425C3.19314 20.3332 3.93988 20.3332 5.43335 20.3332H13.1667M17.8334 22.9998L20.5333 22.4598C20.7687 22.4128 20.8864 22.3892 20.9962 22.3462C21.0936 22.308 21.1862 22.2584 21.2721 22.1985C21.3688 22.1311 21.4537 22.0462 21.6234 21.8764L27.1667 16.3332C27.9031 15.5968 27.9031 14.4029 27.1667 13.6665C26.4303 12.9301 25.2364 12.9301 24.5 13.6665L18.9568 19.2098C18.787 19.3795 18.7021 19.4644 18.6347 19.5611C18.5748 19.647 18.5252 19.7396 18.487 19.837C18.444 19.9467 18.4204 20.0645 18.3733 20.2999L17.8334 22.9998Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-[12px] flex justify-center">Membership</p>
          </div>
        </div> */}
        <Buttons/>
        {/* <div>
          <div className="px-[23px]">
            <div
              src={IMG}
              className="card gap-[19px] grid px-[26px] py-6 border-white border-[1px]  rounded-xl bg-black object-contain"
            >
              <div className="text-white justify-between flex ">
                <p className="text-[17px] font-bold">Gdooo</p>
                <p className="text-[12px]">Anti Matter</p>
              </div>
              <div className="text-white flex flex-row gap-6">
                <Image
                  src={i10}
                  className=" rounded-[18px] h-[98px] w-[98px] "
                />
                <div className="grid gap-[11px] justify-center">
                  <div>
                    <p className="font-bold text-[23px] ">Steph Golik</p>
                  </div>
                  <div>
                    <p className="text-[12px] gap-1">ID No : 123456789</p>
                    <p className="text-[12px] gap-1">Join : 08/08/2024</p>
                    <p className="text-[12px] gap-1">Expire : 08/08/2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <Gdooo/>
        {/* <div className="gap-6 grid pb-[95px]">
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
        </div> */}
        <Slider234 />
      </div>

      {/* <div className="fixed bottom-0 z-10 min-w-[390px]">
        <div className="relative flex justify-center items-baseline ">
          <button className="absolute p-3 bg-black rounded-full flex items-center justify-center top-[-21px]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 11V8C7 5.23858 9.23858 3 12 3C14.419 3 16.4367 4.71776 16.9 7M8.8 21H15.2C16.8802 21 17.7202 21 18.362 20.673C18.9265 20.3854 19.3854 19.9265 19.673 19.362C20 18.7202 20 17.8802 20 16.2V15.8C20 14.1198 20 13.2798 19.673 12.638C19.3854 12.0735 18.9265 11.6146 18.362 11.327C17.7202 11 16.8802 11 15.2 11H8.8C7.11984 11 6.27976 11 5.63803 11.327C5.07354 11.6146 4.6146 12.0735 4.32698 12.638C4 13.2798 4 14.1198 4 15.8V16.2C4 17.8802 4 18.7202 4.32698 19.362C4.6146 19.9265 5.07354 20.3854 5.63803 20.673C6.27976 21 7.11984 21 8.8 21Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="bg-[#FD9318] flex flex-row justify-around items-center rounded-t-[12px] pb-[32px]">
          <div className="grid gap-1 justify-center pt-[11.5px]">
            <button className=" flex justify-center items-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.83331 21.4997V14.0997C9.83331 13.5397 9.83331 13.2597 9.94231 13.0457C10.0382 12.8576 10.1912 12.7046 10.3793 12.6087C10.5932 12.4997 10.8733 12.4997 11.4333 12.4997H14.2333C14.7934 12.4997 15.0734 12.4997 15.2873 12.6087C15.4755 12.7046 15.6284 12.8576 15.7243 13.0457C15.8333 13.2597 15.8333 13.5397 15.8333 14.0997V21.4997M11.851 3.26375L5.0687 8.53888C4.61533 8.8915 4.38865 9.06781 4.22534 9.28861C4.08068 9.4842 3.97291 9.70454 3.90734 9.93881C3.83331 10.2033 3.83331 10.4905 3.83331 11.0648V18.2997C3.83331 19.4198 3.83331 19.9799 4.0513 20.4077C4.24305 20.784 4.54901 21.09 4.92533 21.2818C5.35316 21.4997 5.91321 21.4997 7.03331 21.4997H18.6333C19.7534 21.4997 20.3135 21.4997 20.7413 21.2818C21.1176 21.09 21.4236 20.784 21.6153 20.4077C21.8333 19.9799 21.8333 19.4198 21.8333 18.2997V11.0648C21.8333 10.4905 21.8333 10.2033 21.7593 9.93881C21.6937 9.70454 21.5859 9.4842 21.4413 9.28861C21.278 9.06781 21.0513 8.8915 20.5979 8.53888L13.8156 3.26376C13.4643 2.9905 13.2886 2.85388 13.0947 2.80136C12.9235 2.75502 12.7431 2.75502 12.572 2.80136C12.378 2.85388 12.2023 2.9905 11.851 3.26375Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-center items-center text-[10px] text-[#ffffff]">
              Home
            </p>
          </div>

          <div className="grid gap-1 justify-center pt-[15px]">
            <button className="flex justify-center items-center w- ">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.5 21V15.6C15.5 15.0399 15.5 14.7599 15.391 14.546C15.2951 14.3578 15.1422 14.2049 14.954 14.109C14.7401 14 14.4601 14 13.9 14H11.1C10.5399 14 10.2599 14 10.046 14.109C9.85785 14.2049 9.70487 14.3578 9.60899 14.546C9.5 14.7599 9.5 15.0399 9.5 15.6V21M3.5 7C3.5 8.65685 4.84315 10 6.5 10C8.15685 10 9.5 8.65685 9.5 7C9.5 8.65685 10.8431 10 12.5 10C14.1569 10 15.5 8.65685 15.5 7C15.5 8.65685 16.8431 10 18.5 10C20.1569 10 21.5 8.65685 21.5 7M6.7 21H18.3C19.4201 21 19.9802 21 20.408 20.782C20.7843 20.5903 21.0903 20.2843 21.282 19.908C21.5 19.4802 21.5 18.9201 21.5 17.8V6.2C21.5 5.0799 21.5 4.51984 21.282 4.09202C21.0903 3.71569 20.7843 3.40973 20.408 3.21799C19.9802 3 19.4201 3 18.3 3H6.7C5.5799 3 5.01984 3 4.59202 3.21799C4.21569 3.40973 3.90973 3.71569 3.71799 4.09202C3.5 4.51984 3.5 5.07989 3.5 6.2V17.8C3.5 18.9201 3.5 19.4802 3.71799 19.908C3.90973 20.2843 4.21569 20.5903 4.59202 20.782C5.01984 21 5.57989 21 6.7 21Z"
                  stroke="#FECD95"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className="text-center items-center text-[10px] text-[#FECD95]">
              Store
            </p>
          </div>

          <div className="grid gap-1 justify-center pt-[14px]">
            <button className="flex justify-center items-center ">
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.1667 11H14.1667M16.1667 9V13M9.16667 12H9.15667M6.16667 10H6.15667M13.7177 5H10.6156C7.99074 5 6.6783 5 5.64813 5.49743C4.74112 5.9354 3.98752 6.63709 3.48604 7.51059C2.91648 8.5027 2.82297 9.81181 2.63596 12.43L2.38992 15.8745C2.26929 17.5634 3.60691 19 5.30013 19C6.16602 19 6.98718 18.6154 7.54151 17.9502L7.91667 17.5C8.25981 17.0882 8.43142 16.8823 8.62678 16.7159C9.03635 16.3672 9.53217 16.1349 10.0623 16.0436C10.3152 16 10.5832 16 11.1192 16H13.2141C13.7501 16 14.0182 16 14.271 16.0436C14.8012 16.1349 15.297 16.3672 15.7066 16.7159C15.9019 16.8823 16.0735 17.0882 16.4167 17.5L16.7918 17.9502C17.3462 18.6154 18.1673 19 19.0332 19C20.7264 19 22.0641 17.5634 21.9434 15.8745L21.6974 12.43C21.5104 9.81181 21.4169 8.5027 20.8473 7.51059C20.3458 6.63709 19.5922 5.9354 18.6852 5.49743C17.6551 5 16.3426 5 13.7177 5Z"
                  stroke="#FECD95"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className=" flex justify-center text-[10px] text-[#FECD95]">
              Mini Game
            </p>
          </div>

          <div className="grid gap-1 justify-center pt-[13.5px]">
            <button className="flex justify-center items-center">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.5 21.5C20.5 20.1044 20.5 19.4067 20.3278 18.8389C19.94 17.5605 18.9395 16.56 17.6611 16.1722C17.0933 16 16.3956 16 15 16H10C8.60444 16 7.90665 16 7.33886 16.1722C6.06045 16.56 5.06004 17.5605 4.67224 18.8389C4.5 19.4067 4.5 20.1044 4.5 21.5M17 8C17 10.4853 14.9853 12.5 12.5 12.5C10.0147 12.5 8 10.4853 8 8C8 5.51472 10.0147 3.5 12.5 3.5C14.9853 3.5 17 5.51472 17 8Z"
                  stroke="#FECD95"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
            <p className=" flex justify-center text-[10px] text-[#FECD95] ">
              Profile
            </p>
          </div>
        </div>
      </div> */}
     <Navbar/>
    </div>
  );
}

export default page;
