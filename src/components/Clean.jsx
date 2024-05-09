import React from 'react'
import ptichka from "../assets/svg/yes.svg"
import Button from '@mui/material/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'; // AOS CSS faylini import qiling



export default function Clean() {
  AOS.init({
    duration: 800,
    easing: 'ease-in-out'
  });
  return (
    <div className='clean'>
      <div className="left">
      <h1>Clean and <br />fragrant soy wax</h1>
      <span>Made for your home and for your wellness</span>
      <div className="text-l">
      <div className="pit"><img src={ptichka} alt="" />
      <p> Eco-sustainable:All recyclable materials, 0% CO2 emissions</p></div>
      <div className="pit"><img src={ptichka} alt="" />
      <p> Hyphoallergenic: 100% natural, human friendly ingredients </p></div>
      <div className="pit"><img src={ptichka} alt="" />
      <p> Handmade: All candles are craftly made with love.</p></div>
      <div className="pit"><img src={ptichka} alt="" />
      <p> Long burning: No more waste. Created for last long.</p></div>
      </div>
      <Button variant="contained" id='btn-m'>Learn More</Button>
      </div>

      <div className="right" data-aos="fade-up"
     data-aos-anchor-placement="top-center"></div>
    </div>
  )
}
