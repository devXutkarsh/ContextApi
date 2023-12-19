import React, {useContext, useState}from 'react'
import UserContext from '../context/UserContext'

function Login() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  const {setuser}= useContext(UserContext)
const handleSubmit=()=>{
e.PreventDefault()
setuser({username, password})
}
  return (
   <div>
    <h2>login</h2>
    <input type="text" placeholder='username'
     value={username} 
    onClick={(e)=>{setusername(e.target.value)
    }} 
    />
    {"  "}
    <input type="password" placeholder='password'
    value={password} 
    onClick={(e)=>{setpassword(e.target.value)}}
    />

    <button onClick={handleSubmit}>Submit</button>
    
   </div>
  )
}

export default Login