import React from "react";

export const CustomButton = ({title, size}) => {
  return (
    <button className={`h-[48px] text-[12px] font-body font-bold uppercase rounded-[20px] px-[25px] py-[7px] bg-gradient-to-r from-[#8176AF] to-[#C0B7E8] + ${size}`}>
      {title}
    </button>
  );
};
