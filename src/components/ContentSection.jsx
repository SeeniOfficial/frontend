import React from "react";
import { Button } from "./Button";
import { HeroSlider } from "./HeroSlider";
import { SectionStatic } from "./SectionStatic";
import { SectionGrid } from "./SectionGrid";

export const ContentSection = ({
  reversed = false,
  hero = false,
  containerClasses,
  sectionTitle,
  description,
  label,
  click,
  descriptionStyle,
}) => {
  return (
    <section
      className={`flex flex-col-reverse md:flex-row bg-white w-full justify-between gap-4 md:gap-20 text-center md:text-left ${
        reversed ? "md:flex-row-reverse" : ""
      } ${containerClasses}`}
    >
      <div className={`flex flex-col md:gap-2 justify-center`}>
        <h2 className="font-bold text-4xl md:text-6xl mb-2 md:mb-4">{sectionTitle}</h2>
        <p className={`${descriptionStyle} text-sm md:text-base`}>{description}</p>
        <div className="flex h-fit justify-center md:justify-normal">
        <Button
          label={label}
          btnStyles="rounded-md bg-primary w-1/3 text-white font-bold text-sm py-2 mt-4"
          click={click}
        />
        </div>
      </div>
      {hero ? (
        <HeroSlider />
      ) : (
        <div className="w-full mt-8 md:mt-0">
          {reversed ? <SectionGrid /> : <SectionStatic />}
        </div>
      )}
    </section>
  );
};