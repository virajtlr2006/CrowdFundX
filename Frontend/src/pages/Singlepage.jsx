import React, { useEffect, useState } from 'react'
import Pitchcard from '../../Components/Pitchcard'
import { useParams } from 'react-router'
import axios from 'axios'
import Membercard from '../../Components/Membercard'

const Singlepage = () => {

  useEffect(() => {

    getpitch()

  }, [])

  const [singlepitch, setsinglepitch] = useState(null)
  //    getting data from backend
  const { id } = useParams()
  const getpitch = async () => {
    console.log(id);
    const pitch = await axios.get(`http://localhost:8080/pitch/${id}`)
    console.log(pitch.data);
    setsinglepitch(pitch.data)


  }
  return (
    <div className='bg-red-300 flex '>

      {/* Pitch div */}
      <div className='bg-amber-950 h-screen w-full'>Pitch

        {singlepitch && <Pitchcard pitch_name={singlepitch.compname} pitch_description={singlepitch.description} />

        }

        {/* Meet team div */}
        <div className='border-2 flex flex-col '>
          <h1>Meet The Team</h1>
        <div className='flex gap-1'>
           {/* <Membercard image={singlepitch.team}/> */}
         {singlepitch && singlepitch.team.map( (pitch) => {
          return <Membercard image={pitch.image} Mname={pitch.name} role={pitch.role || " "}/>
         })}

        </div>
        </div>

      </div>

      {/* Fund div */}
      <div className='bg-amber-200 w-full'>
         {singlepitch && <p>{singlepitch.raisefund},{singlepitch.totalfund}</p>}

      </div>
    </div>
  )
}

export default Singlepage
