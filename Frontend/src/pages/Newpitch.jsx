import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

const Newpitch = () => {
    const [compname, setcompname] = useState("")
    const [description, setdescription] = useState("")
    const [image, setimage] = useState("")
    const [raisedfund, setraisedfund] = useState("")
    const [totalfund, settotalfund] = useState("")
    const naviagate = useNavigate()
    
    const submitpitch = async () => {
        console.log(compname,description,image,raisedfund,totalfund);
        const email = localStorage.getItem("email")
        const npitch = await axios.post("http://localhost:8080/pitch/new",
            {compname,description,raisedfund,totalfund,email,image}
        )
        // console.log(npitch.data.msg);

        if(npitch.data.msg=="Successfully added"){
            naviagate("/explore")
        }
        
    }
  return (
    <div>
      <h1>Create Your Campaign</h1>
      <p>image</p>
      <input type="text" placeholder='Image' onChange={(e)=> setimage(e.target.value)} />
      <p>name</p>
      <input type="text" placeholder='Name' onChange={(e)=> setcompname(e.target.value)} />
      <p>Description</p>
      <input type="text" placeholder='Description'onChange={(e)=> setdescription(e.target.value)} />
      <p>Raised Fund</p>
      <input type="number" placeholder='Raised Fund'onChange={(e)=> setraisedfund(e.target.value)} />
      <p>Total Fund</p>
      <input type="number" placeholder='Total Fund'onChange={(e)=> settotalfund(e.target.value)} />

      <button onClick={submitpitch}>Create Pitch</button>

    </div>
  )
}

export default Newpitch
