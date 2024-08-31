import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Button } from "./Button";

// Import images
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";

const images = [slide1, slide2, slide3, slide4];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const Hero = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, images.length, page);

  const paginate = useCallback((newDirection) => {
    setPage([page + newDirection, newDirection]);
  }, [page]);

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [paginate]);

  return (
    <div className="flex justify-between bg-white py-10 px-12 md:px-32 text-left">
      <div className="w-1/3 flex flex-col gap-2 justify-center">
        <p className="font-bold text-6xl">Discover your perfect match</p>
        <p className="w-2/3">Find unique goods and services tailored just for you</p>
        <Button label="Explore" btnStyles="rounded-md bg-primary w-1/2 text-white font-bold text-sm" />
      </div>
      <div className="relative w-fit h-[30em] rounded-lg overflow-hidden group">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={images[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 }
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
            className="w-full h-full object-cover rounded-lg"
          />
        </AnimatePresence>
        {/* Left Arrow */}
        <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white rounded-full p-2" onClick={() => paginate(-1)}>
            ←
          </button>
        </div>
        {/* Right Arrow */}
        <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="text-white rounded-full p-2" onClick={() => paginate(1)}>
            →
          </button>
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  imageIndex === index ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setPage([index, index > page ? 1 : -1])}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};