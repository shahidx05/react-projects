import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Save from './pages/Save.jsx';
import Navbar from './components/Navbar.jsx';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/save' element={<Save />} />
      </Routes>
    </>
  )
}

export default App