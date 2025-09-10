import React, { useState } from 'react'
import axios from "axios"
import { useEffect } from 'react'
import { useNavigate } from "react-router";
const Profile = () => {
    const navigate = useNavigate()
    const [user, setuser] = useState(null)
    useEffect(() => {
ViewProfile()
    }, [])
    

    const ViewProfile = async () => {
        console.log("Edit Profile")
        const email = localStorage.getItem("email")
        const API = await axios.post("http://localhost:8080/auth/profile",{
            email
        }
        )
        setuser(API.data.profile);
        
    }

        const OnLogOut = async () => {
        console.log("Log Out Successfull")
    }
  return (
 <>{user &&  <div>
        {user.fullname}
        {user.email}
        {user.image}
        {user.discription}
        <button onClick={() => navigate() }>Edit Profile</button>
        <button onClick={OnLogOut}>Log Out</button>
    </div>}</>
  )
}

export default Profile
