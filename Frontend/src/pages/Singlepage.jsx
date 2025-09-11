import React, { useEffect, useState } from "react";
import Pitchcard from "../../Components/Pitchcard";
import { useNavigate, useParams } from "react-router";
import axios from "axios";
import Membercard from "../../Components/Membercard";

const Singlepage = () => {
  const [singlepitch, setsinglepitch] = useState(null);
  const { id } = useParams();
const navigate = useNavigate()
  useEffect(() => {
    getpitch();
  }, []);

  const getpitch = async () => {
    const pitch = await axios.get(`http://localhost:8080/pitch/${id}`);
    setsinglepitch(pitch.data);
  };

  const backtoproject =async () => {
    navigate("/explore")
  }
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-50 to-purple-50 py-12 px-6">
      {singlepitch ? (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Left Section (Pitch Info) */}
          <div className="lg:col-span-2 space-y-10">
            {/* Pitch Card */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
                {singlepitch.compname}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {singlepitch.description}
              </p>
            </div>

            {/* Meet Team */}
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Meet The Team 👥
              </h2>
              <div className="flex flex-wrap gap-6">
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

          {/* Right Section (Funding Info) */}
          <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Funding Progress 💰
            </h2>
            <p className="text-lg text-gray-600">
              Raised:{" "}
              <span className="font-bold text-green-600">
                ${singlepitch.raisefund}
              </span>
            </p>
            <p className="text-lg text-gray-600 mt-2">
              Goal:{" "}
              <span className="font-bold text-indigo-600">
                ${singlepitch.totalfund}
              </span>
            </p>

            {/* Progress Bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-5">
              <div
                className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full"
                style={{
                  width: `${
                    (singlepitch.raisefund / singlepitch.totalfund) * 100
                  }%`,
                }}
              ></div>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {(
                (singlepitch.raisefund / singlepitch.totalfund) *
                100
              ).toFixed(1)}
              % funded
            </p>

            {/* CTA */}
            <button onClick={backtoproject} className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-xl shadow-md hover:bg-indigo-700 transition-all">
              Back this Project 🚀
            </button>
          </div>
        </div>
      ) : (
        <p className="text-center text-lg text-gray-500">Loading...</p>
      )}
    </div>
  );
};

export default Singlepage;
