import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from './HomePage';
// import ProductDetailPage from './ProductDetailPage';
import CategoryWrapper from './CategoryWrapper';
import ItemDetailWrapper from './ItemDetailWrapper';
import Footer from './Footer';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Routes>
          <Route path="/" element={<HomePage/>} />
          {/* <Route path="/product/:id" element={<ProductDetailPage/>} /> */}
          <Route path="/category/:category" element={<CategoryWrapper />} />
          <Route path="/item/:category/:itemId" element={<ItemDetailWrapper />} />
        </Routes>
        <Footer/>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
