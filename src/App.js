import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Footer from './Components/Footer'
import ProductCard from './Components/ProductCard'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Pages/Home'
import CartDetail from './Components/Pages/CartDetail'
import Counter from './Components/Counter'

const App = () => {   
  return (
    <div>
   <Navbar/>
  <Routes>
    <Route path='/' element={<Counter/>}/>
    <Route path='/cart-detail' element={<CartDetail/>}/>
  </Routes>
   <Footer/>
    </div>
  )
}

export default App