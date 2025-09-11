import React from 'react'

const Membercard = ({image,Mname,role}) => {
  return (
   <div className='border-2'>
            <img src={image} alt="" />
            <p>{Mname}</p>
            <p>{role}</p>
          </div>
  )
}

export default Membercard
