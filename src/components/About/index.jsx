import React from "react";

import { CustomButton } from "../CustomButton";

export const About = () => {
  return (
    <div className="about mt-[90px] flex justify-center ">
      <div className="all flex justify-around ">
        <div className="leftside mr-[108px]">
          <span className="font-bold font-body text-[36px] uppercase text-[#FFFFFF]">
            Introduction
          </span>
          <br />
          <span className="font-extralight uppercase text-[36px] text-[#FFFFFF]">
            TO HYDRA VR
          </span>
          <div className="botton-left mt-[97px]">
            <img
              className=""
              src={require("../../img/Mask group.png")}
              alt=""
            />
          </div>
        </div>
        {/* right */}
        <div className="rightside">
          <div className="botton-right w-[550px]">
            <p className="text-[16px] font-body text-[#FFFFFF] mb-[150px]">
              Vitae sapien pellentesque habitant morbi tristique senectus et
              netus et. Feugiat nibh sed pulvinar proin gravida hendrerit
              lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt
              nunc. Viverra aliquet eget sit amet tellus. Ornare lectus sit amet
              est placerat in. Lectus magna fringilla urna porttitor rhoncus
              vitae.
            </p>
            <span className="font-bold font-body text-[36px] uppercase text-[#FFFFFF] ">
              About
            </span>
            <br />
            <span className="font-extralight uppercase text-[36px] text-[#FFFFFF]">
              TO HYDRA VR
            </span>
            <p className="text-[16px] text-[#FFFFFF] mt-[42px] mb-[40px]">
              Eget mi proin sed libero enim sed faucibus turpis. Nisl rhoncus
              mattis rhoncus urna neque viverra justo. Vivamus at augue eget
              arcu dictum. Ultrices gravida dictum fusce ut placerat orci.
              Aenean et tortor at risus viverra adipiscing at in. Mattis aliquam
              faucibus purus in massa. Est placerat in egestas erat imperdiet
              sed. Consequat semper viverra nam libero justo laoreet sit amet.
              Aliquam etiam erat velit scelerisque in dictum non consectetur a.
              Laoreet sit amet cursus sit amet. Vel eros donec ac odio tempor
              orci dapibus. Sem nulla pha retra diam sit amet nisl suscipit
              adipiscing bibendum. Leo a diam sollicitudi n tempor.
            </p>
            <CustomButton title={'lets get in touch'}/>
          </div>
        </div>
      </div>
    </div>
  );
};
