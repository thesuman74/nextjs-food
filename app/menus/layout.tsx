import Image from "next/image";
import React, { useState } from "react";

const NavBar = () => {
  // State to manage login status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Handler to toggle login/logout
  const handleAuthClick = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <header className="z-50 py-4 dark:bg-gray-900">
      <div className="mx-auto w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <nav className="w-full flex justify-between gap-6 relative">
          {/* Logo */}
          <div className="min-w-max inline-flex relative">
            <a href="/" className="relative flex items-center gap-3">
              <div className="w-12 h-12 overflow-hidden rounded-full">
                <Image
                  src="/logo2.webp"
                  className="w-full h-full object-cover"
                  width={100}
                  height={100}
                  alt="Movie Recommender"
                />
              </div>
              <div className="inline-flex text-lg font-semibold text-gray-50">
                Movie Recommender
              </div>
            </a>
          </div>

          {/* Navigation Links */}
          <ul className="border-t border-gray-100 lg:border-t-0 px-6 lg:px-0 pt-6 lg:pt-0 flex flex-col lg:flex-row gap-y-4 gap-x-3 text-lg text-gray-50 w-full lg:justify-center lg:items-center">
            <li>
              <a
                href="/"
                className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
              >
                Movies
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
              >
                TV Shows
              </a>
            </li>
            <li>
              <a
                href="#"
                className="duration-300 font-medium ease-linear hover:text-blue-600 py-3"
              >
                Suggest
              </a>
            </li>
          </ul>

          {/* Auth Button */}
          <div className="lg:min-w-max flex items-center sm:w-max w-full pb-6 lg:pb-0 border-b border-gray-100 lg:border-0 px-6 lg:px-0">
            <button
              onClick={handleAuthClick}
              className="flex justify-center items-center w-full sm:w-max px-6 h-12 rounded-full text-white bg-blue-600 hover:bg-blue-700 border-transparent"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
