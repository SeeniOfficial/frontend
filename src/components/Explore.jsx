import React, { useRef, useState } from "react";
import { Card } from "./Card";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { deals, recentlyAdded } from "./dealsData";


export const Explore = () => {
  // const [showButtons, setShowButtons] = useState(false);
  const scrollContainerRef = useRef(null);
  const scrollContainerRef2 = useRef(null);  

  const scroll = (direction, containerRef) => {
    const container = containerRef.current;
    if (container) {
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
      <motion.div ref={scrollContainerRef} className="flex overflow-x-hidden gap-5 md:gap-10 mb-8 w-full pb-4">
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
            cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
          />
        ))}
      </motion.div>
      <AnimatePresence>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('left', scrollContainerRef)}
              >
                <FaAngleLeft />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-1/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('right', scrollContainerRef)}
              >
               <FaAngleRight />
              </motion.button>
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
          cardStyles="w-[12em] md:w-[16em] lg:w-[20em] relative flex-none cursor-pointer"
        />
      ))}
      </motion.div>
      <AnimatePresence>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute left-0 top-3/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('left', scrollContainerRef2)}
              >
                <FaAngleLeft />
              </motion.button>
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute right-0 top-3/4 bg-white p-3 rounded-full shadow-md"
                onClick={() => scroll('right', scrollContainerRef2)}
              >
               <FaAngleRight />
              </motion.button>
        </AnimatePresence>
      </div>
    </>
  );
};
