import React from 'react'

const Pitchcard = ({pitch_name,pitch_description}) => {
  return (
    <div>
    <h1>{pitch_name}</h1>
    <p>{pitch_description}</p>
    </div>

  )
}

export default Pitchcard
