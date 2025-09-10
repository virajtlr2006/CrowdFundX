import React from 'react'
import { Layers } from 'lucide-react'
const Navbar = () => {
  return (
    <div className='flex justify-between px-12'>
      <a href="/" className='flex gap-3'>
        <Layers />
        <label>CrowdFundX</label>
      </a>
      <div className='flex gap-4'>
        {["Home", "Explore", "Start a Campign", "About"].map((link) =>
          <a href={link}>{link}</a>
        )}
      </div>
      <div className='flex gap-3'>
        <button><a href='/signin'>Login</a></button>
        <button><a href='/signup'>SignUP</a></button>
      </div>
    </div>
  )
}

export default Navbar
