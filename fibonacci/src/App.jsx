import { useState, useMemo } from 'react'
import './App.css'

const App = () => {
  const [x, setx] = useState(0);
  const [num, setNum] = useState(null)

  function Fibonacci(n){
    if(n<=1) return n;
    return Fibonacci(n-1) + Fibonacci(n-2)
  }

  const result = useMemo(() => Fibonacci(num), [num])

  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value : {x}</h2>
      <button onClick={() => { setx(x + 1) }}>inc</button>
      <button onClick={() => {
        if (x > 0) setx(x - 1)
      }} >dec</button>

      <div>
        <h2>Fibonacci number is : {result}</h2>
        <input type='number' 
        value={num}
        onChange={(e)=>setNum(e.target.value)}
        />
      </div>
    </>
  )
}

export default App