import React from 'react';
import { Header } from '../../components/Header';
import { Features } from '../../components/Features';
import { ContentSection } from '../../components/ContentSection';
import { FAQ } from '../../components/FAQ';
import { Newsletter } from '../../components/Newsletter';
import { Footer } from '../../components/Footer';

export const Landing = () => {
  return (
    <div className="bg-whyte dark:bg-black flex flex-col gap-0.5 w-full inset-0">
      <Header/>
      {/* <hr className="border-gray-200" /> */}
      <ContentSection hero={true} />
      {/* <hr className="border-gray-200" /> */}
      <Features />
      {/* <hr className="border-gray-200" /> */}
      <ContentSection hero={false} />
      {/* <hr className="border-gray-200" /> */}
      <ContentSection hero={false} reversed />
      {/* <hr className="border-gray-200" /> */}
      <FAQ />
      {/* <hr className="border-gray-200" /> */}
      <Newsletter />
      <Footer />
    </div>
  )
}
