import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";

const Newpitch = () => {
  const [compname, setCompname] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [raisedfund, setRaisedfund] = useState("");
  const [totalfund, setTotalfund] = useState("");
  const [singleprice, setsingleprice] = useState(0)
  const navigate = useNavigate();

  const submitPitch = async () => {
    const email = localStorage.getItem("email");
    const npitch = await axios.post("http://localhost:8080/pitch/new", {
      compname,
      description,
      raisedfund,
      totalfund,
      email,
      image,
      singleprice
    });

    if (npitch.data.msg === "Successfully added") {
      navigate("/explore");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 flex items-center justify-center p-6 relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* New Pitch Form Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-8 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">
          Create Your Campaign
        </h1>

        <div className="space-y-4">
          {/* Image */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Campaign Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              placeholder="Image URL"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
            />
          </div>

          {/* Campaign Name */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Campaign Name</label>
            <input
              type="text"
              value={compname}
              onChange={(e) => setCompname(e.target.value)}
              placeholder="Campaign Name"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
            />
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Campaign Description"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all resize-none h-24"
            />
          </div>

          {/* Raised Fund */}
          <div>
            <label className="text-sm font-semibold text-gray-700">single  price</label>
            <input
              type="number"
              value={singleprice}
              onChange={(e) => setsingleprice(e.target.value)}
              placeholder="Raised Fund"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
            />
          </div>

          {/* Total Fund */}
          <div>
            <label className="text-sm font-semibold text-gray-700">Total Fund Goal</label>
            <input
              type="number"
              value={totalfund}
              onChange={(e) => setTotalfund(e.target.value)}
              placeholder="Total Fund Goal"
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="mt-6 flex justify-center">
          <button
            onClick={submitPitch}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 w-full"
          >
            Create Campaign
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newpitch;
