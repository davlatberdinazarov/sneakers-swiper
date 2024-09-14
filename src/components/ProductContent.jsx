import React from 'react'

export default function ProductContent() {
  return (
    <div className='p-4'>
      <h6 style={{ color: 'orange' }}>Sneaker Company</h6>
      <h1 className=' display-5 fw-bolder'>Fall Limited Edition Sneakers</h1>

      <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>

      <div className=' d-flex column-gap-2 align-items-end'>
        <h1 className=' display-5 fw-bolder'>$125.00 </h1>
        <h4 style={{ height: '40px' }} className=' fs-5 badge bg-danger-subtle'>
          <p className=' text-danger'> 50%</p>
        </h4>
      </div>


      <h1 className=' text-secondary text-decoration-line-through fw-bolder'>$125.00 </h1>

      <div className=' d-flex gap-5'>
        <div class="btn-group btn-group-lg" role="group" aria-label="Basic outlined example">
          <button type="button" class="btn btn-outline-primary">+</button>
          <button type="button" class="btn btn-outline-primary">0</button>
          <button type="button" class="btn btn-outline-primary">-</button>
        </div>

        <div>
          <button className=' btn-lg btn btn-warning'>Add to Cart</button>
        </div>
      </div>

    </div>
  )
}
