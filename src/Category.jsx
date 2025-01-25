import React from 'react'
import { useNavigate } from 'react-router'
import furnitureData from './FurnitureData'
const Category = ({category}) => {
    const navigate = useNavigate();
    const items = furnitureData[category] || [];
  
    return (
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-4">{category.charAt(0).toUpperCase() + category.slice(1)} Items</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded shadow hover:shadow-lg">
              <img src={item.image} alt={item.name} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-lg text-gray-700 mb-2">Price: {item.price}</p>
              <button
                onClick={() => navigate(`/item/${category}/${item.id}`)}
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300 hover:bg-blue-700 hover:scale-105"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    );
}

export default Category