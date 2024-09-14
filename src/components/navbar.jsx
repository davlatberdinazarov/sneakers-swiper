import React from 'react';
import { LuShoppingCart } from "react-icons/lu";

const Navbar = () => {
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
                    <div className='d-flex align-items-center gap-4'>
                        <LuShoppingCart className='fs-4'/>
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
