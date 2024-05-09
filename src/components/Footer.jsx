import React from 'react'
import line from "../assets/svg/line.svg"
import logo from "../assets/img/logo.png"

export default function Footer() {
  return (
    <div className='foter'>
      <img src={line} alt="" />
      
      <div className="foterAf">
      <div className="first-r">
        <img src={logo} alt="" />
        <span>Your natural candle made for your home and for your wellness.</span>
      </div>
      <div className="second-r">
        <a href="#" id='al'>Discovery</a>
        <a href="#">New season</a>
        <a href="#">Most searched</a>
        <a href="#">Most selled</a>
      </div>
      <div className="third-r">
        <a href="#" id='al'>About</a>
        <a href="#" id='about'>Help</a>
        <a href="#" id='about'>Shipping</a>
        <a href="#" id='about'>Affiliate</a>
      </div>
      <div className="right-r">
        <a href="#" id='al'>Info</a>
        <a href="#" >Contact us</a>
        <a href="#" >Privacy Policies</a>
        <a href="#" >Terms & Conditions</a>
      </div>
      </div>
    </div>
  )
}
