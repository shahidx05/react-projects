import React, {useState} from 'react'
import { UseUser } from '../context/UserContext'

const Login = () => {
    const {setUser} = UseUser()
    const [username, setusername] = useState("");
    const [password, setpassword] = useState("");

    const handleSubmit = ()=>{
        setUser(username)
    }

  return (
    <div>
        <h2>Log In</h2>
        <input 
        type="text" 
        placeholder='username' 
        value={username}  
        onChange={(e)=>setusername(e.target.value)}
        />
        <input 
        type="text" 
        placeholder='password' 
        value={password} 
        onChange={(e)=>setpassword(e.target.value)}
        />
        <button onClick={handleSubmit} >Submit</button>
    </div>
  )
}

export default Login