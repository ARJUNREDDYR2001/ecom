import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import logo from './logo.png'; // Adjust the path to your logo image

const Navbar = () => {
    const state = useSelector(state => state.handleCart);

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 sticky-top">
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2 text-dark" to="/">
                    <img src={logo} alt="Logo" className="logo" style={{ maxWidth: '150px', maxHeight: '50px' }} /> <span className="text-gold">ARJUN REDDY EPORIUM</span>
                </NavLink>
                <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" style={{ fontSize: '1.1rem', transition: 'font-size 0.3s', marginRight: '15px' }} activeStyle={{ fontSize: '1.2rem' }}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/product" style={{ fontSize: '1.1rem', transition: 'font-size 0.3s', marginRight: '15px' }} activeStyle={{ fontSize: '1.2rem' }}>Products</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" style={{ fontSize: '1.1rem', transition: 'font-size 0.3s', marginRight: '15px' }} activeStyle={{ fontSize: '1.2rem' }}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" style={{ fontSize: '1.1rem', transition: 'font-size 0.3s', marginRight: '15px' }} activeStyle={{ fontSize: '1.2rem' }}>Contact</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center">
                        <NavLink to="/login" className="btn btn-outline-dark m-2"><i className="fa fa-sign-in-alt mr-1"></i> Login</NavLink>
                        <NavLink to="/register" className="btn btn-outline-dark m-2"><i className="fa fa-user-plus mr-1"></i> Register</NavLink>
                        <NavLink to="/cart" className="btn btn-outline-dark m-2"><i className="fa fa-cart-shopping mr-1"></i> Cart ({state.length})</NavLink>
                    </div>
                </div>
            </div>
            <style>
                {`
                .navbar-brand {
                    color: black !important; /* Change text color to black */
                }
                .text-gold {
                    color: gold;
                }
                .navbar-toggler-icon {
                    color: gold !important; /* Change navbar icon color to gold */
                }
                .nav-link {
                    color: black !important; /* Change text color to black */
                }
                .nav-link:hover {
                    color: gold !important; /* Change text color on hover to gold */
                }
                `}
            </style>
        </nav>
    );
};

export default Navbar;
