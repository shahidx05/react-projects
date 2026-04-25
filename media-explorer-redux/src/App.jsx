import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Save from './pages/Save.jsx';
import Navbar from './components/Navbar.jsx';
import { ToastContainer} from 'react-toastify';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/saved' element={<Save />} />
      </Routes>
      <ToastContainer  theme="dark"  />
    </>
  )
}

export default App