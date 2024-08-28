import React, { useState } from "react";
import { toogleAppTheme } from "../hooks/toogleAppTheme";
import { Link } from "react-router-dom";

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
    <div className="bg-white py-4 flex items-center justify-between px-10">
      <div className="logo">Logo</div>
      <div className="flex items-center">
        <div className="nav-items space-x-4">
          <Link to="#">Home</Link>
          <Link to="#about">About</Link>
          <Link to="#services">Services</Link>
          <Link to="#contact">Contact</Link>
        </div>
        <div className="flex justify-end gap-2 items-center">
          <button onClick={() => toggleDarkMode()} className="p-2">
          {!darkMode ? <div>LightMode</div> : <div>DarkMode</div>}
          </button>
        </div>
      </div>
    </div>
  );
};
