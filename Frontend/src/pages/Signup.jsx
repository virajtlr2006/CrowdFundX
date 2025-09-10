import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router";

const Signup = () => {

    const [fullname, setFullname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const onSubmit = async () => {

        const API = await axios.post("http://localhost:8080/auth/signup",{
          fullname,
          email,
          password
        })
        if (API.data.msg == "Signed Up! Success"){
          navigate("/signin")
        }
        
    }
  return (
    <div className='bg-red-900 m'>
    <label>Full Name</label>
      <input type="text" placeholder='Full Name' onChange={(e)=>setFullname(e.target.value)} />
      <label>Email</label>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
      <label >Password</label>
      <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
      <button onClick={onSubmit}>Sign Up</button>
    </div>
  )
}

export default Signup
