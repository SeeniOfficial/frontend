import React from 'react';
import { Header } from '../../components/Header';
import { Features } from '../../components/Features';
import { ContentSection } from '../../components/ContentSection';
import { FAQ } from '../../components/FAQ';
import { Newsletter } from '../../components/Newsletter';
import { Footer } from '../../components/Footer';
import { Layout } from '../../components/Layout';
import { Hero } from '../../components/Hero';

export const Landing = () => {
  return (
    <Layout>
      <div className="bg-whyte dark:bg-drkprimary flex flex-col gap-0.5 w-full inset-0">
      <Header/>
      <Hero />
      <Features />
      <ContentSection hero={false} />
      <ContentSection hero={false} reversed />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
    </Layout>
  )
}
