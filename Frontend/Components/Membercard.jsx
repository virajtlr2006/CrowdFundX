import React from "react";

const Membercard = ({ image, Mname, role }) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 w-56 p-6 flex flex-col items-center text-center cursor-pointer group">
      {/* Profile Image */}
      <div className="h-24 w-24 rounded-full overflow-hidden border-4 border-indigo-500/80 shadow-md group-hover:scale-105 transition-transform duration-300">
        <img src={image} alt={Mname} className="h-full w-full object-cover" />
      </div>

      {/* Member Name */}
      <h2 className="mt-4 text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300">
        {Mname}
      </h2>

      {/* Role */}
      <p className="text-sm text-gray-500 mt-1 italic">{role}</p>
    </div>
  );
};

export default Membercard;
