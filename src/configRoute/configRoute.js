import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Catalog from '../pages/Catalog'
import Detail from '../components/details/Detail'

const MovieRoute = () => {
  return (
      <>
          <Routes>
                <Route path='/:category/search/:keyword' element={<Catalog/>} />
                
                <Route path='/:category' element={<Catalog/>} >
                <Route path='/:category/:id' element={<Detail/>} />
                </Route>
                <Route path='/' exact element={<Home/>} />
            </Routes>
      </>
        
    
  )
}

export default MovieRoute 