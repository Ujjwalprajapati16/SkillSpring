import React from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const location = useLocation();
  const isCourseListPage = location.pathname.includes("/course-list");

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-300 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <img
          src={assets.logo}
          alt="Logo"
          className="w-24 sm:w-28 lg:w-32 cursor-pointer"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-gray-700 font-medium">
        <button className="hover:text-blue-600 transition">Become Educator</button>
        <Link to="/my-enrollment" className="hover:text-blue-600 transition">
          My Enrollments
        </Link>
        <button className="bg-blue-600 hover:bg-blue-700 transition text-white py-2 px-5 rounded-full">
          Create Account
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-3 text-sm text-gray-700">
        <button className="hover:text-blue-600 transition">Educator</button>
        <Link to="/my-enrollment" className="hover:text-blue-600 transition">
          Enrollments
        </Link>
        <button>
          <img src={assets.user_icon} alt="User" className="w-6 cursor-pointer" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
