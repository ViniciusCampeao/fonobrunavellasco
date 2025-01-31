import { useState } from "react";
import Bruna4 from "../../assets/images/Bruna4.png";

const AboutBruna = () => {
  const [showPersonalInfo, setShowPersonalInfo] = useState(false);

  return (
    <div className="w-full py-20">
      <div className="max-w-6xl mx-auto px-8 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-bgAnimals rounded-lg shadow-2xl">
          <div
            className={`md:w-1/2 mb-12 md:mb-0 transition-transform duration-700 ease-in-out ${
              showPersonalInfo ? "md:transform md:translate-x-12" : "transform translate-x-0"
            }`}
          >
            <img
              src={Bruna4}
              alt="Bruna Vellasco"
              className="h-40 md:h-48 object-cover mx-auto rounded-full"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl md:text-4xl font-semibold text-[#6f6657] mb-4">
              Quem sou?
            </h1>
            <div
              className={`transition-all duration-700 ease-in-out ${
                showPersonalInfo ? "opacity-100 max-h-screen" : "opacity-0 max-h-0"
              } overflow-hidden`}
            >
              <p className="text-lg mb-6">
                Com mais de 8 anos de experiência clínica desde 2016, acredito no cuidado personalizado e no desenvolvimento de cada criança, utilizando métodos que auxiliam na comunicação e no bem-estar. 
              </p>
              <p className="text-lg mb-6">
                O que me motivou a seguir a carreira na fonoaudiologia foi minha experiência pessoal que tive com a terapia fonoaudiológica na infância, o que me fez perceber o impacto que essa área pode ter na vida de uma pessoa.
              </p>
              <p className="text-lg mb-6">
                Graduada pela Universidade de São Paulo - USP desde 2015, venho me atualizando para oferecer o melhor atendimento personalizado para cada criança e família.
              </p>
            </div>

            <button
              onClick={() => setShowPersonalInfo(!showPersonalInfo)}
              className="text-[#6f6657] font-semibold mt-4  hover:scale-105 translate-x-1 duration-300"
            >
              {showPersonalInfo ? "Mostrar menos" : "Mostrar mais"}
              <span className="ml-2">
                {showPersonalInfo ? "↑" : "↓"}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBruna;
