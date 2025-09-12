import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Membercard from "../../Components/Membercard";

const Singlepage = () => {
  const [singlepitch, setsinglepitch] = useState(null);
  const [fund, setfund] = useState(0);
  const [ufund, setufund] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getpitch();
  }, []);

  const getpitch = async () => {
    const email = localStorage.getItem("email");
    const pitch = await axios.post("http://localhost:8080/pitch/single", {
      id,
      email,
    });
    setsinglepitch(pitch.data.singlepitch);
    setfund(pitch.data.fund);
    setufund(pitch.data.userfund);
  };

  const backtoproject = () => {
    navigate(`/payment/${id}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 py-14 px-6">
      {singlepitch ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Section */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pitch Info */}
            <div className="bg-white rounded-3xl shadow-lg p-10 transition-transform hover:scale-[1.01]">
              <h1 className="text-4xl font-extrabold text-gray-900 mb-6 tracking-tight">
                {singlepitch.compname}
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
                {singlepitch.description}
              </p>
            </div>

            {/* Team Section */}
            <div className="bg-white rounded-3xl shadow-lg p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                Meet The Team 👥
              </h2>
              <div className="flex flex-wrap gap-8">
                {singlepitch.team.map((member, idx) => (
                  <Membercard
                    key={idx}
                    image={member.image}
                    Mname={member.name}
                    role={member.role || "Team Member"}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white rounded-3xl shadow-xl p-10 flex flex-col items-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Funding Progress 💰
            </h2>

            {/* Raised vs Goal */}
            <div className="text-center space-y-2">
              <p className="text-lg text-gray-600">
                Raised:{" "}
                <span className="font-bold text-green-600">
                  ${fund.toLocaleString()}
                </span>
              </p>
              <p className="text-lg text-gray-600">
                Goal:{" "}
                <span className="font-bold text-indigo-600">
                  ${singlepitch.totalfund.toLocaleString()}
                </span>
              </p>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-4 mt-6 overflow-hidden">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-4 transition-all duration-500"
                style={{
                  width: `${Math.min(
                    (fund / singlepitch.totalfund) * 100,
                    100
                  )}%`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {((fund / singlepitch.totalfund) * 100).toFixed(1)}% funded
            </p>

            {/* User Contribution */}
            <div className="mt-6 p-4 bg-indigo-50 rounded-xl text-center w-full">
              <p className="text-gray-700 font-medium">
                You own <span className="font-bold">{ufund}</span> shares
              </p>
              <p className="text-gray-600 text-sm mt-1">
                (${singlepitch.singleprice * ufund})
              </p>
            </div>

            {/* Call to Action */}
            <button
              onClick={backtoproject}
              className="mt-8 w-full px-6 py-4 bg-indigo-600 text-white font-semibold text-lg rounded-xl shadow-md hover:bg-indigo-700 transition-all"
            >
              Invest Now 🚀
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500 animate-pulse">
          Loading pitch details...
        </p>
      )}
    </div>
  );
};

export default Singlepage;
