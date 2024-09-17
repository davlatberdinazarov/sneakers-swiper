import React, { useContext } from 'react'
import { FaRegTrashCan } from "react-icons/fa6";
import { ProductContext } from '../App';
export default function CartModal() {
    const { cartData } = useContext(ProductContext)
  return (
    <div className='cart-modal'>
        <div style={{ height: '70px' }} className=' p-3 border-bottom border-2'>
            <p>Cart</p>
        </div>
        <div className=' h-75 w-100 rounded d-flex align-items-center justify-content-center'>
            { cartData.length > 0 ? 
             (
                <div className=' '>
                    {cartData.map(item => (
                        <div style={{ bottom: '20px' }} key={item.id} className=' position-relative border-bottom pb-4 border-2 d-flex align-baseline gap-2 '>
                            <img src={item.thumbImages[0].src} alt={item.name} width='50px' height='50px' />
                            <div style={{ maxHeight:'50px' }} className=' d-flex flex-column'>
                                <p >{item.name}</p>
                                <p  style={{ bottom: '10px' }} className=' position-relative'>${item.price} x { item.quantity }  <span className=' fw-bold '>${ item.price * item.quantity }</span></p>
                            </div>
                            <div>
                                <FaRegTrashCan className='fs-5 cart-btn'/>
                            </div>
                        </div>
                    ))}
                </div>
             )
             :
             <h5 className=''>Your cart is emtpy</h5>}
        </div>
    </div>
  )
}
