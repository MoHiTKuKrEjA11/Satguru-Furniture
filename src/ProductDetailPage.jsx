import React from 'react'
import { useParams,Link } from 'react-router';
import Header from './Header';
const products = [
    {
      id: 1,
      name: "Luxury Sofa",
      price: 499,
      image: "https://via.placeholder.com/600x400",
      description: "A luxurious sofa made with the finest materials.",
    },
    {
      id: 2,
      name: "Wooden Chair",
      price: 199,
      image: "https://via.placeholder.com/600x400",
      description: "A sturdy wooden chair perfect for your dining room.",
    },
    {
      id: 3,
      name: "Modern Table",
      price: 299,
      image: "https://via.placeholder.com/600x400",
      description: "A modern table with a sleek design.",
    },
  ];

const ProductDetailPage = () => {

  const { id } = useParams();
  const product = products.find((item) => item.id === parseInt(id));

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <Header />
      <main className="p-4">
        <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover rounded-lg"
          />
          <h1 className="text-2xl font-bold mt-4">{product.name}</h1>
          <p className="text-gray-700 text-lg mt-2">${product.price}</p>
          <p className="text-gray-600 mt-4">{product.description}</p>
          <Link to="/">
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mt-4">
              Back to Home
            </button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default ProductDetailPage