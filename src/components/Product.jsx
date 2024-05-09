import React from 'react'
import productimage from "../assets/img/image 1.png"
import AOS from 'aos';

export default function Product() {
  AOS.init();
return (
<div className='products'>  
  <div className="text-p">
    <h1>Products</h1>
    <span>Order it for you or for your beloved ones </span>
    
  </div>
  <div className="cards">
    <div className="card-s">
        <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Spiced Mine</span>
        
          <p>9.99$</p>
        </div>
        <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Sweet Straweberry</span>
        
          <p>9.99$</p>
        </div>
        <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Cool Blueberries</span>
        
          <p>9.99$</p>
        </div>
        <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Juicy Lemon</span>
        
          <p>9.99$</p>
        </div>
    </div>
    <br />
    <div className="card-b">
      <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Product name</span>
      
        <p>9.99$</p>
      </div>
      <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Fragrant Cinnamon</span>
      
        <p>9.99$</p>
      </div>
      <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Summer Cherries</span>
      
        <p>9.99$</p>
      </div>
      <div className="card-a " data-aos="flip-up"><img src={productimage} alt="" /><span>Clean Lavander</span>
      
        <p>9.99$</p>
      </div>
    </div>
  </div>
</div>
)
}