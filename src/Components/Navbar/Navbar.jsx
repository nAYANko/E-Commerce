import React from 'react'
import { useState } from "react";
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom';
export const Navbar = () => {
    const [menu,setMenu] = useState("shop")
  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img className='img-logo' src={logo} alt =''/>
            <p></p>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{ textDecoration: 'none', color: 'black'}}>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("goats")}}><Link to='/goats' style={{ textDecoration: 'none', color: 'black' }}>GOAT</Link>{menu==="goats"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mids")}}><Link to='/mids' style={{ textDecoration: 'none', color: 'black' }}>MID</Link>{menu==="mids"?<hr/>:<></>}</li>
                <li onClick={()=>{setMenu("dogwater")}}><Link to='/dogwater' style={{ textDecoration: 'none', color: 'black' }}>DOGWATER</Link>{menu==="dogwater"?<hr/>:<></>}</li>    
            </ul>
            <div className="nav-login-cart">
                <Link to='/login' style={{ textDecoration: 'none' }}><button>LOGIN</button></Link>
                <Link to='/cart' style={{ textDecoration: 'none' }}><img className='cart-icon' src={cart_icon} alt=''/></Link>
                <div className="nav-cart-count">
                    0
                </div>
            </div> 
        </div>
    </div>
  )
}
