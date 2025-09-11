import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router";

const Profile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    viewProfile();
  }, []);

  const viewProfile = async () => {
    const email = localStorage.getItem("email");
    const API = await axios.post("http://localhost:8080/auth/profile", { email });
    setUser(API.data.profile);
  };

  const onLogOut = () => {
    localStorage.removeItem("email");
    navigate("/signin");
  };

  if (!user)
    return <p className="text-center mt-20 text-gray-600">Loading profile...</p>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-100 to-pink-50 flex items-center justify-center py-12 px-4 relative">
      {/* Decorative Background Shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      {/* Profile Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden z-10 text-center">
        {/* Header Section */}
        <div className="relative h-40 bg-gradient-to-r from-indigo-600 to-purple-600">
          <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
            <img
              src={user.image}
              alt={user.fullname}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Content Section */}
        <div className="mt-20 px-8 pb-10">
          <h1 className="text-4xl font-extrabold text-gray-900">{user.fullname}</h1>
          <p className="text-gray-500 text-sm mt-1">{user.email}</p>

          {/* Description */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-gray-700 mb-2">About Me</h2>
            <p className="text-gray-600 leading-relaxed">{user.discription}</p>
          </div>

          {/* Stats Section */}
          {user.stats && (
            <div className="mt-10 grid grid-cols-2 gap-6 text-center justify-items-center">
              {Object.entries(user.stats).map(([key, value], idx) => (
                <div key={idx}>
                  <p className="text-2xl font-bold text-indigo-600">{value}</p>
                  <p className="text-gray-500 text-sm mt-1">{key}</p>
                </div>
              ))}
            </div>
          )}

          {/* Action Buttons */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate("/profile/edit")}
              className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300"
            >
              Edit Profile
            </button>
            <button
              onClick={onLogOut}
              className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl shadow-lg hover:bg-gray-300 transition-all duration-300"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
