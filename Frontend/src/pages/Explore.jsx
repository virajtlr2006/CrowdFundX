import { Computer } from 'lucide-react'
import React, { useState } from 'react'
import Singlecategory from '../../Components/Singlecategory'
import Singlecard from '../../Components/Singlecard'

const Explore = () => {
const [allpitch, setallpitch] = useState([{
    "name":"deep","description":"keugcdurcr","image":"https://imgs.search.brave.com/nXR3N7IRtwGwvfhbJe_o3JEH8bDpKhUmK78lNuSlDtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NDA2ODMyL3Bob3Rv/L3NvbGFyLXBvd2Vy/ZWQtYmF0dGVyeS1j/aGFyZ2VyLWhvb2tl/ZC10by1jZWxsLXBo/b25lLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wOFVOMEdD/MGhKYndDeVp5alB2/NEpaQlZ3QWZYYWhk/ZU43TlFYM21JNVRn/PQ","author":"darji"
},{ "name":"yash","description":"keugcdurcr","image":"https://imgs.search.brave.com/nXR3N7IRtwGwvfhbJe_o3JEH8bDpKhUmK78lNuSlDtU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvNTIw/NDA2ODMyL3Bob3Rv/L3NvbGFyLXBvd2Vy/ZWQtYmF0dGVyeS1j/aGFyZ2VyLWhvb2tl/ZC10by1jZWxsLXBo/b25lLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz0wOFVOMEdD/MGhKYndDeVp5alB2/NEpaQlZ3QWZYYWhk/ZU43TlFYM21JNVRn/PQ","author":"darji2"}])

    
  return (


    <div className='flex gap-60'>
      {/* Filter */}
      <div>
        
        <h1>Trending Categories</h1>
        
        {/* All Field */}
        <div>
        <Singlecategory name="Technology" icon={<Computer/>}/>
        <Singlecategory name="Art" icon={<Computer/>}/>
        <Singlecategory name="Film" icon={<Computer/>}/>
        <Singlecategory name="Music" icon={<Computer/>}/>
        <Singlecategory name="Game" icon={<Computer/>}/>
        <Singlecategory name="Design" icon={<Computer/>}/>
        </div>
      </div>

    {/* Random Filter */}
      <div className='flex gap-4'>

    {/* single card */}
    {allpitch && allpitch.map( (pitch) => {
        return  <Singlecard image={pitch.image} name={pitch.name} description= {pitch.description} author={pitch.author}/>
    })}
   
      </div>
    </div>


  )
}

export default Explore
