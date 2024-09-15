import React from "react";
import { motion } from "framer-motion";
import { LinkItem } from "./LinkItem";
import { DashboardLinks } from "./DashboardLinks";

export const Sidebar = ({ isOpen, setIsOpen }) => {
  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "-100%" },
  };

  return (
    <>
      <nav className="hidden md:flex md:flex-col gap-12 pt-10 pl-10 w-1/4 bg-white p-4">
        <DashboardLinks />
      </nav>
        <motion.nav 
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={sidebarVariants}
        transition={{ duration: 0.3 }}
        style={{ translateX: "0%" }}
        className="md:hidden absolute z-20 h-full w-2/3 bg-white flex flex-col gap-10 py-12 pl-10 p-4">
          <DashboardLinks />
        </motion.nav>
    </>
  );
};
