import React from "react";

export const Header = () => {
  const liStyle = "uppercase text-[#FFFFFF] font-bold mr-10";

  const buttonStyle =
    "w-[150px] text-sm font-body font-bold uppercase rounded-[20px] px-[25px] py-[7px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] mr-[50px]";

  return (
    // header
    <div className="header flex justify-between items-center">
      <div className="logo">
        <img src={require("../../img/logo.png")} alt="" />
      </div>
      <div className="ml-44 menu flex text-sm">
        <ul className="flex">
          <li className={liStyle}>About</li>
          <li className={liStyle}>Services</li>
          <li className={liStyle}>Technologies</li>
          <li className={liStyle}>How to</li>
        </ul>
      </div>
      <div className="buttons flex">
        <button
          className={
            "mr-[35px] uppercase font-bold border-[2px] rounded-[20px] border-[#FFFFFF] px-[25px] py-[7px] text-[#FFFFFF]"
          }
        >
          Contact Us
        </button>
        <button className={buttonStyle}>Join Hydra</button>
      </div>
    </div>
  );
};
