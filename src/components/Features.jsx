import React, { useEffect, useRef, useState } from "react";

const cards = [
  { id: 1, title: 'Card 1', content: 'Content for Card 1' },
  { id: 2, title: 'Card 2', content: 'Content for Card 2' },
  { id: 3, title: 'Card 3', content: 'Content for Card 3' },
  { id: 4, title: 'Card 4', content: 'Content for Card 4' },
  { id: 5, title: 'Card 5', content: 'Content for Card 5' },
];

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

    carousel.addEventListener('mouseenter', pauseScrolling);
    carousel.addEventListener('mouseleave', resumeScrolling);

    return () => {
      pauseScrolling();
      carousel.removeEventListener('mouseenter', pauseScrolling);
      carousel.removeEventListener('mouseleave', resumeScrolling);
    };
  }, []);

  return (
   <div className="py-10 px-10 md:px-32">
    <div className="relative w-full overflow-hidden group">
      <div
        ref={carouselRef}
        className="flex overflow-x-auto space-x-4 scrollbar-hide scroll-smooth"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch'
        }}
      >
        {cards.concat(cards).map((card, index) => (
          <div
            key={`${card.id}-${index}`}
            className="flex-none w-64 h-40 bg-white rounded-lg shadow-md p-4"
          >
            <h3 className="text-lg font-bold">{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
      {/* Left Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <button className="h-6 w-6" onClick={() => scroll(-200)}>right</button>
      </div>
      {/* Right Arrow */}
      <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
      <button className="h-6 w-6" onClick={() => scroll(200)}>right</button>
      </div>
    </div>
    </div>
      )
};
