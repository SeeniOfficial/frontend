import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiHighHeel } from "react-icons/gi";
import { LuUtensils } from "react-icons/lu";
import { RiHotelBedFill } from "react-icons/ri";
import { GiHairStrands } from "react-icons/gi";
import { ImSwitch } from "react-icons/im";
import {
  FaAngleLeft,
  FaAngleRight,
  FaCamera,
  FaCompass,
  FaTrophy,
} from "react-icons/fa";
import { MdCookie, MdFavorite } from "react-icons/md";
import { PiBookOpenFill } from "react-icons/pi";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import location from "../../assets/location.png";
import { AppLayout } from "../../components/AppLayout";
import { Card } from "../../components/Card";
import storesData from "./stores.json";

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

export const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [activeCategory, setActiveCategory] = useState("restaurants");
  const [userLocation, setUserLocation] = useState(null);
  const [nearbyStores, setNearbyStores] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);
  const [dailyNeeds, setDailyNeeds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSearchResults, setShowSearchResults] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);
  const scrollContainerRef3 = useRef(null);

  const scroll = (direction, containerRef) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.offsetWidth * 0.75; // Scroll 75% of the container width
      container.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setUserLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );
  }, []);

  useEffect(() => {
    if (userLocation) {
      // Filter stores based on the user's location (city)
      // For simplicity, we'll just use the first store's city
      const userCity = storesData[0].location.city;
      const filteredStores = storesData.filter(
        (store) => store.location.city === userCity
      );
      setNearbyStores(filteredStores);

      // Set popular products and daily needs
      const allProducts = filteredStores.flatMap((store) => store.products);
      setPopularProducts(allProducts.slice(0, 5)); // Take first 5 products as popular
      setDailyNeeds(allProducts.slice(5, 10)); // Take next 5 products as daily needs
    }
  }, [userLocation]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleCatClick = (cat) => {
    setActiveCategory(cat);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filteredSuggestions = storesData.filter((store) => {
        const storeMatches = store.name
          .toLowerCase()
          .includes(value.toLowerCase());
        const productMatches = store.products.some((product) =>
          product.categories.some((category) =>
            category.toLowerCase().includes(value.toLowerCase())
          )
        );
        return storeMatches || productMatches;
      });
      setSuggestions(filteredSuggestions);
    } else {
      showSearchResults(false)
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (storeName) => {
    setSearchTerm(storeName);
    setSuggestions([]);
    setShowSearchResults(true);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setShowSearchResults(true);
    }
  };

  const renderContent = () => {
    const storesToDisplay = showSearchResults
    ? storesData.filter((store) => {
        const storeMatches = store.name.toLowerCase().includes(searchTerm.toLowerCase());
        const productMatches = store.products.some(product =>
          product.categories.some(category =>
            category.toLowerCase().includes(searchTerm.toLowerCase())
          )
        );
        return storeMatches || productMatches;
      })
    : "";
    switch (activeTab) {
      case "categories":
        return <div>Categories content here</div>;
      case "favourites":
        return <div>Favourites content goes here</div>;
      case "rankings":
        return <div>Rankings content goes here</div>;
      // case "search":
      //   return null;
      default:
        return (
          <>
            <div className="relative mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {showSearchResults ? "Search Results" : "Stores Near You"}
        </h2>
        <motion.div
          ref={scrollContainerRef}
          className="relative flex overflow-x-hidden gap-10 mb-8 w-full pb-4"
        >
          {showSearchResults && storesToDisplay.map((store) => (
            <Card
              key={store.name}
              roundedCorners
              image="https://picsum.photos/id/341/5000/3337" // Replace with actual store images
              title={store.name}
              tag="Open" // Add actual open/closed status if available
              description={
                <div className="flex items-center gap-0.5 text-xs text-secondary font-thin">
                  <HiOutlineLocationMarker />
                  {store.location.address}
                </div>
              }
              padding={true}
              footer={
                <div className="flex-col justify-between items-center w-full">
                  <div className="flex items-center justify-end">
                    <span className="text-neutral text-xl">★</span>
                    <span className="font-semibold">4.85</span>
                  </div>
                  <motion.span
                    className="text-grey text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {store.keywords.join(", ")}
                  </motion.span>
                </div>
              }
              imageClasses="rounded-xl"
              cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
            />
          ))}
          {!showSearchResults && nearbyStores.map((store) => (
            <Card
              key={store.name}
              roundedCorners
              image="https://picsum.photos/id/341/5000/3337" // Replace with actual store images
              title={store.name}
              tag="Open" // Add actual open/closed status if available
              description={
                <div className="flex items-center gap-0.5 text-xs text-secondary font-thin">
                  <HiOutlineLocationMarker />
                  {store.location.address}
                </div>
              }
              padding={true}
              footer={
                <div className="flex-col justify-between items-center w-full">
                  <div className="flex items-center justify-end">
                    <span className="text-neutral text-xl">★</span>
                    <span className="font-semibold">4.85</span>
                  </div>
                  <motion.span
                    className="text-grey text-xs"
                    whileHover={{ scale: 1.05 }}
                  >
                    {store.keywords.join(", ")}
                  </motion.span>
                </div>
              }
              imageClasses="rounded-xl"
              cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
            />
          ))}
        </motion.div>
      </div>
            <div className="relative mb-8">
              <h2 className="text-2xl font-semibold mb-4">Popular Products</h2>
              <div className="flex gap-4">
                <motion.div
                  ref={scrollContainerRef2}
                  className="relative flex overflow-x-hidden gap-10 mb-8 w-full pb-4"
                >
                  {popularProducts.map((product, index) => (
                    <Card
                      key={index}
                      roundedCorners
                      image="https://picsum.photos/id/627/2509/1673" // You may want to add actual product images
                      title={product.name}
                      padding={true}
                      footer={
                        <motion.span
                          className="text-green-600 font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {product.categories.join(", ")}
                        </motion.span>
                      }
                      imageClasses="rounded-xl"
                      cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
                    />
                  ))}
                </motion.div>
                <AnimatePresence>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-1/3 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scroll("left", scrollContainerRef2)}
                  >
                    <FaAngleLeft />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 top-1/3 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scroll("right", scrollContainerRef2)}
                  >
                    <FaAngleRight />
                  </motion.button>
                </AnimatePresence>
              </div>
            </div>
            <div className="relative mb-8">
              <h2 className="text-2xl font-semibold mb-4">Daily Needs</h2>
              <div className="flex flex-wrap gap-4">
                <motion.div
                  ref={scrollContainerRef3}
                  className="relative flex overflow-x-hidden gap-10 mb-8 w-full pb-4"
                >
                  {dailyNeeds.map((need, index) => (
                    <Card
                      key={index}
                      roundedCorners
                      image="https://picsum.photos/id/491/5000/4061" // You may want to add actual product images
                      title={need.name}
                      padding={true}
                      footer={
                        <motion.span
                          className="text-green-600 font-semibold"
                          whileHover={{ scale: 1.05 }}
                        >
                          {need.categories.join(", ")}
                        </motion.span>
                      }
                      imageClasses="rounded-xl"
                      cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
                    />
                  ))}
                </motion.div>
                <AnimatePresence>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute left-0 top-1/3 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scroll("left", scrollContainerRef3)}
                  >
                    <FaAngleLeft />
                  </motion.button>
                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-0 top-1/3 bg-white p-3 rounded-full shadow-md"
                    onClick={() => scroll("right", scrollContainerRef3)}
                  >
                    <FaAngleRight />
                  </motion.button>
                  {/* </>
          )} */}
                </AnimatePresence>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div className="relative bg-whyte w-full mx-auto px-8 py-6 md:px-12">
      <div className="flex w-full justify-between items-center font-bold gap-4 md:gap-10 text-xs md:text-md overflow-x-auto scrollbar-hide">
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
          className={`hidden cursor-pointer md:flex items-center gap-1 h-7 px-2 rounded-full bg-grey/20 w-72 border-2 border-grey/0 ${
            activeTab === "search" ? "" : "text-gray-800"
          }`}
        >
          <FiSearch className="text-secondary" />
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-transparent outline-none w-full font-normal flex items-center align-middle"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Add this line
          />
          {suggestions.length > 0 && !showSearchResults && (
            <div className="absolute bg-white border border-gray-300 top-14 rounded-md mt-1 z-10 w-72">
              {suggestions.map((store) => (
                <div
                  key={store.name}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(store.name)} // Use the new handler
                >
                  <strong>{store.name}</strong>
                  <div className="text-sm text-gray-500">
                    {store.products.map((product) =>
                      product.categories.map((category) => (
                        <span key={category} className="mr-1">
                          {category}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="text-white px-4 md:px-8 bg-gradient-to-r from-green-950 to-green-950 via-green-900 my-2 flex flex-col justify-center h-32 md:h-40">
        <div className="text-xl md:text-2xl font-bold">Dashboard</div>
      </div>
      <div
          className={`md:hidden cursor-pointer flex items-center gap-1 h-7 px-2 rounded-full bg-grey/20 w-72 border-2 border-grey/0 ${
            activeTab === "search" ? "" : "text-gray-800"
          }`}
        >
          <FiSearch className="text-secondary" />
          <input
            type="search"
            name="search"
            placeholder="Search"
            className="bg-transparent outline-none w-full font-normal flex items-center align-middle"
            value={searchTerm}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown} // Add this line
          />
          {suggestions.length > 0 && !showSearchResults && (
            <div className="absolute bg-white border border-gray-300 top-14 rounded-md mt-1 z-10 w-72">
              {suggestions.map((store) => (
                <div
                  key={store.name}
                  className="p-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => handleSuggestionClick(store.name)} // Use the new handler
                >
                  <strong>{store.name}</strong>
                  <div className="text-sm text-gray-500">
                    {store.products.map((product) =>
                      product.categories.map((category) => (
                        <span key={category} className="mr-1">
                          {category}
                        </span>
                      ))
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      {/* Categories */}
      <div className="flex w-full justify-between gap-6 mb-8 overflow-x-auto scrollbar-hide py-4 px-1">
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
