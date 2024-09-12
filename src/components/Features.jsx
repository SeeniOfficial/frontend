import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import { motion, useAnimation } from "framer-motion";

const cards = [
  {
    id: 1,
    title: "AI Powered Matching",
    content: "Efficient connections between skills, jobs and preferences",
  },
  {
    id: 2,
    title: "Hyper-local Focus",
    content: "Caters to uniqu needs in local markets within a flexible radius",
  },
  {
    id: 3,
    title: "Digital Presence for All",
    content: "Simple tools for amll vendors to establish online presence",
  },
  {
    id: 4,
    title: "Trust-building Mechanisms",
    content: "Ratings, reviews and secure payments to address trust issues",
  },
  { id: 5, title: "Card 5", content: "Content for Card 5" },
  {
    id: 1,
    title: "AI Powered Matching",
    content: "Efficient connections between skills, jobs and preferences",
  },
  {
    id: 2,
    title: "Hyper-local Focus",
    content: "Caters to uniqu needs in local markets within a flexible radius",
  },
  {
    id: 3,
    title: "Digital Presence for All",
    content: "Simple tools for amll vendors to establish online presence",
  },
  {
    id: 4,
    title: "Trust-building Mechanisms",
    content: "Ratings, reviews and secure payments to address trust issues",
  },
  { id: 5, title: "Card 5", content: "Content for Card 5" },
];

const colors = ["#000000", "#0084A7", "#007C66", "#00D600"];

export const Features = () => {
  const scrollContainerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [animationFrameId, setAnimationFrameId] = useState(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    let scrollAmount = 0;
    let scrollDirection = 1;
    let animationFrameId;

    const autoScroll = () => {
      if (scrollContainer  && !isHovered) {
        scrollAmount += scrollDirection;
        if (scrollAmount >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollDirection = -1; // Reverse direction
        } else if (scrollAmount <= 0) {
          scrollDirection = 1; // Reverse direction
        }
        scrollContainer.scrollLeft = scrollAmount;
        const frameId = requestAnimationFrame(autoScroll);
    setAnimationFrameId(frameId);
      }
      if (isHovered) {
        console.log(isHovered)
       cancelAnimationFrame(frameId)
        console.log(frameId, scrollAmount)
      }
    };

    const frameId = requestAnimationFrame(autoScroll);
    setAnimationFrameId(frameId);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovered]);


  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };

  return (
    <div className="py-6 md:py-8 bg-white px-8 md:px-24 text-center">
      <p className="font-bold mb-4 md:mb-8 -mt-2 text-2xl md:text-3xl">
        Features
      </p>
      <div className="relative overflow-hidden">        
      <motion.div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden py-10 gap-10"
         
        >
          {cards.map((card, index) => (
            <motion.div
              key={`${card.id}-${index}`}
              className="relative flex-none w-48 md:w-56 bg-whyte rounded-lg text-left text-xs md:text-sm py-8 md:py-10 px-2"
              onMouseOver={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              whileHover={{scale: 1.05}}
            >
              <h3 className="md:pr-10 text-lg w-36 font-bold">
                {card.title}
              </h3>
              <p className="">{card.content}</p>
              <Link to="#faq" className={`font-bold underline text-xs hover:text-secondary`}>
                Learn More
              </Link>
               <div
                className="absolute w-12 h-12 md:w-16 md:h-16 rounded-full -top-8 md:-top-10 left-2"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
            </motion.div>
          ))}
        </motion.div>
        <div className="absolute inset-y-0 left-0 z-10 flex items-center pointer-events-auto opacity-0 hover:opacity-100">
           <Button
            label="&lt;"
            click={scrollLeft}
            btnStyles="border-none h-14 w-14 rounded-full p-3 border bg-whyte shadow-md"
          />
          
        </div>
        <div className="absolute inset-y-0 right-0 z-10 flex items-center pointer-events-auto opacity-0 hover:opacity-100 ">
          <Button
            label="&gt;"
            click={scrollRight}
            btnStyles="border-none h-14 w-14 rounded-full p-3 border bg-whyte shadow-md"
          />
        </div>
      </div>
    </div>
  );
};
