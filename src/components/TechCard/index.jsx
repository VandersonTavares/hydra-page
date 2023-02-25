import React from "react";

export const TechCard = ({image, size}) => {
  return (
    <div className={`w-[250px] h-[250px] flex justify-center content-center`}>
      <img src={image} alt="tech-images" className={size}/>
    </div>
  );
};
