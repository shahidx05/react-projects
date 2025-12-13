import React ,{useState, useEffect} from 'react'
import axios from 'axios'
import Card from './Card'

const App = () => {
  const [data, setdata] = useState([])
  const getData = async()=>{
      const res = await axios.get(`https://api.github.com/users?per_page=10`)
      setdata(res.data)
  }

  useEffect(() => {
    getData()
  }, [])
  
  console.log(data)

return (
  <div className='flex gap-2 flex-wrap'>
    {data.map((e, index) => (
      <Card key={index} data={e} />
    ))}
  </div>
);
}

export default App