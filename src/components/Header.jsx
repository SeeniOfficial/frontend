import React, { useState } from "react";
import { toogleAppTheme } from "../hooks/toogleAppTheme";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/seeni-logo.svg";
import { Button } from "./Button";

export const Header = () => {
  const [colorTheme, setTheme] = toogleAppTheme();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = () => {
    setTheme(colorTheme);
    setDarkMode(!darkMode);
    console.log(colorTheme, darkMode);
  };

  return (
    <div className="bg-white py-6 flex justify-between items-center px-10">
      <div className="">logo</div>
      <div className="flex items-center gap-10 w-full justify-end text-sm">
        <div className="flex items-center gap-12">
          <a href="/" className="text-secondary hover:text-primary font-bold">
            Home
          </a>
          <a href="/" className="text-secondary hover:text-primary font-bold">
            About
          </a>
          <a  href="/" className="text-secondary hover:text-primary font-bold">
            Contact Us
          </a>
        </div>
        <div className="flex items-center w-1/3 gap-4 font-bold">
          <Button label="Log In" btnStyles="w-1/2 text-primary" btnLabelStyles="mx-auto" />
          <Button label="Get Started" btnStyles="w-1/2 bg-primary text-white" btnLabelStyles="mx-auto" />
        </div>
        <div className=" hidden items-center">
          <button onClick={() => toggleDarkMode()} className="p-2">
            {!darkMode ? <div>LightMode</div> : <div>DarkMode</div>}
          </button>
        </div>
      </div>
    </div>
  );
};
