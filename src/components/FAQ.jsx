import React, { useState } from 'react';
import Accordion from './Accordion';
import { faqs } from '../data/faq';

export const FAQ = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section id="faq" className="py-10 px-8 md:px-24 bg-white w-full text-sm">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
      <div className="faq-items flex flex-col gap-4">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            i={i}
            expanded={expanded}
            setExpanded={setExpanded}
            question={faq.question}
            answer={faq.answer}
            duration={1}
          />
        ))}
      </div>
    </section>
  );
};