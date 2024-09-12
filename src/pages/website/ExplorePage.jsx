import React, { useState } from "react";
import { motion } from "framer-motion";
import { Explore } from "../../components/Explore";
import { PublicLayout } from "../../components/PublicLayout";
import { GiHighHeel } from "react-icons/gi";
import { LuUtensils } from "react-icons/lu";
import { RiHotelBedFill } from "react-icons/ri";
import { GiHairStrands } from "react-icons/gi";
import { ImSwitch } from "react-icons/im";
import { FaCamera, FaCompass, FaTrophy } from "react-icons/fa";
import { MdCookie, MdFavorite } from "react-icons/md";
import { PiBookOpenFill } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { Input } from "../../components/Input";

const categories = [
  { icon: <LuUtensils />, name: "Restaurants" },
  { icon: <RiHotelBedFill />, name: "Hotels" },
  { icon: <GiHighHeel />, name: "Shoes & Clothing" },
  { icon: <GiHairStrands />, name: "Salon" },
  { icon: <ImSwitch />, name: "Electronics" },
  { icon: <FaCamera />, name: "Photography" },
  { icon: <MdCookie />, name: "Confectionary" },
  { icon: <PiBookOpenFill />, name: "Jobs" },
];

export const ExplorePage = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [activeCategory, setActiveCategory] = useState("restaurants");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    console.log(activeTab);
  };

  const handleCatClick = (cat) => {
    setActiveCategory(cat);
    console.log(activeCategory);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "categories":
        return <div>Categories content here</div>;
      case "favourites":
        return <div>Favourites content goes here</div>;
      case "rankings":
        return <div>Rankings content goes here</div>;
      case "search":
        return;
      default:
        return <Explore />;
    }
  };

  return (
    <PublicLayout>
      <div className="bg-whyte w-full mx-auto px-12 py-6 md:px-32">
        <div className="flex justify-between items-center font-bold gap-4 md:gap-10 text-xs md:text-md overflow-hidden scrollbar-hide">
          <div
            className={`cursor-pointer flex items-center gap-1 ${
              activeTab === "explore" ? "text-primary" : "text-gray-800"
            }`}
            onClick={() => handleTabClick("explore")}
          >
            <FaCompass />
            Explore
          </div>
          <div
            className={`cursor-pointer flex items-center gap-1 ${
              activeTab === "categories" ? "text-primary" : "text-gray-800"
            }`}
            onClick={() => handleTabClick("categories")}
          >
            {" "}
              <BiSolidCategoryAlt />
            Categories
          </div>
          <div
            className={`cursor-pointer flex items-center gap-1 ${
              activeTab === "favourites" ? "text-primary" : "text-gray-800"
            }`}
            onClick={() => handleTabClick("favourites")}
          >
            <MdFavorite />
            Favourites
          </div>
          <div
            className={`cursor-pointer flex items-center gap-1 ${
              activeTab === "rankings" ? "text-primary" : "text-gray-800"
            }`}
            onClick={() => handleTabClick("rankings")}
          >
            <FaTrophy />
            Rankings
          </div>
          <div
            className={`cursor-pointer flex items-center gap-1 h-7 px-2 rounded-full bg-grey/20 w-72 border-2  border-grey/0 focus-within:border-2 focus-within:border-secondary ${
              activeTab === "search" ? "" : "text-gray-800"
            }`}
            onClick={() => handleTabClick("search")}
          >
            <FiSearch className="text-secondary" />
            <input type="search" name="search" placeholder="Search" className="bg-transparent outline-none w-full font-normal flex items-center align-middle" id="" />
          </div>
        </div>

        <div className="text-white px-4 md:px-8 bg-gradient-to-r from-green-950 to-green-950 via-green-900 my-2 flex flex-col justify-center h-32 md:h-40">
          <div className="text-xl md:text-2xl font-bold">Explore</div>
          <p className="text-xs">10 items found</p>
        </div>

        {/* Categories */}
        <div className="flex w-full justify-between gap-6 mb-8 overflow-x-auto scrollbar-none py-4 px-1">
          {categories.map((category) => (
            <motion.div
              key={category.name}
              className={`flex flex-col items-center ${
                activeCategory === category.name
                  ? "text-black"
                  : "text-gray-800"
              }`}
              whileHover={{ scale: 1.05 }}
              onClick={() => handleCatClick(category.name)}
            >
              <span
                className={`h-10 w-10 text-center justify-center rounded-full flex items-center ${
                  activeCategory === category.name
                    ? "bg-primary text-white"
                    : "bg-white text-gray-800"
                }`}
              >
                {category.icon}
              </span>
              <span className={`text-xs font-bold`}>{category.name}</span>
            </motion.div>
          ))}
        </div>

        <div className="relative overflow-hidden">{renderContent()}</div>
      </div>
    </PublicLayout>
  );
};
