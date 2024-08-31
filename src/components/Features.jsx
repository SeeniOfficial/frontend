import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const cards = [
  { id: 1, title: "AI Powered Matching", content: "Efficient connections between skills, jobs and preferences" },
  { id: 2, title: "Hyper-local Focus", content: "Caters to uniqu needs in local markets within a flexible radius" },
  { id: 3, title: "Digital Presence for All", content: "Simple tools for amll vendors to establish online presence" },
  { id: 4, title: "Trust-building Mechanisms", content: "Ratings, reviews and secure payments to address trust issues" },
  { id: 5, title: "Card 5", content: "Content for Card 5" },
];

const colors = ["#000000", "#0084A7", "#007C66", "#00D600"];

export const Features = () => {
  const carouselRef = useRef(null);

  const scroll = (scrollOffset) => {
    carouselRef.current.scrollLeft += scrollOffset;
  };

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollInterval;

    const startScrolling = () => {
      scrollInterval = setInterval(() => {
        if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
          carousel.scrollLeft = 0;
        } else {
          carousel.scrollLeft += 1;
        }
      }, 20);
    };

    const pauseScrolling = () => {
      if (scrollInterval) {
        clearInterval(scrollInterval);
      }
    };

    const resumeScrolling = () => {
      pauseScrolling();
      startScrolling();
    };

    startScrolling();

    carousel.addEventListener("mouseenter", pauseScrolling);
    carousel.addEventListener("mouseleave", resumeScrolling);

    return () => {
      pauseScrolling();
      carousel.removeEventListener("mouseenter", pauseScrolling);
      carousel.removeEventListener("mouseleave", resumeScrolling);
    };
  }, []);

  return (
    <div className="py-8 bg-white px-12 md:px-32 text-center">
      <p className="font-bold mb-8 -mt-2 text-2xl">Features</p>
      <div className="relative w-full overflow-hidden group">
        <div
          ref={carouselRef}
          className="relative py-8 flex overflow-x-auto space-x-12 scrollbar-hide scroll-smooth"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
            WebkitOverflowScrolling: "touch",
          }}
        >
          {cards.concat(cards).map((card, index) => (
            <div
              key={`${card.id}-${index}`}
              className="relative flex-none space-y-2 w-56 bg-whyte rounded-lg text-left text-sm py-10 px-2"
            >
              <h3 className="pr-10 text-xl font-bold">{card.title}</h3>
              <p className="">{card.content}</p>
              <Link className="font-bold underline">Learn More</Link>
              <div
                className="absolute w-16 h-16 rounded-full -top-10 left-2"
                style={{ backgroundColor: colors[index % colors.length] }}
              />
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <button className="h-6 w-6" onClick={() => scroll(-200)}>
            left
          </button>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <button className="h-6 w-6" onClick={() => scroll(200)}>
            right
          </button>
        </div>
      </div>
    </div>
  );
};