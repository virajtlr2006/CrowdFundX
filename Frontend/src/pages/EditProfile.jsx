
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router";
import axios from "axios"
const EditProfile = () => {
const [OldProfile, setOldProfile] = useState("")
const [fullname, setFullname] = useState("")
const [password, setPassword] = useState("")
const [image, setImage] = useState("")
const [description, setDescription] = useState("")
    useEffect(() => {
getOldProfile()
}, [])

    const getOldProfile = async () => {
        
        const email = localStorage.getItem("email")
        const API = await axios.post("http://localhost:8080/auth/profile",{
            email
        }
        )
        setOldProfile(API.data.profile);
        setFullname(API.data.profile.fullname)
        setPassword(API.data.profile.password)
        setImage(API.data.profile.image)
        setDescription(API.data.profile.discription)
        console.log(API.data.profile);
    }
    const navigate = useNavigate()
    const editProfile = async () => {
        const email = localStorage.getItem("email")
                const API = await axios.post("http://localhost:8080/auth/profile/edit",{
            email,password,image,fullname,"discription":description
        })
        navigate("/profile")
    }
  return (
    <div>
      <input type="text" placeholder='Full Name' value={fullname} onChange={(e) => setFullname(e.target.value)}/>
      <input type="password" placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
      <input type="text" placeholder='Image' value={image} onChange={(e) => setImage(e.target.value)}/>
      <input type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)}/>
      <button onClick={editProfile}>Update Profile</button>
    </div>
  )
}

export default EditProfile
