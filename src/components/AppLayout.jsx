import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { AppHeader } from "./AppHeader";
import { Sidebar } from "./Sidebar";

export const AppLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [children]); 

  return (
    <div className="min-h-screen bg-gray-100">
      <AppHeader toggleSidebar={toggleSidebar} sideBarOpen={isSidebarOpen}/>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {children}
      </div>
      {isSidebarOpen && (
        <div
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
      <Footer />
    </div>
  );
};
