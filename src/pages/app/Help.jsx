import React from 'react'
import { motion } from 'framer-motion'

export const Help = () => {
  return (
    <motion.div
      className="bg-whyte w-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
        <p className='text-6xl font-bold animate-pulse my-80 text-primary flex items-center justify-center'>Coming soon...</p>
        </motion.div>
  )
}
