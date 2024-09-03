import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Profile = () => {
  const [bio, setBio] = useState("I am a very interesting individual interested in the sales and purchase of items");

  return (
    <div className="flex flex-col md:flex-row w-full max-w-7xl mx-auto p-4">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 mb-6 md:mb-0">
        <motion.div
          className="flex flex-col space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button className="bg-primary text-white py-2 px-4 rounded-md">Profile</button>
          <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100">Dashboard</button>
          <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100">Catalog</button>
          <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100">Messages</button>
          
          <div className="mt-6">
            <h3 className="font-semibold mb-2">Other links</h3>
            <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 w-full text-left">Settings</button>
            <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 w-full text-left">Help</button>
            <button className="text-gray-600 py-2 px-4 rounded-md hover:bg-gray-100 w-full text-left">Log Out</button>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 md:pl-8">
        <motion.div
          className="bg-white rounded-lg shadow-md p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Banner Image Upload */}
          <div className="mb-6 relative">
            <div className="bg-gray-100 h-40 rounded-md flex items-center justify-center cursor-pointer">
              <span className="text-primary">Click here to upload banner image</span>
            </div>
            <p className="text-xs text-red-500 mt-1">Dimensions must not exceed 1043 x 335</p>
          </div>

          {/* Profile Image and Info */}
          <div className="flex flex-col md:flex-row items-center mb-6">
            <div className="w-32 h-32 bg-gray-200 rounded-full mb-4 md:mb-0 md:mr-6 flex items-center justify-center">
              <span className="text-primary text-sm">Click here to upload profile image</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Richard Ajao</h2>
              <p className="text-gray-600">Wine and Exotic Drinks Retailer</p>
              <p className="text-gray-600">Ogbomoso, Nigeria</p>
              <button className="bg-primary text-white py-2 px-4 rounded-md mt-2">Edit Profile</button>
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="font-semibold mb-2">Bio</h3>
            <textarea
              className="w-full p-2 border rounded-md"
              rows="4"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            ></textarea>
          </div>
        </motion.div>
      </div>
    </div>
  );
};