import { useState } from "react";
import specialties from "./partials/data";
import LogoFono from "../../assets/images/LogoFono.png";

const Specialties = () => {
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);

  return (
    <div>
      <div className="max-w-6xl mx-auto px-8 ">
        <div className="flex flex-col md:flex-row justify-between items-center p-8 bg-bgAnimals rounded-lg shadow-2xl mb-20">
          <div
            className={`md:w-1/2 md:mb-0 transition-transform duration-700 ease-in-out ${
              showProfessionalInfo ? "md:hidden" : "md:block"
            }`}
          >
            <img
              src={LogoFono}
              alt="Logo Fonoaudiologia"
              className="h-32 md:h-40 md:mx-auto mb-8"
            />
          </div>

          <div
            className={`${
              showProfessionalInfo ? "md:w-full text-center" : "md:w-1/2 md:text-left"
            }`}
          >
            <h2
              className={`text-2xl md:text-3xl font-semibold text-[#6f6657] mb-8 text-center ${
                showProfessionalInfo ? "md:text-center" : "md:text-left"
              }`}
            >
              Minhas especialidades
            </h2>
            <div>
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
                      <h3 className="text-xl md:text-2xl font-semibold text-[#6f6657] mb-4">
                        {item.title}
                      </h3>
                      <p className="text-lg text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className={`${showProfessionalInfo ? "md:text-center" : "text-center md:text-left"}`}>
                <button
                  onClick={() => setShowProfessionalInfo(!showProfessionalInfo)}
                  className="text-[#6f6657] font-semibold mt-4 hover:scale-105 translate-x-1 duration-300"
                >
                  {showProfessionalInfo ? "Mostrar menos" : "Mostrar mais"}
                  <span className="ml-2">{showProfessionalInfo ? "↓" : "↑"}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
