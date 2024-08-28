import React from 'react'
import { faqs } from '../data/faq'

export const FAQ = () => {
  return (
    <section className="py-10 px-10 md:px-32 bg-white w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <details key={index} className="bg-white p-4 rounded shadow">
              <summary className="font-semibold cursor-pointer">{faq.question}</summary>
              <p className="mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
