// components/Card.jsx
import React from "react";
import { motion } from "framer-motion";
import { Tag } from "./Tag";

export const Card = ({
  image,
  title,
  description,
  tag,
  footer,
  roundedCorners = false,
  padding = true,
  cardStyles,
  imageClasses,
}) => {

  return (
    <motion.div
      className={`bg-white shadow-md overflow-hidden
    ${roundedCorners ? "rounded-xl" : ""}
    ${padding ? "p-3" : ""}
    ${cardStyles}`}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.2 }}
    >
      {image && <img src={image} alt={title} className={`w-full object-contain ${imageClasses}`} />}
      <div className={`flex items-center justify-between w-full ${padding ? "mt-2" : ""}`}>
        <div className="flex flex-col">{title && <h3 className="text-2xl font-bold">{title}</h3>}
        {description && <p className="">{description}</p>}</div>
        {tag && <Tag label={tag} />}
      </div>
      {footer && <div className="mt-4 flex justify-end pt-4 w-full">{footer}</div>}
    </motion.div>
  );
};
