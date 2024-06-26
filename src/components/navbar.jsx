import React from 'react'

export default function navbar() {
  return (
    <div className="fixed bottom-0 z-10 min-w-[390px]">
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
      </div>
  )
}
