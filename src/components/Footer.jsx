import React from 'react'

export const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-10 md:px-32 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="logo">Logo</div>
          <div className="quick-links space-x-4">
            <a href="#" className="hover:text-gray-300">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300">Terms of Service</a>
            <a href="#" className="hover:text-gray-300">Contact Us</a>
          </div>
        </div>
        <hr className="border-whyte mb-8" />
        <div className="text-center text-sm">
          &copy; 2024 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
