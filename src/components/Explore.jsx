import React, { useRef, useState } from "react";
import { Card } from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import location from "../assets/location.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";


const deals = [
  {
    id: 1,
    title: "Luxury Eats",
    restaurant: (
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
        </motion.span>
      </div>
    ),
    price: 1000,
    image: location,
    status: "Open",
  },
];

const recentlyAdded = [
  {
    id: 1,
    title: "Luxury Eats",
    restaurant: (
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
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
      <div className="flex items-center justify-between text-secondary font-thin"><HiOutlineLocationMarker />Tasty Restaurant</div>
    ),
    footer: (
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-neutral text-xl">★</span>
          <span className="font-semibold">4.85</span>
        </div>
        <motion.span
          className="text-green-600 font-semibold"
          whileHover={{ scale: 1.05 }}
        >
          ₦1,000 delivery fee
        </motion.span>
      </div>
    ),
    price: 1000,
    image: location,
    status: "Open",
  },
];

export const Explore = () => {
  const [showButtons, setShowButtons] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);  

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    const containEr = scrollContainerRef2.current
    if (container) {
      const scrollAmount = container.offsetWidth * 0.75; // Scroll 75% of the container width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
    if (containEr) {
      const scrollAmount = container.offsetWidth * 0.75; // Scroll 75% of the container width
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Best Deals */}
      <h2 className="text-2xl font-semibold mb-4">Best Deals</h2>
      <motion.div ref={scrollContainerRef} className="flex overflow-x-hidden gap-10 mb-8 w-full pb-4">
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
            imageClasses='rounded-xl'
            cardStyles="w-[20em] relative flex-none cursor-pointer"
          />
        ))}
      </motion.div>
      <AnimatePresence>
          {/* {showButtons && (
            <> */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('left')}
              >
                <FaAngleLeft />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('right')}
              >
               <FaAngleRight />
              </motion.button>
            {/* </>
          )} */}
        </AnimatePresence>

      {/* Recently Added */}
      <h2 className="text-2xl font-semibold mb-4">Recently Added</h2>
      <div>
      <motion.div ref={scrollContainerRef2} className="flex space-x-4 overflow-x-hidden pb-4">
        {recentlyAdded.map((item) => (
          <Card
          key={item.id}
          roundedCorners
          image={item.image}
          title={item.title}
          tag={item.status}
          description={item.restaurant}
          padding={true}
          footer={item.footer}
          imageClasses='rounded-xl'
          cardStyles="w-[20em] relative flex-none cursor-pointer"
        />
      ))}
      </motion.div>
      <AnimatePresence>
          {/* {showButtons && (
            <> */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 bottom-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('left')}
              >
                <FaAngleLeft />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 bottom-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('right')}
              >
               <FaAngleRight />
              </motion.button>
            {/* </>
          )} */}
        </AnimatePresence>
      </div>
    </>
  );
};
