// components/Card.jsx
import React from "react";
import { motion } from "framer-motion";
import Tag from "./Tag";

export const Card = ({
  image,
  title,
  description,
  tag,
  footer,
  roundedCorners = false,
  padding = true,
  cardStyles,
}) => {
  const imageClasses = `
    w-full h-48 object-cover
    ${roundedCorners ? "rounded-t-lg" : ""}
  `;

  return (
    <motion.div
      className={`bg-white shadow-md overflow-hidden
    ${roundedCorners ? "rounded-lg" : ""}
    ${padding ? "p-4" : ""}
    ${cardStyles}`}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {image && <img src={image} alt={title} className={imageClasses} />}
      <div className={`${padding ? "mt-4" : ""}`}>
        {tag && <Tag>{tag}</Tag>}
        {title && <h3 className="text-xl font-semibold mt-2">{title}</h3>}
        {description && <p className="text-gray-600 mt-2">{description}</p>}
      </div>
      {footer && <div className="mt-4 border-t pt-4">{footer}</div>}
    </motion.div>
  );
};
