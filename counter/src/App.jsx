import React from 'react'
import { useState } from 'react'
import './App.css'

const App = () => {

 const [x, setx] = useState(0);

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {x}</h2>
      <button onClick={()=>{setx(x+1)}}>inc</button>
      <button onClick={()=>{
        if(x>0) setx(x-1)
      }} >dec</button>
    </>
  )
}

export default App