import { useState } from "react";
import logo from "../assets/logo-text.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 sm:px-6">

        <div className="navbar-start">

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-ghost btn-sm md:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          <div className="hidden md:flex items-center gap-2">
            <img
              src={logo}
              alt="Dev Stack"
              className="w-32 lg:w-36"
            />
          </div>

        </div>

        <div className="navbar-center md:hidden absolute left-1/2 -translate-x-1/2">
          <img
            src={logo}
            alt="Dev Stack"
            className="w-28 sm:w-32"
          />
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal gap-1 lg:gap-2 text-sm">
            <li>
              <a className="text-pink-600">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end gap-1 sm:gap-3">

          <button className="btn btn-ghost btn-xs sm:btn-sm">
            Sign In
          </button>

          <button className="btn btn-xs sm:btn-sm rounded-full text-white border-none bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600">
            Sign Up
          </button>

        </div>

      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <ul className="menu px-5 py-3 gap-1 text-sm">
            <li>
              <a className="text-pink-600">Home</a>
            </li>
            <li>
              <a>Technologies</a>
            </li>
            <li>
              <a>Projects</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact</a>
            </li>
          </ul>
        </div>
      )}

    </div>
  );
};

export default Navbar;