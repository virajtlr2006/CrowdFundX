import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router";

const Signin = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()
    const onSubmit = async () => {
        const API= await axios.post("http://localhost:8080/auth/signin",{
            email,
            password
        })
        console.log(API);
        if( API.data.msg == "Please Signup first!"){
            alert("Please SignUp First")
        }
        if(API.data.msg =="Wrong Password Check Again"){
            alert("Enter Correct Password")
        }
        if(API.data.msg == "Signed Successfully"){
            localStorage.setItem("email",email)
            navigate("/")
        }

    }
    return (
        <div>
            <label>Email</label>
            <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
            <label >Password</label>
            <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            <button onClick={onSubmit}>Sign In</button>
        </div>
    )
}

export default Signin
