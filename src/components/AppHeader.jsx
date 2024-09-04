import React from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import logo from "../assets/logo-primary.png";
import { Avatar } from "./Avatar";

export const AppHeader = ({ toggleSidebar, user }) => (
  <header className="bg-white mb-0.5">
    <div className="px-4 md:px-12 py-4 flex justify-between items-center">
      <div className="flex items-center">
        <div className="">
          <img src={logo} alt="seeni logo" className="h-8 md:h-auto" />
        </div>
      </div>
      <div className="flex gap-2 items-center">
        <Avatar user={user} />
        <Button
          label="Log Out"
          btnStyles="bg-error text-white px-4 py-2 rounded-lg"
        />
        <Button
          label={
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          }
          click={toggleSidebar}
          btnStyles="md:hidden"
        />
      </div>
    </div>
  </header>
);
