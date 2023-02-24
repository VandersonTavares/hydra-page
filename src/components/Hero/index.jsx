import React from "react";

import { ContactButtons } from "../ContactButtons";
import { CustomButton } from "../CustomButton";

export const Hero = () => {
  return (
    <div className="hero ">
      <div className="flex items-center justify-between relative">
        {/* left */}
        <div className="left mt-20 ">
          <span className="text-[60px] font-bold text-white font-body">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Dive
            </span>{" "}
            Into The Depths
          </span>
          <br />
          <span className="text-[60px] font-bold text-white font-body">
            Of{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8176AF] to-[#C0B7E8]">
              Virtual Reality
            </span>
          </span>
          <p className="font-body text-[16px] w-[600px] text-[#FFFFFF] mt-[36px] mb-[40px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A labore
            neque aperiam, expedita harum modi voluptatem assumenda eaque,
            doloremque sint consequuntur praesentium explicabo numquam aliquam
            minus asperiores vero vitae eos?
          </p>
          <div className="flex">
            <div className="mt-[23px]">
              <CustomButton title={"build your world"} />
            </div>
            <div className="arrow">
              <svg
                width="100"
                height="100"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M70.8333 50L29.1667 50M70.8333 50L54.1667 66.6667M70.8333 50L54.1667 33.3333"
                  stroke="#C0B7E8"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="md: right absolute top-[-250px] right-0 z-[-1]">
          <img src={require("../../img/Group 3.png")} alt="" />
        </div>
      </div>
      <div>
        <ContactButtons />
      </div>
    </div>
  );
};
