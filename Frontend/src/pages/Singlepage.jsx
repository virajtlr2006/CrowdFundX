import React from 'react'
import Pitchcard from '../../Components/Pitchcard'

const Singlepage = () => {

    const [singlepitch, setsinglepitch] = useState(null)
  return (
    <div className='bg-red-300 flex '>
      
      {/* Pitch div */}
      <div className='bg-amber-950 h-screen w-full'>Pitch

   {singlepitch && <Pitchcard pitch_name={} pitch_description={} />
}  

      </div>
      <div className='bg-amber-200 w-full'>Price</div>
    </div>
  )
}

export default Singlepage
