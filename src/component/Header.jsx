// src/components/Header.jsx
import React from "react";
import myImage from "../assets/baner.jpg";

const Header = () => {
  return (
    <header
      className="bg-cover bg-no-repeat bg-center shadow-lg bg-black"
      style={{
        backgroundImage: `url(${myImage})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-3xl font-bold text-center text-zinc-950 font-mono">
              Mercy Menu
            </h1>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <button className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-300 ease-in-out shadow-md transform hover:scale-105">
              Order Now
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Menu Icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
