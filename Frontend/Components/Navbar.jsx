import { Layers, UserCircle } from "lucide-react";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate

  useEffect(() => {
    if (localStorage.getItem("email")) {
      setIsLogin(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("email");
    setIsLogin(false);
    navigate("/signin");
  };

  return (
    <nav className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-md px-6 py-4 flex justify-between items-center relative">
      {/* Logo */}
      <a href="/" className="flex gap-3 items-center text-blue-700 font-bold text-xl">
        <Layers className="h-7 w-7" />
        CrowdFundX
      </a>

      {/* Links */}
      <div className="hidden md:flex gap-6 items-center">
        {[ "Explore", "New", "About"].map((link) => (
          <a
            key={link}
            href={`/${link.toLowerCase()}`}
            className="text-gray-600 hover:text-indigo-700 font-medium transition-colors duration-300"
          >
            {link}
          </a>
        ))}
      </div>

      {/* Right Section */}
      {isLogin ? (
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 hover:bg-indigo-700 transition-colors shadow-md"
          >
            <UserCircle className="text-white h-6 w-6" />
          </button>

          {/* Dropdown */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden z-20">
              <button
                onClick={() => navigate("/profile")}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
              >
                Profile
              </button>
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex gap-3 items-center">
          <a
            href="/signin"
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-indigo-50 hover:text-indigo-700 transition-all font-medium"
          >
            Log In
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
