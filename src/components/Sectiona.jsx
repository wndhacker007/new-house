import React from 'react'
import grass from "../assets/img/hero-title.png"
import AOS from 'aos';
import 'aos/dist/aos.css'; 

export default function Sectiona() {
  AOS.init({
     // Whether animations should happen only once or every time they come into view
  });
  return (
    <div className='section'>
      <div className="card-bg" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000" >
        <div className="text">
        <img src={grass} alt="" />
        <p>All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments </p>
          <button>Discovery our collection</button> 
        </div>
      </div>
      
</div>
    
  )
}
