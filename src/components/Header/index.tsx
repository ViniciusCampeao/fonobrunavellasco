import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import { auth } from "../../../firebaseConfig"; // Importe o auth do Firebase

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<{ name: string | null } | null>(null); // Estado para armazenar o nome do usuário
  const navigate = useNavigate(); // Hook para navegação programática

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser({ name: currentUser.displayName || "Usuário" });
      } else {
        setUser(null); // Se não estiver autenticado, remove o usuário
      }
    });
  
    return () => unsubscribe(); // Limpa o ouvinte quando o componente for desmontado
  }, []);
  

  // Função para extrair as iniciais do nome
  const getInitials = (name: string) => {
    const nameParts = name.split(" ");
    return nameParts.map((part) => part[0].toUpperCase()).join("");
  };

  // Navegar para o dashboard ao clicar nas iniciais
  const handleInitialClick = () => {
    if (user) {
      navigate("/dashboard"); // Redireciona para o dashboard
    }
  };

  return (
    <header className="w-full bg-[#6f6657]">
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
          <Link className="relative group transition duration-300" to="/">
            Home
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>
          <Link
            className="relative group transition duration-300"
            to="/contact"
          >
            Contato
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>
          <Link className="relative group transition duration-300" to="/game">
            Game
            <span className="absolute bottom-0 left-0 w-full h-[2px] bg-pink-400 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
          </Link>

          {/* Verificar se o usuário está autenticado */}
          {user ? (
            <div
              onClick={handleInitialClick}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-amber-950 text-white cursor-pointer"
            >
              {user.name ? getInitials(user.name) : "Anônimo"}
            </div>
          ) : (
            <Link
              className="bg-[#ffe2de9a] rounded-full px-6 py-1 hover:bg-primary"
              to="/login"
            >
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
          <Link
            className="block w-full text-center py-2 relative group transition duration-300"
            to="/"
          >
            Home
          </Link>
          <Link
            className="block w-full text-center py-2 relative group transition duration-300"
            to="/contact"
          >
            Contato
          </Link>
          {user ? (
            <div
              onClick={handleInitialClick}
              className="block w-full text-center py-2 bg-amber-950 text-white rounded-full cursor-pointer"
            >
              {user.name ? getInitials(user.name) : ""}
            </div>
          ) : (
            <Link
              className="block text-center bg-[#ffe2de9a] rounded-full px-6 py-2 hover:bg-primary"
              to="/login"
            >
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
