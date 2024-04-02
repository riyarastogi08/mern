import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path= '/' element= {<Home />} /> */}
        <Route path= '/' element= {<Home />} />
        <Route path= '/Home' element= {<Home />} />
        <Route path= '/Signup' element= {<Signup />} />
        <Route path= '/Login' element= {<Login />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App