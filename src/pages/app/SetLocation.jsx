import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// import Map from './Map'; // You'll need to implement this

export const SetLocation = () => {
  const [userLocation, setUserLocation] = useState(null);
  const [address, setAddress] = useState('');
  const [formattedAddress, setFormattedAddress] = useState('');

  useEffect(() => {
    // Prompt for location access on component mount
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          reverseGeocode(position.coords.latitude, position.coords.longitude);
        },
        error => console.error('Error getting location:', error)
      );
    }
  }, []);

  const reverseGeocode = async (lat, lon) => {
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
      const data = await response.json();
      if (data.display_name) {
        setFormattedAddress(data.display_name);
        setAddress(data.display_name);
      }
    } catch (error) {
      console.error('Error reverse geocoding:', error);
    }
  };

  const handleAddressChange = (e) => {
    setAddress(e.target.value);
  };

  const handleAddressSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`);
      const data = await response.json();
      if (data.length > 0) {
        setUserLocation({
          lat: parseFloat(data[0].lat),
          lng: parseFloat(data[0].lon)
        });
        setFormattedAddress(data[0].display_name);
      }
    } catch (error) {
      console.error('Error geocoding address:', error);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto p-4"
    >
      <form onSubmit={handleAddressSubmit} className="mb-8">
        <input 
          type="text" 
          placeholder="Enter address" 
          value={address}
          onChange={handleAddressChange}
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </form>

      {formattedAddress && (
        <p className="mb-4">Current location: {formattedAddress}</p>
      )}

      {/* <div className="mb-8 h-64">
        {userLocation ? (
          <Map location={userLocation} />
        ) : (
          <p>Loading map...</p>
        )}
      </div> */}

      <button className="w-full bg-blue-500 text-white py-2 rounded">
        Confirm Location
      </button>
    </motion.div>
  );
};