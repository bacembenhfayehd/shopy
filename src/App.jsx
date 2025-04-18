import React from 'react'
import Home from './page/Home'
import { Route, Routes } from 'react-router-dom'
import AllProducts from './page/AllProducts'

import CategoryProducts from './page/CategoryProducts'
import Productdetails from './page/Productdetails'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/products' element={<AllProducts/>}/>
    <Route path='products/:id' element={<Productdetails/>}/>
    <Route path='category/:categoryName' element={<CategoryProducts/>}/>
   </Routes>
  )
}

export default App