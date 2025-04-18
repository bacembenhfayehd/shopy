import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import AllProducts from './AllProducts'

function Home() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Categories/>

        <Footer/>
    </div>
  )
}

export default Home