import React, { useState } from 'react'

const Profile = () => {
    
    const [user, setuser] = useState({
        "fullname":"Viraj Tailor",
        "email":"virajtlr2006@gmail.com"
    })

    const OnEdit = async () => {
        console.log("Edit Profile")
    }

        const OnLogOut = async () => {
        console.log("Log Out Successfull")
    }
  return (
    <div>
        {user.fullname}
        {user.email}
        <button onClick={OnEdit}>Edit Profile</button>
        <button onClick={OnLogOut}>Log Out</button>
    </div>
  )
}

export default Profile
