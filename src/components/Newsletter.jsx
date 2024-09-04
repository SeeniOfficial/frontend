import React from 'react'
import { Button } from './Button'
import { Input } from './Input';

export const Newsletter = () => {
  return (
    <section className="py-8 md:py-10 px-10 md:px-24">
      <div className="container mx-auto text-center flex flex-col gap-2">
        <h2 className="text-lg md:text-xl font-bold">Subscribe to Our Newsletter</h2>
        <p className="text-xs md:text-sm">Get updates and latest information about our services.</p>
        <form className="flex flex-col items-center md:flex-row gap-2 w-full md:w-2/3 mx-auto mt-4">
          <Input type="email" placeholder="Email Address" className="w-full" required={true} />
          <Button label="Subscribe" btnStyles="bg-primary text-white font-bold w-full md:w-1/3 h-fit mt-2 md:mt-0 px-4 py-2 border border-primary rounded-lg" btnLabelStyles="mx-auto" />
        </form>
      </div>
    </section>
  );
};
