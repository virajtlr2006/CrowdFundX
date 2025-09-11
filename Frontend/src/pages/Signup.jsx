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
    if (API.data.msg === "Signed Up! Success") {
      navigate("/signin")
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section - Impactful Text */}
      <div className="flex flex-col justify-center items-start px-20 w-1/2 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <Rocket className="h-16 w-16 mb-6" />
        <h1 className="text-4xl font-bold">Launch Your Big Idea</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-md">
          CrowdfundX empowers dreamers, creators, and innovators to bring bold visions to life. 
          Join our community and take the first step toward making your idea a reality.
        </p>
      </div>

      {/* Right Section - Signup Card */}
      <div className="flex items-center justify-center w-1/2">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
          {/* Header */}
          <div className="text-center mb-6">
            <Layers className="mx-auto text-blue-700 h-12 w-12" />
            <h1 className="font-bold text-2xl mt-2">Create Account</h1>
            <p className="text-sm text-gray-500">Start your journey with CrowdfundX</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                className="mt-1 h-10 p-3 w-full shadow-sm bg-gray-100 rounded focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                className="mt-1 h-10 p-3 w-full shadow-sm bg-gray-100 rounded focus:ring-indigo-500 focus:border-indigo-500"
                type="text"
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                className="mt-1 h-10 p-3 w-full shadow-sm bg-gray-100 rounded focus:ring-indigo-500 focus:border-indigo-500"
                type="password"
                placeholder="Enter your password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
                I agree to the{" "}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Terms and Conditions
                </a>
              </label>
            </div>

            <button
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              onClick={onSubmit}
            >
              Create Account
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/signin">
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
