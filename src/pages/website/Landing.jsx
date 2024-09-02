import React from 'react';
import { Header } from '../../components/Header';
import { Features } from '../../components/Features';
import { ContentSection } from '../../components/ContentSection';
import { FAQ } from '../../components/FAQ';
import { Newsletter } from '../../components/Newsletter';
import { Footer } from '../../components/Footer';
import { Layout } from '../../components/Layout';

export const Landing = () => {
  return (
    <Layout>
      <div className="bg-whyte dark:bg-drkprimary flex flex-col gap-0.5 w-full inset-0">
      <Header/>
      <ContentSection sectionTitle="Discover your perfect match" description="Find unique goods and services tailored just for you" label="Explore" containerClasses="px-8 md:px-24 py-10" descriptionStyle="md:w-2/3" hero />
      <Features />
      <ContentSection sectionTitle="Build your online store in minutes." description="Start stocking up your catalog and become visible to promising customers that need your goods and services." descriptionStyle="md:w-2/3" label="Start" containerClasses="px-10 md:px-32 py-10" hero={false} />
      <ContentSection sectionTitle="Discover the best local vendors near you." description="With the use of GPS features, gain access to even the most rural markets wherever you are." descriptionStyle="md:w-2/3" label="Explore" containerClasses="px-10 md:px-32 py-10" hero={false} reversed />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
    </Layout>
  )
}
