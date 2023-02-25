import React from "react";

import { TechCard } from "../TechCard";

import Unity from "../../img/Hydra-Tech3 1.png"
import Oculus from "../../img/Hydra-Tech2 1.png"
import Unreal from "../../img/Hydra-Tech1 1.png"
import Vive from "../../img/Hydra-Tech4 1.png"

export const TechSection = () => {
  return (
    <div className="techSection flex justify-center mt-[90px]">
      <div className="both relative">
        <div className="top flex z-[-1] top-50 mb-[20px]">
          <img src={require("../../img/Group 5.png")} alt="" />
        </div>
        <div className="center-button flex justify-center absolute left-[550px] top-[40%]">
            <div className="bcenter rounded-[50%] flex justify-center content-center">
                <img className="cursor-pointer" src={require('../../img/Group 4.png')} alt="" />
            </div>
        </div>
        <div className="bottom flex flex-wrap justify-around content-center">
          <TechCard image={Unreal} size={'w-[200px] h-[200px] mt-[20px]'}/>
          <TechCard image={Unity}/>
          <TechCard image={Oculus}/>
          <TechCard image={Vive}/>
        </div>
      </div>
    </div>
  );
};
