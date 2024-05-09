import React from 'react'
import Navbar from './Navbar'
import Sectiona from './Sectiona'
import Product from './Product'
import Clean from './Clean'
import Testimonial from './Testimonial'
import Popular from './Popular'
import Footer from './Footer'
import Shoxa from './Shoxa'



export default function Main() {
  return (
    <div className='main'>
    <Navbar/>
    <Sectiona/>
    <Product/>
    <Clean/>
    <Testimonial/>
    <Popular/>
    <Footer/>
    <Shoxa/>
    </div>
    
  )
}
