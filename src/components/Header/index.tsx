import React, { useState } from "react";
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { FiMenu, FiX } from "react-icons/fi";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="w-full h-16 bg-custom-gradient flex justify-between items-center px-4 sm:px-24 shadow-sm">
      <div>
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="lg:relative flex items-center">
        <button 
          onClick={toggleMenu} 
          className="lg:hidden flex items-center p-2">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav className={`absolute lg:static top-16 right-0 flex flex-col py-10 items-center lg:space-x-4 bg-white lg:bg-transparent w-full lg:w-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Link 
            className="
              block lg:inline mx-4 h-full
              relative
              after:content-['']
              after:absolute
              after:w-full
              after:h-[2px]
              after:bg-pink-400
              after:left-0
              after:scale-x-0
              after:origin-left
              after:transition-transform
              after:duration-500
              after:bottom-[-5px]
              hover:after:scale-x-100
              transition
              duration-300
            " 
            to="/"
          >
            Home
          </Link>
          <Link 
            className="
              block lg:inline mx-4 h-full
              relative
              after:content-['']
              after:absolute
              after:w-full
              after:h-[2px]
              after:bg-pink-400
              after:left-0
              after:scale-x-0
              after:origin-left
              after:transition-transform
              after:duration-500
              after:bottom-[-5px]
              hover:after:scale-x-100
              transition  
              duration-300
            "   
            to="/about"
          >
            Sobre / Especialidade
          </Link>
          <Link
            className="
              block lg:inline
              bg-[#ffe2de9a]
              rounded-full
              px-6
              py-1
              hover:bg-primary
              ml-4
              mt-4 lg:mt-0
            "
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