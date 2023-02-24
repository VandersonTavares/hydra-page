import React from "react";

import { Card } from "../Card";

import firstImg from "../../img/Maskgroups.png";
import secondImg from "../../img/Maskgroup2.png";
import thirdImg from "../../img/Maskgroup3.png";
import fourthImg from "../../img/Maskgroup4.png";

export const Service = () => {
  return (
    <div className="about mt-[80px] flex flex-col justify-center">
      <div className="about-top flex justify-center">
        <div className="w-[639px]">
          <span className="font-bold font-body text-[36px] uppercase text-[#FFFFFF]">
            Why Build
          </span>
          <br />
          <div className="flex p-0">
            <span className="font-extralight uppercase text-[36px] text-[#FFFFFF] mt-[13px]">
              WITH HYDRA?
            </span>
            <svg
              width="228"
              height="100"
              viewBox="0 0 228 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M198.833 50L157.167 50M198.833 50L182.167 66.6667M198.833 50L182.167 33.3334"
                stroke="#C0B7E8"
                stroke-width="3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path d="M157.5 50H0" stroke="#C0B7E8" stroke-width="3" />
            </svg>
          </div>
        </div>
        <div className="says">
          <p className="text-[16px] font-body text-[#FFFFFF] mb-[150px] w-[639px] h-[70px]">
            Vitae sapien pellentesque habitant morbi tristique senectus et netus
            et. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Mi sit
            amet mauris commodo quis imperdiet massa tincidunt nunc. Viverra
            aliquet eget sit amet tellus. Ornare lectus sit amet est placerat
            in. Lectus magna fringilla urna porttitor rhoncus vitae.
          </p>
        </div>
      </div>
      <div className="about-bottom flex flex-wrap justify-center mr-[11px]">
        <Card title={"simulation"} image={firstImg} />
        <Card title={"education"} image={secondImg} />
        <Card title={"self-care"} image={thirdImg} />
        <Card title={"outdoor"} image={fourthImg} />
      </div>
    </div>
  );
};
