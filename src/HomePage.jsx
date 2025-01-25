import React from 'react'
import Header from './Header'
import ProductCard from './ProductCard';
import { Link } from 'react-router';
  
const HomePage = () => {
  return (
    <div className="text-center p-6">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-8">Satguru Furniture</h1>
      
      {/* Description */}
      <p className="text-lg mb-12 mt-40 text-gray-700">
        We deal in Beds, Almirahs, and Sofas. Choose your category below:
      </p>
      
      {/* Category Buttons */}
      <div className="flex justify-center gap-6">
        <Link
          to="/category/bed"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Beds
        </Link>
        <Link
          to="/category/almirah"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Almirahs
        </Link>
        <Link
          to="/category/sofa"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:scale-105"
        >
          Sofas
        </Link>
      </div>
    </div>
  )
}

export default HomePage