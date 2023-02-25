import React from "react";

import { CustomButton } from "../CustomButton";

export const TechSection = () => {
  return (
    <div className="techSection flex justify-center mt-[90px]">
      <div className="both relative">
        <div className="top flex z-[-1] top-50 mb-[20px]">
          <img src={require("../../img/Group 5.png")} alt="" />
          
        </div>
        <div className="center-button flex justify-center absolute left-[550px] top-[37%]">
            <div className="bcenter rounded-[50%] flex justify-center content-center">
                <img className="cursor-pointer" src={require('../../img/Group 4.png')} alt="" />
            </div>
        </div>
        <div className="bottom flex justify-around">
          <img className="w-[174px] h-[174px] mt-[70px]" src={require("../../img/Hydra-Tech1 1.png")} alt="" />
          <img src={require("../../img/Hydra-Tech3 1.png")} alt="" />
          <img src={require("../../img/Hydra-Tech2 1.png")} alt="" />
          <img src={require("../../img/Hydra-Tech4 1.png")} alt="" />
        </div>
      </div>
    </div>
  );
};
