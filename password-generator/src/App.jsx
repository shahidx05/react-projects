import React, { useState, useEffect, useCallback, useRef } from 'react'

const App = () => {
  const [len, setlen] = useState(8)
  const [nums, setnums] = useState(true)
  const [chars, setchars] = useState(true)
  const [password, setpassword] = useState('')

  //useRef hook
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pwd = ''
    const numbers = '0123456789'
    let strs = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const characters = '!@#$%^&*{}()~'
    if (nums) strs += numbers
    if (chars) strs += characters
    for (let i = 0; i < len; i++) {
      const index = Math.floor(Math.random() * strs.length + 1)
      pwd += strs[index]
    }
    setpassword(pwd)
  }, [len, nums, chars, setpassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    generatePassword()
  }, [len, nums, chars, generatePassword])


  return (
    <div className='container'>
      <div className='input-box'>
        <input 
        type="text" 
        value={password} 
        readOnly
        ref={passwordRef}
         />

        <button onClick={copyPasswordToClipboard}>Copy</button>
      </div>

      <div className='bottom'>
        <input type="range" id="length" min="6" max="40" value={len} onChange={(e) => {
          setlen(e.target.value)
        }} />
        <label htmlFor="length">Length ({len})</label>

        <label htmlFor="nums">Numbers</label>
        <input type="checkbox" id="nums" checked={nums} onChange={(e) => {
          setnums(e.target.checked)
          // setnums((prev)=>!prev)
        }} />

        <label htmlFor="chars">Characters</label>
        <input type="checkbox" id="chars" checked={chars} onChange={(e) => {
          setchars(e.target.checked)
        }} />
      </div>
    </div>
  )
}

export default App