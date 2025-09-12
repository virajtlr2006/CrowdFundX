import React, { useEffect, useState } from "react";
import axios from "axios";
import Fundcard from "../../Components/FundCard";
import { PiggyBank, Sparkles, TrendingUp, Star, FolderOpen } from "lucide-react";

const Myfund = () => {
  const [allmypitch, setallmypitch] = useState([]);
  const [stat, setstat] = useState(null)

  const alluserpitch = async () => {
    const email = localStorage.getItem("email");
    const pitch = await axios.post("http://localhost:8080/pitch/myfund", {
      email,
    });
    console.log(pitch);
    setstat(pitch.data)
    setallmypitch(pitch.data.pitches);
  };

  useEffect(() => {
    alluserpitch();
  }, []);

  // --- Stats calculation ---
  const totalInvested = allmypitch.reduce((acc, p) => acc + (p.amount || 0), 0);
  const totalCampaigns = allmypitch.length;
  const highestInvestment = allmypitch.length
    ? Math.max(...allmypitch.map((p) => p.amount || 0))
    : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-10">
      {/* Header */}
      <div className="text-center mb-12 animate-fadeIn">
        <h1 className="text-4xl font-extrabold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex justify-center items-center gap-2">
          <PiggyBank className="w-8 h-8 text-purple-600" />
          My Funded Campaigns
          <Sparkles className="w-6 h-6 text-yellow-500 animate-pulse" />
        </h1>
        <p className="text-gray-600 mt-3">
          Here are the campaigns you’ve invested in 💙
        </p>
      </div>

      {/* Stat Cards */}
     { stat && <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12 animate-fadeIn">
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <TrendingUp className="w-10 h-10 text-green-500 mb-3" />
          <p className="text-sm text-gray-500">Total Invested</p>
          <h2 className="text-2xl font-bold text-gray-900">${stat.totalInvested}</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <FolderOpen className="w-10 h-10 text-blue-500 mb-3" />
          <p className="text-sm text-gray-500">Campaigns Funded</p>
          <h2 className="text-2xl font-bold text-gray-900">{stat.campaignsFunded}</h2>
        </div>
        <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-lg transition">
          <Star className="w-10 h-10 text-yellow-500 mb-3" />
          <p className="text-sm text-gray-500">Highest Investment</p>
          <h2 className="text-2xl font-bold text-gray-900">${stat.highestInvestment}</h2>
        </div>
      </div>}

      {/* Fund Cards Grid */}
      {allmypitch && allmypitch.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
          {allmypitch.map((pitch) => (
            <div
              key={pitch._id}
              className="transform transition duration-300 hover:scale-[1.03] hover:shadow-xl"
            >
              <Fundcard
                id={pitch._id}
                image={pitch.image}
                name={pitch.compname}
                description={pitch.description}
                author={pitch.email}
              />
            </div>
          ))}
        </div>
      ) : (
        // Empty State
        <div className="flex flex-col items-center justify-center mt-20 text-gray-500 animate-fadeIn">
          <PiggyBank className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-lg font-medium">No funded campaigns yet</p>
          <p className="text-sm text-gray-400 mt-1">
            Start exploring and support amazing projects!
          </p>
        </div>
      )}
    </div>
  );
};

export default Myfund;
