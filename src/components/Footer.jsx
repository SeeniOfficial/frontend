import React from "react";
import logo from "../assets/logo-white.png";
import insta from "../assets/insta.png";
import x from "../assets/x.png";
import yt from "../assets/youtube.png";

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-4 md:px-20 w-full">
      <div className="container mx-auto px-4">
        <div className="hidden md:flex justify-between items-center mb-8">
          <div>
            <img className="h-10 object-contain" src={logo} alt="seeni logo" />
          </div>
          <div className="text-center font-bold text-sm">&copy; 2024 Seeni</div>
          <div className="quick-links flex gap-4">
            <a href="#" className="">
              <img className="h-5" src={insta} alt="Seeni Instagram" />
            </a>
            <a href="#" className="">
              <img className="h-5" src={x} alt="Seeni Twitter" />
            </a>
            <a href="#" className="">
              <img className="h-5" src={yt} alt="Seeni YouTube" />
            </a>
          </div>
        </div>
        {/* mobile */}
        <div className="flex justify-between items-center mb-8 md:hidden">
          <div>
            <img className="h-10 object-contain" src={logo} alt="seeni logo" />
          </div>
          <div className="flex flex-col-reverse gap-2">
            <div className="text-center font-bold text-sm">
              &copy; 2024 Seeni
            </div>
            <div className="quick-links flex gap-4">
              <a href="#" className="">
                <img className="h-5" src={insta} alt="Seeni Instagram" />
              </a>
              <a href="#" className="">
                <img className="h-5" src={x} alt="Seeni Twitter" />
              </a>
              <a href="#" className="">
                <img className="h-5" src={yt} alt="Seeni YouTube" />
              </a>
            </div>
          </div>
        </div>
        <hr className="border-whyte" />
      </div>
    </footer>
  );
};
