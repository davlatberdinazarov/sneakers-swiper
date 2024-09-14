import React from 'react'
import Navbar from './components/navbar'
import SwipperProduct from './components/SwipperProduct'
import ProductContent from './components/ProductContent'

export default function App() {
  return (
    <div className='container px-5'>
      <Navbar/>

      <main className='container px-5 mt-5 row px-4'>
        <div className='col-md-6 d-flex flex-column align-items-center'>
          <SwipperProduct/>
        </div>
        <div className='col-md-6 px-4'>
          <ProductContent/>
        </div>
      </main>
    </div>  
  )
}
