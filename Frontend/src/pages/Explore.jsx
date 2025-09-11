import {
  Computer,
  Music,
  Palette,
  Film,
  Gamepad,
  PenTool,
  Search,
  Filter
} from "lucide-react";
import React, { useEffect, useState } from "react";
import Singlecategory from "../../Components/Singlecategory";
import Singlecard from "../../Components/Singlecard";
import axios from "axios";

const Explore = () => {
  const [allpitch, setallpitch] = useState([]);

  useEffect(() => {
    campaign();
  }, []);

  const campaign = async () => {
    const API = await axios.get("http://localhost:8080/pitch/all");
    setallpitch(API.data.allPitches);
    console.log(API);
  };

  const categories = [
    { name: "Technology", icon: <Computer className="w-4 h-4" /> },
    { name: "Art", icon: <Palette className="w-4 h-4" /> },
    { name: "Film", icon: <Film className="w-4 h-4" /> },
    { name: "Music", icon: <Music className="w-4 h-4" /> },
    { name: "Game", icon: <Gamepad className="w-4 h-4" /> },
    { name: "Design", icon: <PenTool className="w-4 h-4" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-gray-50">
      {/* Hero Section */}
      <div className="px-8 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-gray-900">
          Explore Creative Campaigns
        </h1>
        <p className="text-lg text-gray-600 mt-3 max-w-2xl mx-auto">
          Discover projects that inspire. Back the ideas you believe in and help
          creators bring their dreams to life.
        </p>

        {/* Search & Filter */}
        <div className="mt-8 flex justify-center gap-4">
          <div className="flex items-center bg-white shadow-lg rounded-full px-5 py-3 w-full max-w-lg">
            <Search className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search campaigns..."
              className="flex-1 outline-none text-gray-700"
            />
          </div>
          <button className="flex items-center gap-2 px-5 py-3 rounded-full bg-indigo-600 text-white font-medium shadow-lg hover:bg-indigo-700 transition">
            <Filter className="w-5 h-5" />
            Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="px-8 mb-12">
        <h2 className="text-xl font-bold text-gray-800 mb-4">Trending Categories</h2>
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white shadow-md border hover:bg-indigo-50 hover:text-indigo-600 transition whitespace-nowrap"
            >
              {cat.icon}
              <span className="font-medium">{cat.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Campaign Grid */}
      <div className="px-8 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {allpitch && allpitch.length > 0 ? (
            allpitch.map((pitch, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <Singlecard
                id={pitch._id}
                  image={pitch.image}
                  name={pitch.name}
                  description={pitch.description}
                  author={pitch.author}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-16 text-lg">
              🚀 No campaigns available yet. Be the first to launch one!
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
