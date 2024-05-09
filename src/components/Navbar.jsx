import React from 'react'
import logo from "../assets/icon.png"
import user from "../assets/svg/user.svg"
import shop from "../assets/svg/shop.svg"


export default function Navbar() {
  return (
    
      <nav>
      <div className="logo">
            <img src={logo} alt="" />
            <p>Candleaf</p>
        </div>
        <div className="links">
            <a href="#">Discovery</a>
            <a href="#">About</a>
            <a href="#">Contact us</a>
        </div>
        <div className="btn">
            <img src={user} alt="" />
            <img src={shop} alt="" />

        </div>
      </nav>
    
  )
}