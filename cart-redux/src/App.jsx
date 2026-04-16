import React from 'react'
import Card from './components/Card'
import Header from './components/Header'
import { Home } from './components/Home';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Header/>
      <Home />
      {/* <CartSidebar /> */}
    </div>
  );
}

export default App