import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './components/Home'
import Navbar from './components/Navbar'
import './App.css'
import Signup from './components/Signup'
import Login from './components/Login'
import EventHandling from './components/EventHandling'
import {SnackbarProvider} from 'notistack'
import ManageUsers from './components/ManageUsers'

const App = () => {
  return (
    <div>
      <SnackbarProvider />
      <BrowserRouter>
      <Navbar />
      <Routes>
        {/* <Route path= '/' element= {<Home />} /> */}
        <Route path= '/' element= {<Home />} />
        <Route path= '/Home' element= {<Home />} />
        <Route path= '/Signup' element= {<Signup />} />
        <Route path= '/Login' element= {<Login />} />
        <Route path= '/EventHandling' element= {<EventHandling />} />
        <Route path= '/ManageUsers' element= {<ManageUsers />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App