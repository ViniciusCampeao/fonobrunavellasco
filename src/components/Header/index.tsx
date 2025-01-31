import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../../firebaseConfig";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ email: string | null } | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({ email: currentUser.email });

        const adminStatus = localStorage.getItem("isAdmin");
        setIsAdmin(adminStatus === "true");
      } else {
        setUser(null);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const getEmailInitials = (email: string) => {
    if (!email) return "";
    return email.split("@")[0][0].toUpperCase();
  };

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      localStorage.removeItem("isAdmin");
      navigate("/login");
    } catch (error) {
      console.error("Erro ao fazer logout:", error);
    }
  };

  const handleGameClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (!user) {
      event.preventDefault();
      navigate("/login");
    }
  };

  return (
    <header className="w-full bg-[#6f6657]">
      <div className="h-16 flex justify-between items-center px-4 sm:px-24">
        <Link to="/">
          <img className="w-28" src={logo} alt="logo" />
        </Link>
        <button onClick={toggleMenu} className="lg:hidden flex items-center p-2">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
        <nav className="hidden lg:flex space-x-8 items-center">
          <Link className="relative group transition duration-300" to="/">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>
          <Link className="relative group transition duration-300" to="/contact">
            Contato
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>
          <Link className="relative group transition duration-300" to="/game" onClick={handleGameClick}>
            Game
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>
          {isAdmin && (
            <Link className="relative group transition duration-300" to="/dashboard">
              Dashboard
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
            </Link>
          )}

          {user ? (
            <div className="relative">
              <div
                onClick={toggleDropdown}
                className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-950 text-white cursor-pointer"
              >
                {user.email ? getEmailInitials(user.email) : "Anônimo"}
              </div>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-10">
                  <Link
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    to="/profile"
                  >
                    Ver Informações
                  </Link>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link className="bg-[#ffe2de9a] rounded-full px-6 py-1 hover:bg-primary" to="/login">
              Login
            </Link>
          )}
        </nav>
      </div>

      <div
        className={`transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        } lg:hidden bg-pink-50`}
      >
        <nav className="flex flex-col items-center py-4 px-4">
          <Link className="block w-full text-center py-2 relative group transition duration-300" to="/">
            Home
          </Link>
          <Link className="block w-full text-center py-2 relative group transition duration-300" to="/contact">
            Contato
          </Link>
          <Link className="block w-full text-center py-2 relative group transition duration-300" to="/game" onClick={handleGameClick}>
            Game
          </Link>
          {isAdmin && (
            <Link className="block w-full text-center py-2 relative group transition duration-300" to="/dashboard">
              Dashboard
            </Link>
          )}
          {user ? (
            <div
              onClick={toggleDropdown}
              className="block w-full text-center py-2 bg-amber-950 text-white rounded-full cursor-pointer"
            >
              {user.email ? getEmailInitials(user.email) : ""}
            </div>
          ) : (
            <Link className="block text-center bg-[#ffe2de9a] rounded-full px-6 py-2 hover:bg-primary" to="/login">
              Login
            </Link>
          )}
          {isDropdownOpen && (
            <div className="w-full bg-white rounded-md shadow-lg py-2 mt-2 z-10">
              <Link
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                to="/profile"
              >
                Ver Informações
              </Link>
              <button
                className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
