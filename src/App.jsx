import React, { createContext, useEffect, useState } from 'react'
import Navbar from './components/navbar'
import SwipperProduct from './components/SwipperProduct'
import ProductContent from './components/ProductContent'
import { productImage } from '../public/index'

const productData = {
  id: 1,
  name: 'Nike Air Zoom Pegasus 37',
  price: 199,
  thumbImages: productImage
};

export const ProductContext = createContext();

export default function App() {
  const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || [])

  useEffect(() => {
    localStorage.setItem('cartData', JSON.stringify(cartData))
  }, [cartData])

  const handleAddToCart = (productObject) => {
    const isExistOnCart = cartData.some(item => item.id == productObject.id)

    if (!isExistOnCart) {
      setCartData([...cartData, { ...productObject, quantity:1 }])
    }
    else {
      const updatedCartData = cartData.map(item => item.id == productObject.id? {...item, quantity: item.quantity + 1 } : item)
      setCartData(updatedCartData)
    }
  }

  console.log(cartData)

  return (
    <ProductContext.Provider value={{ cartData, setCartData, handleAddToCart }} >
      <div className='container px-5'>
        <Navbar />

        <main className='container px-5 mt-5 row px-4'>
          <div className='col-md-6 d-flex flex-column align-items-center'>
            <SwipperProduct productData={productData} />
          </div>
          <div className='col-md-6 px-4'>
            <ProductContent productData={productData} />
          </div>
        </main>
      </div>
    </ProductContext.Provider>
  );
}
