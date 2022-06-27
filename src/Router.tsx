import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Contato from './Pages/Contato.tsx'
import Home from './Pages/Home.tsx'

function Router() {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contato' element={<Contato/>}/>
        </Routes>

  )
}

export default Router