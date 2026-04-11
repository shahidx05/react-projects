import React, { useState, useRef } from 'react'
import './App.css'
const App = () => {
  const [time, setTime] = useState(0)
  const intervalRef = useRef(null)

  const start = () => {
    if (intervalRef.current !== null) return

    intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000)
  }

  const stop = () => {
    clearInterval(intervalRef.current)
    intervalRef.current = null
  }
  const reset = () => {
    // clearInterval(intervalRef.current)
    // intervalRef.current = null
    stop()
    setTime(0)
  }

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
  }

  return (
    <div className="container">
      <h2 className="time">⏱ {formatTime(time)}</h2>

      <div className="buttons">
        <button className="start" onClick={start}>Start</button>
        <button className="stop" onClick={stop}>Stop</button>
        <button className="reset" onClick={reset}>Reset</button>
      </div>
    </div>
  )
}

export default App