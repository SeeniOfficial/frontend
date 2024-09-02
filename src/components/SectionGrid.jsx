import React from "react";
import mangoes from "../assets/mangoes.png";
import oshodi from "../assets/Oshodi.png";
import laundry from "../assets/laundry.png";
import market from "../assets/market.png";

export const SectionGrid = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <img className="object-contain rounded-lg w-full" src={mangoes} alt="mangoes" />
      <img className="object-contain rounded-lg w-full" src={oshodi} alt="mangoes" />
      <img className="object-contain rounded-lg w-full" src={laundry} alt="mangoes" />
      <img className="object-contain rounded-lg w-full" src={market} alt="mangoes" />
    </div>
  );
};
