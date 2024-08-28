import React from "react";

export const ContentSection = ({ reversed = false, hero = false, containerClasses }) => {
  // const containerClasses = ` ${containerClasses}`;

  return (
    <section className="bg-white w-full px-10 md:px-32 py-10 text-left">
      <div className={`${reversed ? "flex-row-reverse" : ""} ${containerClasses} flex items-center bg-white`}>
        <div className={`w-1/2 ${reversed ? "pl-8" : "pr-8"}`}>
          <h2 className="text-3xl font-bold mb-4">Section Title</h2>
          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded">
            Learn More
          </button>
        </div>
        {hero ? (
          <div className="w-1/2">
            <div className="bg-gray-300 h-64 rounded">Image Slider</div>
          </div>
        ) : (
          <div className="w-1/2">
            <div className="bg-gray-300 h-64 rounded">Static Image</div>
          </div>
        )}
      </div>
    </section>
  );
};
