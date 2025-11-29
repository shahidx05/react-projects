import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Contact from "./pages/contact.jsx";
import Nav from "./pages/nav.jsx";
import './App.css'
const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
    </>
  )
}

export default App