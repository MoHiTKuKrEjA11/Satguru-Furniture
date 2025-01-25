import React from 'react'
import furnitureData from './FurnitureData'

const ItemDetail = ({ category, itemId }) => {
    const item = furnitureData[category]?.find((item) => item.id === parseInt(itemId));
  
    if (!item) {
      return <p className="p-6">Item not found.</p>;
    }
  
    return (
      <div className="p-6">
        <img src={item.url} alt={item.name} className="w-full max-w-2xl mx-auto h-96 object-contain rounded mb-6" />
        <a href={item.url} target='_blank' className="text-center p-6 block text-black no-underline hover:underline">View full Image</a>
        <h2 className="text-3xl font-bold mb-4">{item.name}</h2>
        <p className="text-xl text-gray-700 mb-2">Price: {item.price}</p>
        <p className="text-lg text-gray-600">{item.description}</p>
      </div>
    );
  };

export default ItemDetail