import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './home.css'
const Home = () => {
  return (
    <div>
      <Navbar/>
      <html></html>
      <div className='realcontain'>
      <div className="head">
        <div className='er'>

      
        <div className="heed_contain">
        <h1 className='tes2Style'>Satisfy your Appetite!</h1>
        <button>Order Now</button>
        <img src="./Fastfood.png" alt="" />
        </div>

        <div className="pic">
          <img className='ima' src="./Burger.png" alt="" />
        </div>
        </div>
      </div>
      </div>

      <Footer/>
        </div>
  )
}

export default Home
