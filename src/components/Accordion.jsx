import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const Accordion = ({ i, expanded, setExpanded, question, answer }) => {
  const isOpen = i === expanded;

  return (
    <div className="rounded-lg border-2 shadow-sm">
      <motion.div
        initial={false}
        onClick={() => setExpanded(isOpen ? false : i)}
        className="flex justify-between items-center p-4 cursor-pointer rounded-lg"
      >
        <h3 className="font-semibold">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? -180 : 0 }}
          transition={{ duration: 1 }}
          className="bg-black rounded-full p-1"
        >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 7.5L10 12.5L15 7.5" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
        </motion.div>
      </motion.div>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: "auto" },
            }}
            transition={{ duration: 1}}
            className="py-4 border-t-2 mx-4"
          >
            <p>{answer}</p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;