import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full bg-custom-gradient shadow-sm">
      {/* Logo e botão do menu */}
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
        <nav className="hidden lg:flex space-x-4">
          <Link
            className="
              relative after:content-['']
              after:absolute after:w-full
              after:h-[2px] after:bg-pink-400
              after:scale-x-0 after:origin-left
              after:transition-transform after:duration-500
              after:bottom-[-5px] hover:after:scale-x-100
              transition duration-300
            "
            to="/"
          >
            Home
          </Link>
          <Link
            className="
              relative after:content-['']
              after:absolute after:w-full
              after:h-[2px] after:bg-pink-400
              after:scale-x-0 after:origin-left
              after:transition-transform after:duration-500
              after:bottom-[-5px] hover:after:scale-x-100
              transition duration-300
            "
            to="/about"
          >
            Sobre / Especialidade
          </Link>
          <Link
            className="bg-[#ffe2de9a] rounded-full px-6 py-1 hover:bg-primary"
            to="/contato"
          >
            Contato
          </Link>
        </nav>
      </div>

      {/* Menu Mobile */}
      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        } lg:hidden bg-pink-50`}
      >
        <nav className="flex flex-col items-center py-4 px-4">
          <Link
            className="
              block w-full text-center py-2
              relative after:content-['']
              after:absolute after:w-full
              after:h-[2px] after:bg-pink-400
              after:scale-x-0 after:origin-left
              after:transition-transform after:duration-500
              after:bottom-0 hover:after:scale-x-100
              transition duration-300
            "
            to="/"
          >
            Home
          </Link>
          <Link
            className="
              block w-full text-center py-2
              relative after:content-['']
              after:absolute after:w-full
              after:h-[2px] after:bg-pink-400
              after:scale-x-0 after:origin-left
              after:transition-transform after:duration-500
              after:bottom-0 hover:after:scale-x-100
              transition duration-300
            "
            to="/about"
          >
            Sobre / Especialidade
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
