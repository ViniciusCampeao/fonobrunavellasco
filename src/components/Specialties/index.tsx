import { useState } from "react";
import specialties from "./partials/data";
import especialidade from "../../assets/images/Especialidades.png";

const Specialties = () => {
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);

  return (
    <div className="max-w-6xl mx-auto px-8 md:px-12">
      <div className="p-8 bg-bgAnimals rounded-lg shadow-2xl mb-20 flex md:justify-between md:flex-row flex-col items-center">
        {!showProfessionalInfo && (
          <div className="w-1/2 flex flex-col items-center pb-10">
            <img src={especialidade} alt="especialidades" className="md:w-[30%]" />
          </div>
        )}
        
        <div
          className={`text-center md:text-left ${
            showProfessionalInfo ? "md:w-full text-center" : "md:w-1/2 mx-auto text-center"
          }`}
        >
          <div>
            <h2 className={`text-2xl md:text-3xl font-semibold text-[#6f6657] mb-8 ${
                showProfessionalInfo ? "text-center md:pb-10" : "md:text-left text-center"
              }`}
            >
              Minhas especialidades
            </h2>
          </div>

          <div
            className={`overflow-hidden transition-all duration-1000 ease-in-out ${
              showProfessionalInfo ? "text-left max-h-[10000px] md:max-h-[1000px]" : "max-h-0"
            }`}
          >
            {specialties.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-between items-center mb-6"
              >
                <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="rounded-lg h-48 object-cover hover:shadow-xl transition-shadow duration-300 mr-6"
                  />
                </div>
                <div className="md:w-2/3">
                  <div className="mb-4 flex flex-col md:flex-row md:items-center">
                    <h3 className="text-xl md:text-2xl font-semibold text-[#6f6657] mb-2 md:mb-0 md:mr-2">
                      {item.title}
                    </h3>
                    <img src={item.flag} alt={item.title} className="w-6" />
                  </div>
                  <p className="text-lg text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="md:text-left text-center">
            <button
              onClick={() => setShowProfessionalInfo(!showProfessionalInfo)}
              className="text-[#6f6657] font-semibold mt-4 hover:scale-105 translate-x-1 duration-300"
            >
              {showProfessionalInfo ? "Mostrar menos" : "Mostrar mais"}
              <span className="ml-2">{showProfessionalInfo ? "↑" : "↓"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
