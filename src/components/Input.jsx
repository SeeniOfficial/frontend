import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid';

const Input = ({ 
  type = 'text', 
  placeholder, 
  icon: Icon, 
  name, 
  value, 
  onChange, 
  required = false,
  className
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={`relative ${className}`}>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: isFocused ? 1.02 : 1 }}
        className="relative"
      >
        {Icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>
        )}
        <input
          type={showPassword ? 'text' : type}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={`block w-full rounded-lg p-3 shadow-sm ring-1 ring-inset ring-whyte focus:ring-2 focus:ring-inset focus:ring-whyte border-4 border-primary/20 outline-whyte sm:text-sm sm:leading-6 ${
            Icon ? 'pl-10' : 'pl-3'
          } ${type === 'password' ? 'pr-10' : 'pr-3'}`}
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500"
            >
              {showPassword ? (
                <EyeSlashIcon className="h-5 w-5" aria-hidden="true" />
              ) : (
                <EyeIcon className="h-5 w-5" aria-hidden="true" />
              )}
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Input;