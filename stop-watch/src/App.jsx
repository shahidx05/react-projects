import React, {useState} from 'react'

const App = () => {
  const [time, setTime] = useState(0)

  const start = ()=>{
    setInterval(()=>{
      setTime((prev)=>prev+1)
    },1000)
  }

  return (
    <>
    <h2>Stopwatch is : {time}</h2>
    <button onClick={start} >Start</button>
    <button>Stop</button>
    <button>Reset</button>
    </>
  )
}

export default App