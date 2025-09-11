import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router";
import { Layers, Rocket } from 'lucide-react';

const Signup = () => {

  const [fullname, setFullname] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()
  const onSubmit = async () => {

    const API = await axios.post("http://localhost:8080/auth/signup", {
      fullname,
      email,
      password
    })
    if (API.data.msg == "Signed Up! Success") {
      navigate("/signin")
    }

  }
  return (
    <div>
      <div className='flex items-center justify-center min-h-screen bg-gray-100 '>
        <div>
        </div>
        <div className='pr-20'>
          <Rocket className='text-blue-700 h-20 w-20 ml-20'/>
          <h2 class="text-3xl font-bold text-gray-800">Launch Your Dream</h2>
          <p class="text-gray-600 mt-3 max-w-sm">Join a community of innovators, creators, and supporters. Bring your ideas to life with CrowdfundX.</p>
        </div>
        <div className='bg-white grid grid-rows-2 justify-center items-center border-2 h-140 w-90 rounded-2xl'>


          <div className='mb-10 ml-4'>
            <Layers className='ml-28 text-blue-700 ' />
            <h1 className='font-bold text-3xl'>Join CrowdfundX</h1>
            <h6 className='text-xs mb-2 ml-4 '>Create your own account to get started</h6>
          </div>


          <div className='mb-22'>
            <div className='py-3 '>
              <input className='h-7 w-70 border-1 bg-gray-100 rounded' type="text" placeholder='Full Name' onChange={(e) => setFullname(e.target.value)} /> <br />
            </div>

            <div className='py-3'>
              <input className='h-7 w-70 border-1 bg-gray-100 rounded' type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)} /> <br />
            </div>

            <div className='py-3'>
              <input className='h-7 w-70 border-1 bg-gray-100 rounded' type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> <br />
            </div>
            <div class="flex items-center">
              <input class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 checked:bg-indigo-600 checked:border-indigo-600 checked:bg-[image:var(--checkbox-tick-svg)]" id="terms" name="terms" type="checkbox" />
              <label class="ml-2 block text-sm text-gray-900" for="terms">I agree to the <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">Terms and Conditions</a></label>
            </div>
            <div className='py-3'>
              <button className='w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors' onClick={onSubmit}>Create Account</button>
            </div>
            <div class="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" href="#">
                  <span class="sr-only">Sign up with Google</span>
                  <img alt="Google" class="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDYdf418qDnpckA_BQ8p02ztcmfwwiaSgVWBveFuj2_M1HP2hlmhC2ZHGENhhG1Q3T5JHD-NJWKGadxbyLw7ijjD9V9mXdvcULssgsBO_ADQvQ5yLMMvC8b2hDbAjVBMWjaz-noPXyXWVKK6LQ8dve0uxowxwhDhYBzy_O9dP33CnSES-LB2-0pgASRgx-pqcJzEcpx73qIvTbuv72IGZ5jRZz6kR2r30USd-O1L5ktuMPeHVnU1m-eDU00Yzm_Fgrd5QfC1Ahj5EIQ" />
                </a>
              </div>
              <div>
                <a class="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" href="#">
                  <span class="sr-only">Sign up with GitHub</span>
                  <img alt="GitHub" class="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCrlFgfci9GTD8rWlFBJztPtn5Tu8OXxTYWW8_q71wlLb9m-FprFR7wrIfY0V6lCgNKWi1JE9fmQogfhduLkA90b70DGucBsStRddZjMFwpSvOWfueyhAtmMeScW9gMSKmEeIFyvH56Zw9NuceGp9nM31b4LUXxTuLWHaTVBRJMOEoJ56AmyhShhqKT9p3_BgLdEWIic6tP0tFFlsA4fmSLoKmzhaqR3qB-uQEXRkwJL8JNPzWTbj_qEa3VywW0ydkUb9WVP-PvjD3R" />
                </a>
              </div>
              <div>
                <a className="w-full inline-flex justify-center py-2.5 px-4 border border-gray-300 rounded-lg shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors" href="#">
                  <span className="sr-only">Sign up with Facebook</span>
                  <img alt="Facebook" className="h-5 w-5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfq2NPmVkSgBNRahdtZPgBtv2bHMmfJQzgx0WDEfFQYsSM0B-EGzBvnmSagGQbhUFhcFZNOg4bfMguh3bFFdJBhagohdJqNtcBXzM6eyEyc0iC_WJjbxpAL5pdnADK12jit-TZ9-rv2wU6-nuBdUUIoWWFckI31Brib08-lcGQyOj74zIRofYOukH3lEUQ9J9z1kUukS-8SVJIjuicJsdOwFUZAzVwaOIODJlyr52GhqyNV8IYfsiUfy4K1QgC7wDyInaWOsxy1gSw" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-gray-500">
            Already have an account? <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">Sign In</a>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
