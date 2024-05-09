import React from 'react'
import productimage from "../assets/img/image 1.png"
import AOS from "aos"

export default function Popular() {
    AOS.init()
  return (
    <div className='popular'>
      <h1>Popular</h1>
      <span>Our top selling product that you may like</span>
      <div className="card-s">
      <div className="card-a "  data-aos="fade-up-right"><img src={productimage} alt="" /><span>Spiced Mine</span>
      
      <p>9.99$</p>
    </div>
    <div className="card-a " data-aos="fade-down" ><img src={productimage} alt="" /><span>Sweet Straweberry</span>
    
      <p>9.99$</p>
    </div>
    <div className="card-a " data-aos="fade-down" ><img src={productimage} alt="" /><span>Cool Blueberries</span>
    
      <p>9.99$</p>
    </div>
    <div className="card-a " data-aos="fade-up-left" ><img src={productimage} alt="" /><span>Juicy Lemon</span>
    
      <p>9.99$</p>
    </div>
      </div>
    </div>
  )
}
