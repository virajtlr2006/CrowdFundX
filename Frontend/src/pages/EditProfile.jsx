import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";

const EditProfile = () => {
  const [OldProfile, setOldProfile] = useState("");
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getOldProfile();
  }, []);

  const getOldProfile = async () => {
    const email = localStorage.getItem("email");
    const API = await axios.post("http://localhost:8080/auth/profile", { email });
    setOldProfile(API.data.profile);
    setFullname(API.data.profile.fullname);
    setPassword(API.data.profile.password);
    setImage(API.data.profile.image);
    setDescription(API.data.profile.discription);
  };

  const editProfile = async () => {
    const email = localStorage.getItem("email");
    await axios.post("http://localhost:8080/auth/profile/edit", {
      email,
      password,
      image,
      fullname,
      discription: description,
    });
    navigate("/profile");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 flex items-center justify-center p-6 relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Edit Profile Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 z-10">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Edit Profile</h1>

        {/* Profile Image Preview */}
        <div className="flex justify-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-500 shadow-lg">
            <img
              src={image}
              alt={fullname}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          <div>
            <label className="text-sm font-semibold text-gray-700">Full Name</label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              placeholder="Full Name"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              placeholder="Password"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">Profile Image URL</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all"
              placeholder="Image URL"
            />
          </div>

          <div>
            <label className="text-sm font-semibold text-gray-700">Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="mt-1 w-full px-4 py-2 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-400 focus:outline-none transition-all resize-none h-24"
              placeholder="Tell us about yourself"
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={editProfile}
            className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 w-full"
          >
            Update Profile
          </button>
          <button
            onClick={() => navigate("/profile")}
            className="px-6 py-3 bg-gray-200 text-gray-700 font-semibold rounded-xl shadow-lg hover:bg-gray-300 transition-all duration-300 w-full"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditProfile;
