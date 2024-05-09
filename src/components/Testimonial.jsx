import React from 'react'
import first from "../assets/img/img.png"
import second from "../assets/img/bg.png"
import third from "../assets/img/bg copy.png"
import starts from "../assets/img/Stars.png"
import AOS from "aos"

function Testimonial() {
    AOS.init()
  return (
    <div className='testimonial'>
      <h1>Testimonials</h1>
      <span>Some quotes from our happy customers</span>
      <div className="cards-b">
      <div className="card-j" data-aos="fade-down-right">
            <img src={first} alt="" />
            <img src={starts} alt="" />
            <p>“I love it! No more air fresheners”</p>
            <span>Luisa</span>
        </div>
        <div className="card-j" data-aos="fade-down">
        <img src={second} alt="" />
            <img src={starts} alt="" />
            <p>“I love it! No more air fresheners”</p>
            <span>Edoardo</span>
        </div>
        <div className="card-j" data-aos="fade-down-left">
        <img src={third} alt="" />
            <img src={starts} alt="" />
            <p>“I love it! No more air fresheners”</p>
            <span>Mart</span>
        </div>

      </div>
    </div>
  )
}

export default Testimonial
