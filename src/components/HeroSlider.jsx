import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import slide1 from "../assets/slide1.png";
import slide2 from "../assets/slide2.png";
import slide3 from "../assets/slide3.png";
import slide4 from "../assets/slide4.png";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const images = [slide1, slide2, slide3, slide4];

const variants = {
  enter: (direction) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export const HeroSlider = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const imageIndex = wrap(0, images.length, page);

  const paginate = useCallback(
    (newDirection) => {
      setPage([page + newDirection, newDirection]);
    },
    [page]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      paginate(1);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, [paginate]);

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) {
      paginate(1);
    } else if (isRightSwipe) {
      paginate(-1);
    }
  };

  return (
    <div className="relative w-full h-[16em] md:h-[30em] rounded-lg overflow-hidden group">
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
            opacity: { duration: 0.2 },
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
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="w-full h-full object-contain rounded-lg"
        />
      </AnimatePresence>
      {/* Left Arrow */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <button
          className="text-white rounded-full p-2 bg-black/50 hover:bg-black/75"
          onClick={() => paginate(-1)}
        >
          <FaAngleLeft />
        </button>
      </div>
      {/* Right Arrow */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
        <button
          className="text-white rounded-full p-2 bg-black/50 hover:bg-black/75"
          onClick={() => paginate(1)}
        >
         <FaAngleRight />
        </button>
      </div>
      {/* Dots */}
      <div className="absolute bottom-4 left-0 right-0 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <div className="flex items-center justify-center gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                imageIndex === index ? "bg-white" : "bg-white/50"
              }`}
              onClick={() => setPage([index, index > page ? 1 : -1])}
            />
          ))}
        </div>
      </div>
    </div>
  );
};