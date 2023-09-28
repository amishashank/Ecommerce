// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {
  return (
    <nav className="compo">
    <div className="logo">
       <img src="/images/logo.svg" alt="" className="icon" />
    </div>
       <ul>
           <li href="#">Home</li>
           <li href="#">Shop</li>
           <li href="#">Features</li>
           <li href="#">About Us</li>
       </ul>
           <button className="cart-btn"><img src="/images/bag.png" alt="cart" /></button>
           <button className="login-btn">Login</button>
   </nav>
  )
}

export default Navbar