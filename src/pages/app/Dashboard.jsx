import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
import { HiOutlineLocationMarker } from "react-icons/hi";
import location from "../../assets/location.png";
import { AppLayout } from "../../components/AppLayout";
import { Card } from "../../components/Card";

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

const deals = [
  {
    id: 1,
    title: "Luxury Eats",
    restaurant: (
      <div className="flex items-center justify-between text-secondary font-thin">
        <HiOutlineLocationMarker />
        Tasty Restaurant
      </div>
    ),
    footer: (
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 <span className="text-xs">delivery fee</span>
        </motion.span>
      </div>
    ),
    price: 1000,
    image: location,
    status: "Open",
  },
  // Add more deal objects as needed
];

const popularProducts = [
  {
    id: 1,
    title: "Popular Product 1",
    image: "https://via.placeholder.com/150",
    price: 99.99,
  },
  // Add more popular product objects as needed
];

const dailyNeeds = [
  {
    id: 1,
    title: "Daily Need 1",
    image: "https://via.placeholder.com/150",
    price: 19.99,
  },
  // Add more daily need objects as needed
];

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [activeCategory, setActiveCategory] = useState("restaurants");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      console.log(userLocation)
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, [userLocation]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCatClick = (cat) => {
    setActiveCategory(cat);
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
        return null;
      default:
        return (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Stores Near You</h2>
              {userLocation ? (
                <div className="flex flex-wrap gap-4">
                  {deals.map((deal) => (
                    <Card
                      key={deal.id}
                      roundedCorners
                      image={deal.image}
                      title={deal.title}
                      tag={deal.status}
                      description={deal.restaurant}
                      padding={true}
                      footer={deal.footer}
                      imageClasses="rounded-xl"
                      cardStyles="w-[20em] relative flex-none cursor-pointer"
                    />
                  ))}
                </div>
              ) : (
                <p>Loading location...</p>
              )}
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
              <div className="flex flex-wrap gap-4">
                {popularProducts.map((product) => (
                  <Card
                    key={product.id}
                    roundedCorners
                    image={product.image}
                    title={product.title}
                    padding={true}
                    footer={
                      <motion.span
                        className="text-green-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        ${product.price}
                      </motion.span>
                    }
                    imageClasses="rounded-xl"
                    cardStyles="w-[20em] relative flex-none cursor-pointer"
                  />
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Daily Needs</h2>
              <div className="flex flex-wrap gap-4">
                {dailyNeeds.map((need) => (
                  <Card
                    key={need.id}
                    roundedCorners
                    image={need.image}
                    title={need.title}
                    padding={true}
                    footer={
                      <motion.span
                        className="text-green-600 font-semibold"
                        whileHover={{ scale: 1.05 }}
                      >
                        ${need.price}
                      </motion.span>
                    }
                    imageClasses="rounded-xl"
                    cardStyles="w-[20em] relative flex-none cursor-pointer"
                  />
                ))}
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="bg-whyte w-full mx-auto px-4 py-6 md:px-8">
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
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-transparent outline-none w-full font-normal flex items-center align-middle"
            id=""
          />
        </div>
      </div>

      {/* Categories */}
      <div className="flex w-full justify-between gap-6 mb-8 overflow-x-auto scrollbar-none py-4 px-1">
        {categories.map((category) => (
          <motion.div
            key={category.name}
            className={`flex flex-col items-center ${
              activeCategory === category.name ? "text-black" : "text-gray-800"
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
  );
};
