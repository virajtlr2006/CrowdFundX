import { Search, Filter, Star, Users, Globe } from "lucide-react";
import React, { useEffect, useState } from "react";
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
