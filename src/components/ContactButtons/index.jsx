import React from "react";

export const ContactButtons = () => {
  return (
    <div className="contacts flex justify-center mt-7 ">
      <div className="flex justify-evenly buttons text-white font-body  w-[1272px] h-[167px] bg-gradient-to-r from-[#211E2E] via-[#3A3456] to-[#211E2E] ... rounded-[90px]">
        {/* left */}
        <div className="location flex items-center w-[400px]">
          <img
            src={require("../../img/Location-Icon.png")}
            alt=""
            className="m-3 w-[70px] h-[70px]"
          />
          <div className="span">
            <span className="text-[24px] font-bold ">Pay Us a Visit</span>
            <p className="text-[13px] ">
              Union St. Seattle, WA 98101, United States
            </p>
          </div>
        </div>
        <div className="border-l-[1px] solid h-[100px] mt-7 border-[#C0B7E8]/[.33]"></div>

        {/* middle */}
        <div className="location flex items-center w-[300px]">
          <img
            src={require("../../img/phone-call.png")}
            alt=""
            className="m-3 w-[59px] h-[59px]"
          />
          <div className="span">
            <span className="text-[24px] font-bold ">Give Us a Call</span>
            <p className="text-[13px]">(110) 11110-1010</p>
          </div>
        </div>
        <div className="border-l-[1px] solid h-[100px] mt-7 border-[#C0B7E8]/[.33]"></div>

        {/* right */}
        <div className="location flex items-center w-[400px]">
          <img
            src={require("../../img/shape.png")}
            alt=""
            className="m-3 w-[65px] h-[55px]"
          />
          <div className="span">
            <span className="text-[24px] font-bold ">Send Us a Message</span>
            <p className="text-[13px]">Contact@HydraVTech.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};
