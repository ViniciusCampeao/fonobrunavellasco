import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-custom-gradient shadow-sm">
      <div className="h-16 flex justify-between items-center px-4 sm:px-24">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <button
          onClick={toggleMenu}
          className="lg:hidden flex items-center p-2"
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link
            className="
              relative group
              transition duration-300
            "
            to="/"
          >
            Home
            <span
              className="
                absolute bottom-0 left-0 w-full h-[2px] bg-pink-400
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-500
              "
            ></span>
          </Link>
          <Link
            className="bg-[#ffe2de9a] rounded-full px-6 py-1 hover:bg-primary"
            to="/contact"
          >
            Contato
          </Link>
        </nav>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        } lg:hidden bg-pink-50`}
      >
        <nav className="flex flex-col items-center py-4 px-4">
          <Link
            className="
              block w-full text-center py-2
              relative group
              transition duration-300
            "
            to="/"
          >
            Home
            <span
              className="
                absolute bottom-0 left-0 w-full h-[2px] bg-pink-400
                scale-x-0 group-hover:scale-x-100
                origin-left transition-transform duration-500
              "
            ></span>
          </Link>
          <Link
            className="block w-full text-center bg-[#ffe2de9a] rounded-full px-6 py-2 hover:bg-primary"
            to="/contato"
          >
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
