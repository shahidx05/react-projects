import React from 'react'
import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Nav from "./pages/Nav.jsx";
import NotFound from './pages/NotFound.jsx';
import User from './pages/User.jsx';
import './App.css'
const App = () => {
  return (
    <>
      <Nav></Nav>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/user/:name' element={<User />} />
          <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App