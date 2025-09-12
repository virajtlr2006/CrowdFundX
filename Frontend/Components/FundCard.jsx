import React from "react";
import { useNavigate } from "react-router";

const Fundcard = ({ id,image, name, description, author, category }) => {
    const navigate = useNavigate()
    const explore = async () => {
        navigate(`../explore/${id}`)
    }
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all hover:-translate-y-2 duration-300 overflow-hidden max-w-sm cursor-pointer group border border-gray-100" onClick={explore}>
      {/* Image Section */}
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

        {/* Category Badge */}
        {category && (
          <span className="absolute top-3 left-3 bg-indigo-600/90 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md">
            {category}
          </span>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Title */}
        <h2 className="text-xl font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-1">
          {name}
        </h2>

        {/* Sub Intro */}
        <p className="text-sm text-gray-500 mt-1 italic">
          A campaign worth supporting 🚀
        </p>

        {/* Description */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-1 tracking-wide">
            About this campaign
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Divider */}
        <div className="my-5 border-t border-gray-200"></div>

        {/* Author */}
        {author && (
          <div className="flex items-center">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 text-white flex items-center justify-center font-bold text-sm shadow-lg">
              {author.charAt(0).toUpperCase()}
            </div>
            <p className="ml-3 text-sm text-gray-700">
              By <span className="font-semibold text-gray-900">{author}</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Fundcard;
