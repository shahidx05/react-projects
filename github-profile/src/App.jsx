import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Card from './Card'

const App = () => {
  const [data, setdata] = useState([])
  const [num, setnum] = useState("10")
  const [loading, setLoading] = useState(false)

  const getData = async () => {
    if (num <= 0) return
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users?per_page=${num}`)
    setdata(res.data)
    
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(data)

  return (
    <>
      <div className='my-10 mx-auto w-xs flex gap-2'>
        <input className='border-2 p-1.5 rounded-xl'value={num} type="number" onChange={(e) => {
          setnum(e.target.value)
        }} />
        <button className='bg-amber-200 p-2.5 rounded-2xl' onClick={getData} >Get Data</button>
      </div>
      {loading && (
        <p className="text-center text-lg font-medium">
          Loading...
        </p>
      )}
      {!loading && (
        <div className='flex gap-2 flex-wrap'>
          {data.map(user => (
            <Card key={user.id} data={user} />
          ))}
        </div>
      )}
    </>
  );
}

export default App