import React, { useContext, useState } from 'react';
import { LuShoppingCart } from "react-icons/lu";
import CartModal from './CartModal';
import { ProductContext } from '../App';

const Navbar = () => {
    const [showCart, setShowCart] = useState(false);
    const { cartData } = useContext(ProductContext);

    console.log(cartData)
    return (
        <nav className="navbar navbar-expand-lg border-1 border-bottom">
            <div className="container-fluid">
                <div className=' d-flex align-items-baseline'>
                    <a className="navbar-brand" href="#">
                        <div>
                            <img src="/sneakers.png" alt="sneakers" />
                        </div>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active-nav text-warning active-hover active" aria-current="page" href="#">Collection</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active-hover" href="#">Men</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active-hover" href="#">Women</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active-hover" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active-hover" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <div className='d-flex align-items-center gap-4 position-relative'>
                        <div className='cart-btn position-relative' onClick={() => setShowCart(!showCart)}>
                            <LuShoppingCart className='fs-4'/>
                            <span className=' rounded-circle position-absolute top-0 text-white d-flex align-items-center justify-content-center' style={{ width:'20px', height: '20px', right:'-14px', background:'orange' }}>
                                { cartData[0]?.quantity ? cartData[0]?.quantity : 0 }
                            </span>
                        </div>
                       { showCart && <CartModal/>}
                        <div>
                            <img className='rounded-circle' width='50px' src="/user.webp" alt="user profile" />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
