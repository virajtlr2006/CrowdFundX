import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router";
import { LogIn, Rocket } from 'lucide-react';

const Signin = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const navigate = useNavigate()

  const onSubmit = async () => {
    const API = await axios.post("http://localhost:8080/auth/signin", {
      email,
      password
    })

    if (API.data.msg === "Please Signup first!") {
      alert("Please SignUp First")
    }
    if (API.data.msg === "Wrong Password Check Again") {
      alert("Enter Correct Password")
    }
    if (API.data.msg === "Signed Successfully") {
      localStorage.setItem("email", email)
      navigate("/")
    }
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Left Section - Impactful Text */}
      <div className="flex flex-col justify-center items-start px-20 w-1/2 bg-gradient-to-br from-indigo-600 to-blue-500 text-white">
        <Rocket className="h-16 w-16 mb-6" />
        <h1 className="text-4xl font-bold">Welcome Back to CrowdfundX</h1>
        <p className="mt-4 text-lg text-gray-200 max-w-md">
          Reignite your vision, connect with backers, and continue building the future you’ve always imagined.
        </p>
      </div>

      {/* Right Section - Signin Card */}
      <div className="flex items-center justify-center w-1/2">
        <div className="bg-white shadow-lg rounded-2xl p-8 w-96">
          {/* Header */}
          <div className="text-center mb-6">
            <LogIn className="mx-auto text-blue-700 h-12 w-12" />
            <h1 className="font-bold text-2xl mt-2">Sign In</h1>
            <p className="text-sm text-gray-500">Access your CrowdfundX account</p>
          </div>

          {/* Form */}
          <div className="space-y-4">
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

            <div className="flex items-center justify-between">
              <label className="flex items-center text-sm text-gray-600">
                <input type="checkbox" className="mr-2 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-sm font-medium text-indigo-600 hover:text-indigo-500">Forgot password?</a>
            </div>

            <button
              className="w-full flex justify-center py-3 px-4 rounded-lg shadow-sm text-sm font-medium text-white bg-[#4F46E5] hover:bg-[#4338CA] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
              onClick={onSubmit}
            >
              Sign In
            </button>
          </div>

          {/* Footer */}
          <div className="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?{" "}
            <a className="font-medium text-indigo-600 hover:text-indigo-500" href="/signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin
