import React from 'react'
import { faqs } from '../data/faq'
import { motion } from "framer-motion";
// import { mix } from "popmotion";

export const ContentPlaceholder = () => (
  <motion.div
    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
    transition={{ duration: 0.8 }}
    className="content-placeholder"
  >
    {/* {paragraphs.map(words => (
      <Paragraph words={words} />
    ))} */}
    {faqs.map((faq, index) => (
             <details key={index} className="bg-white p-4 rounded-lg border-4 border-gray-400">
               <summary className="font-semibold cursor-pointer">{faq.question}</summary>
               <p className="mt-2">{faq.answer}</p>
             </details>
           ))}
    {/* <section className="py-10 px-10 md:px-24 bg-white w-full">
         <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
         <div className="space-y-4">
           
         </div>
     </section> */}
  </motion.div>
);
