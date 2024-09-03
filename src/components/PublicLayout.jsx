import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const PublicLayout = ({ children }) => {
  return (
    <div className="mx-auto h-full">
      <Header />
      {children}
      <Footer />
    </div>
  );
};
