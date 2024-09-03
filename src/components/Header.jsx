import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// import { toogleAppTheme } from "../hooks/toogleAppTheme";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-primary.png";
import { Button } from "./Button";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const menuVariants = {
    closed: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  const iconVariants = {
    closed: { rotate: 0 },
    open: { rotate: 180 },
  };

  return (
    <div className="bg-white dark:bg-drkprimary py-4 md:py-6 flex justify-between items-center px-4 md:px-20">
      <div className="">
        <img src={logo} alt="seeni logo" className="h-8 md:h-auto" />
      </div>
      <div className="md:hidden flex items-center">
        <motion.button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-primary"
          variants={iconVariants}
          animate={menuOpen ? "open" : "closed"}
        >
          {menuOpen ? (
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
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="absolute top-16 left-0 w-2/3 h-screen bottom-0 bg-white dark:bg-drkprimary z-50 md:hidden"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center gap-4 p-6 text-sm">
              <div className="flex flex-col text-left w-full gap-4">
                <a
                  href="/"
                  className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
                >
                  Home
                </a>
                <a
                  href="/"
                  className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
                >
                  About
                </a>
                <a
                  href="/"
                  className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
                >
                  Contact Us
                </a>
              </div>
              <div className="flex flex-col w-full items-start gap-4 font-bold mt-4">
                <Button
                  label="Log In"
                  btnStyles="w-2/3 px-4 py-2 rounded-lg text-primary"
                  btnLabelStyles="mx-auto"
                  click={() => navigate("/sign-in")}
                />
                <Button
                  label="Get Started"
                  btnStyles="w-2/3 px-4 py-2 rounded-lg bg-primary text-white"
                  btnLabelStyles="mx-auto"
                  click={() => navigate("/sign-up")}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className="hidden md:flex flex-row items-center gap-10 w-full justify-end text-sm">
        <div className="flex flex-row items-center gap-12">
          <a
            href="/"
            className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
          >
            Home
          </a>
          <a
            href="/"
            className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
          >
            About
          </a>
          <a
            href="/"
            className="text-secondary dark:text-primary dark:hover:text-secondary hover:text-primary font-bold"
          >
            Contact Us
          </a>
        </div>
        <div className="flex flex-row items-center w-1/3 gap-4 font-bold">
          <Button
            label="Log In"
            btnStyles="w-1/2  px-4 py-2 rounded-lg px-4 py-2 rounded-lg text-primary"
            btnLabelStyles="mx-auto"
            click={() => navigate("/sign-in")}
          />
          <Button
            label="Get Started"
            btnStyles="w-1/2  px-4 py-2 rounded-lg px-4 py-2 rounded-lg bg-primary text-white"
            btnLabelStyles="mx-auto"
            click={() => navigate("/sign-up")}
          />
        </div>
      </div>
    </div>
  );
};
