import React from 'react';
import { motion } from 'framer-motion';

export const CustomButton = ({ children, ...props }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      {...props}
    >
      {children}
    </motion.button>
  );
};
