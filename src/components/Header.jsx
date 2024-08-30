import React, { useState } from "react";
import { toogleAppTheme } from "../hooks/toogleAppTheme";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-primary.png";
import { Button } from "./Button";

export const Header = () => {

  return (
    <div className="bg-white dark:bg-drkprimary py-6 flex justify-between items-center px-10">
      <div className="">
     <img src={logo} alt="seeni logo" />
      </div>
      <div className="flex items-center gap-10 w-full justify-end text-sm">
        <div className="flex items-center gap-12">
          <a href="/" className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold">
            Home
          </a>
          <a href="/" className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold">
            About
          </a>
          <a  href="/" className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold">
            Contact Us
          </a>
        </div>
        <div className="flex items-center w-1/3 gap-4 font-bold">
          <Button label="Log In" btnStyles="w-1/2 text-primary" btnLabelStyles="mx-auto" />
          <Button label="Get Started" btnStyles="w-1/2 bg-primary text-white" btnLabelStyles="mx-auto" />
        </div>
      </div>
    </div>
  );
};
