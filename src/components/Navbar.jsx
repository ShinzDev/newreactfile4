import React from 'react'
import './nav.css'
const Navbar = () => {
  return (
    <div>
      <nav>
        <div className="logo">
            <img src="./Logo.png" alt="" />

        </div>

        <div className="lists">
            <ul className='unoderli'>
                <li><a className='textStyle' href="/">Home</a></li>
                <li><a className='textStyle' href="/menu">Menu</a></li>
                <li><a className='textStyle' href="/about">About</a></li>
                <li><a className='textStyle' href="/contact">Contact US</a></li>
                
            </ul>
        </div>
        <div className="search">
            <input  className='searchStyle' type="search" placeholder='Search food'/>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
