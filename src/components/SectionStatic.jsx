import React from "react";
import storeImg from "../assets/2nd image.png";

export const SectionStatic = () => {
  return (
    <div className="w-full h-fit">
      <img className="object-contain w-full h-48 md:h-[30em]" src={storeImg} alt="" />
    </div>
  );
};
