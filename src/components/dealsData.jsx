import { HiOutlineLocationMarker } from "react-icons/hi";
import location from "../assets/location.png";
import { motion } from "framer-motion";

export const deals = [
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold flex items-center gap-1"
   mt-4          whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="text-xs"><span className="font-light text-xs hidden md:flex">delivery fee</span></span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 2,
      title: "Happy Meal",
      restaurant: <div className="text-secondary">Joyful Eatery</div>,
      rating: 4.85,
      price: 1500,
      image: "happy_meal.jpg",
      status: "Open",
    },
    {
      id: 3,
      title: "King's Burger",
      restaurant: <div className="text-secondary">Royal Burgers</div>,
      rating: 4.46,
      price: 1400,
      image: "kings_burger.jpg",
      status: "Closed",
    },
    {
      id: 4,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
  ];
  
export const recentlyAdded = [
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold flex items-center gap-1"
   mt-4          whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="text-xs"><span className="font-light text-xs hidden md:flex">delivery fee</span></span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 2,
      title: "Happy Meal",
      restaurant: <div className="text-secondary">Joyful Eatery</div>,
      rating: 4.85,
      price: 1500,
      image: "happy_meal.jpg",
      status: "Open",
    },
    {
      id: 3,
      title: "King's Burger",
      restaurant: <div className="text-secondary">Royal Burgers</div>,
      rating: 4.46,
      price: 1400,
      image: "kings_burger.jpg",
      status: "Closed",
    },
    {
      id: 4,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
    {
      id: 1,
      title: "Luxury Eats",
      restaurant: (
        <div className="flex items-center gap-0.5 text-secondary font-thin"><HiOutlineLocationMarker />Takie, Ogbomoso</div>
      ),
      footer: (
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center">
            <span className="text-neutral text-xl">★</span>
            <span className="font-semibold text-secondary">4.85</span>
          </div>
          <motion.span
            className="text-secondary text-lg font-bold mt-4 flex items-center gap-1"
            whileHover={{ scale: 1.05 }}
          >
            ₦1,000 <span className="font-light text-xs hidden md:flex">delivery fee</span>
          </motion.span>
        </div>
      ),
      price: 1000,
      image: location,
      status: "Open",
    },
  ];
  