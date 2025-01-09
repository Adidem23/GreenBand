import React, { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'

const ImageUpload = ({ profileImage, onFileChange }) => {
  const imageRef = useRef(null)

  useEffect(() => {
    if (profileImage && imageRef.current) {
      const reader = new FileReader()
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === 'string' && imageRef.current) {
          imageRef.current.src = e.target.result
        }
      }
      reader.readAsDataURL(profileImage)
    }
  }, [profileImage])

  return (
    <motion.div
      className="mb-4"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <label className="block text-sm font-medium text-gray-700 mb-1">Profile Image</label>
      <div className="mt-1 flex items-center">
        {profileImage ? (
          <img
            ref={imageRef}
            alt="Profile Preview"
            className="w-24 h-24 object-cover rounded-full"
          />
        ) : (
          <div className="w-24 h-24 border-2 border-gray-300 rounded-full flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={onFileChange}
          className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        />
      </div>
    </motion.div>
  )
}

export default ImageUpload