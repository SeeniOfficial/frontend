import React, { useEffect, useRef, useState } from "react";
import { Button } from "./Button";

const images = [
  "https://placehold.co/600x400/000000/FFFFFF/png",
  "https://placehold.co/600x400/FFFFFF/FFFFFF/png",
  "https://placehold.co/600x400/000000/FFFFFF/png",
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex justify-between bg-white py-6 px-10 text-left">
      <div className="w-1/3 flex flex-col gap-2 justify-center">
        <p className="font-bold text-6xl">Discover your perfect match</p>
        <p className="w-2/3">Find unique good and services tailored just for you</p>
        <Button label="Explore" btnStyles="rounded-md bg-primary w-1/2 text-white font-bold text-sm" />
      </div>
      <div className="relative w-fit rounded-lg">
        <div className="w-full h-full bg-center bg-cover rounded-lg duration-500">
          <img
            src={images[currentIndex]}
            alt="hero"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <button className="h-6 w-6" onClick={goToPrevious}>
            {" "}
            left
          </button>
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <button className="h-6 w-6" onClick={goToNext}>
            right
          </button>
        </div>
        <div className="absolute bottom-4 left-0 right-0">
          <div className="flex items-center justify-center gap-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${currentIndex === index ? "p-2" : "bg-opacity-50"}
            `}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
