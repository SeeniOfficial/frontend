import React from "react";
import { motion } from "framer-motion";

export const Button = ({
  btnStyles,
  click,
  label,
  btnLabelStyles,
  children,
  type,
  disable,
}) => {
  return (
    <motion.button
      type={type}
      whileTap={{ scale: 0.9 }}
      onClick={click}
      className={`${btnStyles} flex border border-primary items-center justify-center place-items-center`}
      disabled={disable}
    >
      {children}
      <div className={`${btnLabelStyles} text-center my-auto`}>{label}</div>
    </motion.button>
  );
};
// "icons": [
//       {
//         "src": "",
//         "sizes": "192x192",
//         "type": "image/png"
//       },
//       {
//         "src": "",
//         "sizes": "512x512",
//         "type": "image/png"
//       }
//     ],
