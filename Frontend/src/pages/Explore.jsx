import { Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Singlecard from "../../Components/Singlecard";
import axios from "axios";

const Explore = () => {
  const [allpitch, setallpitch] = useState([]);
  const [search, setsearch] = useState(""); // search state

  useEffect(() => {
    campaign();
  }, []);

  const campaign = async () => {
    const API = await axios.get("http://localhost:8080/pitch/all");
    setallpitch(API.data.allPitches);
  };

  // filter based on search
  const filteredPitch = allpitch.filter(
    (pitch) =>
      pitch.compname?.toLowerCase().includes(search.toLowerCase()) ||
      pitch.description?.toLowerCase().includes(search.toLowerCase())
  );

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

        {/* Search Bar */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center bg-white shadow-lg rounded-full px-5 py-3 w-full max-w-lg">
            <Search className="text-gray-400 mr-3" />
            <input
              type="text"
              placeholder="Search campaigns..."
              value={search}
              onChange={(e) => setsearch(e.target.value)}
              className="flex-1 outline-none text-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Campaign Grid */}
      <div className="px-8 pb-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredPitch && filteredPitch.length > 0 ? (
            filteredPitch.map((pitch, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition transform hover:-translate-y-2"
              >
                <Singlecard
                  id={pitch._id}
                  image={pitch.image}
                  name={pitch.compname} 
                  description={pitch.description}
                  author={pitch.email}
                />
              </div>
            ))
          ) : (
            <p className="text-gray-500 col-span-full text-center py-16 text-lg">
              🔍 No campaigns match your search.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Explore;
