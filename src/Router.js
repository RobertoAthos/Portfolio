import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Certificates from './Pages/Certificates'
import Contato from './Pages/Contato'
import Home from './Pages/Home'

function Router() {
  return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Contato' element={<Contato/>}/>
            <Route path='/Certificados' element={<Certificates/>}/>
        </Routes>

  )
}

export default Router