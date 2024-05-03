"use client"
import React from 'react'
import IMG from "/public/images/lines.png";
import i10 from "/public/images/10.png";
import Image from 'next/image';

export default function gdooo() {
  return (
    <div>
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
    </div>
  )
}
