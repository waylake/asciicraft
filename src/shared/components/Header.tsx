import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-indigo-600">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none">
          <div className="flex items-center">
            <Link to="/" className="text-white text-2xl font-bold">
              ASCII Art Generator
            </Link>
            <div className="hidden ml-10 space-x-8 lg:block">
              <Link
                to="/"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="text-base font-medium text-white hover:text-indigo-50"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
