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
      className={`${btnStyles} flex border border-primary justify-center relative px-4 py-3 rounded-lg`}
      disabled={disable}
    >
      <div className={`${btnLabelStyles} text-center`}>{label}</div>
      {children}
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
