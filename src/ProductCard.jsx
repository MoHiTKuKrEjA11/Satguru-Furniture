import React from 'react'
import Header from './Header'
import { Link } from 'react-router'

const ProductCard = ({product}) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-lg"
      />
      <h2 className="text-lg font-bold mt-2">{product.name}</h2>
      <p className="text-gray-700 mt-1">${product.price}</p>
      <Link to={`/product/${product.id}`}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-2">
          Read More
        </button>
      </Link>
    </div>
  )
}

export default ProductCard