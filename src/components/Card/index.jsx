import React from "react";

import { CustomButton } from "../CustomButton";


export const Card = ({title, image}) => {
  return (
    // <div className="card w-[310px] h-[511px] bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] ... rounded-[90px]">
    // </div>
    <div className="flex flex-col text-center w-[310px] h-[511px] bg-gradient-radial from-[#3A3456] to-[#211E2E] rounded-[40px] mr-[11px]">
      <div className="img flex justify-center">
        <div className="circle">
          <img className="border-[10px] border-[#0e0e0e52] rounded-[50%]" src={image} alt="" />
        </div>
      </div>
      <div className="texts ">
        <span className="uppercase font-body font-bold text-[24px] text-[#FFFFFF]">
          {title}
        </span>
        <div className="inline-flex items-center justify-center w-full mt-[17px]">
          <hr className="w-[150px] border-[#C0B7E8]" />
        </div>
        <div className="line"></div>
        <p className="text-start text-[12px] font-regular text-[#FFFFFF] font-body">
          Vitae sapien pellentesque habitant morbi nunc. Viverra aliquet
          porttitor rhoncus libero justo laoreet sit amet vitae.
        </p>
      </div>
      <div className="button mt-[25px]">
        <CustomButton title={"try it now"} size={"w-[154px] h-[48px]"}/>
      </div>
    </div>
  );
};
