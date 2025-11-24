import {useState} from 'react'
import './index.css'

const App = () => {
  const [bg, setbg] = useState('black')

  const changeBg = (color)=>{
    setbg(color)
  }

  return (
    <div className='background' style={{backgroundColor: bg}}>
      <div className='tab' >
        <button style={{backgroundColor: "green", }} onClick={() => changeBg("green")}>Green</button>
        <button style={{backgroundColor: "blue"}} onClick={() => changeBg("blue")}>Blue</button>
        <button style={{backgroundColor: "red"}} onClick={() => changeBg("red")}>Red</button>
        <button style={{backgroundColor: "olive"}} onClick={() => changeBg("olive")}>Olive</button>
        <button style={{backgroundColor: "gray"}} onClick={() => changeBg("gray")}>Gray</button>
        <button style={{backgroundColor: "yellow", color: "black"}} onClick={() => changeBg("yellow")}>Yellow</button>
        <button style={{backgroundColor: "pink",color: "black" }} onClick={() => changeBg("pink")}>Pink</button>
        <button style={{backgroundColor: "purple"}} onClick={() => changeBg("purple")}>Purple</button>
        <button style={{backgroundColor: "black", color: "white"}} onClick={() => changeBg("black")}>Black</button>
        <button style={{backgroundColor: "lavender", color: "black"}} onClick={() => changeBg("lavender")}>Lavender</button>
        <button style={{backgroundColor: "white", color: "black"}} onClick={() => changeBg("white")}>White</button>
      </div>
    </div>
  )
}

export default App