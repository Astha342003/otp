import React from "react";
import Link from "next/link";
import Timer from "/public/images/timer.png";
const page = () => {
  return (
    
    <div class="container">
      
      <div class="grid pr-[20px] pl-[20px] justify-between ">
        <div class="grid gap-6">
          <div class="w-auto">
            <button class="bg-[#B5A7F4] h-10 w-10 gap-[24px] mt-[44px]  flex justify-center items-center rounded-full">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 6L6 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6 6L18 18"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div class="grid gap-3" >
            <p class="text-[28px] h-[34px] font-bold ">We just sent an SMS</p>
        
            <p class="text-[14px] text-[#6D6D6D] font-normal">Enter the security code we sent to <br />
            +1 (555) 000-0000</p>
          </div>

          <div class="flex flex-row gap-2 justify-center items-center w-full">
            <input
              type="text"
              class="w-[52px] h-[56px]  rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
            <input
              type="text"
              class="w-[52px] h-[56px]  rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
            <input
              type="text"
              class="w-[52px] h-[56px]  rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
            <input
              type="text"
              class="w-[52px] h-[56px] rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
            <input
              type="text"
              class="w-[52px] h-[56px] rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
            <input
              type="text"
              class="w-[52px] h-[56px] rounded-[12px] border-4 text-center border-transparent focus:border-[#B5A7F4] focus:outline-none"
            />
          </div>
          <div class="h-[19px] w-[347px] gap-[7px] text-center flex justify-between">
            <div class="text-[#6D6D6D]">
            Didn’t get the code?
            <Link href="#" className="font-semibold text-black">
            Resend it
            </Link>
            </div>
            <div class="flex flex-row gap-1 ">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 0C4.2655 0 0 4.2655 0 9.5C0 14.7345 4.2655 19 9.5 19C14.7345 19 19 14.7345 19 9.5C19 4.2655 14.7345 0 9.5 0ZM13.6325 12.8915C13.4995 13.1195 13.262 13.243 13.015 13.243C12.8915 13.243 12.768 13.2145 12.654 13.1385L9.709 11.381C8.9775 10.944 8.436 9.9845 8.436 9.139V5.244C8.436 4.8545 8.759 4.5315 9.1485 4.5315C9.538 4.5315 9.861 4.8545 9.861 5.244V9.139C9.861 9.481 10.146 9.9845 10.4405 10.1555L13.3855 11.913C13.7275 12.1125 13.8415 12.5495 13.6325 12.8915Z"
                  fill="#FD9318"
                />
              </svg>
              <p class="text-[13px] font-bold">45s</p>
            </div>
          </div>
        </div>
        <div class="flex justify-center items-center pt-[230px]">
          <button class="box-shadow min-h-[56px] w-full rounded-[120px] text-white font-semibold bg-[#B5A7F4] border-white border-[1px] ">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
