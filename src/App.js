import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import Menu from './pages/Menu'
import Contact from './pages/Contact'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  // const valid = true;
  return (
    <div>
      {/* {valid ? <Home/>: <About/> } */}
     <BrowserRouter>
    <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/contact' element={<Contact/>} /> 
    <Route path='/menu' element={<Menu/>} />
  </Routes>
   </BrowserRouter>
   {/* <About/>
   <Menu/> */}
    </div>
  )
}

export default App
