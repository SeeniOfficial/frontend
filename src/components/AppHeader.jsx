import React from "react";
import { Button } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-primary.png";
import { Avatar } from "./Avatar";
import { useAuthStore } from "../store/authStore";

export const AppHeader = ({ toggleSidebar, sideBarOpen }) => {
  const { user, logout } = useAuthStore()
  return (
    <header className="bg-white mb-0.5">
      <div className="px-4 md:px-12 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="">
            <img src={logo} alt="seeni logo" className="w-24  md:h-auto" />
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Avatar user={`${user.firstName} ${user.lastName}` || "Ajao Richard"} style="w-10 h-10 p-4 text-sm text-white bg-primary" />
          <Button
            label="Log Out"
            btnStyles="bg-error text-white px-4 py-2 rounded-lg"
            click={() => logout()}
          />
          <motion.button
            onClick={toggleSidebar}
            className="text-primary md:hidden"
            animate={sideBarOpen ? "open" : "closed"}
          >
            {sideBarOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 9h16.5m-16.5 6.75h16.5"
                />
              </svg>
            )}
          </motion.button>
        </div>
      </div>
    </header>
  );
};
