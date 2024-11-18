import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Importando AnimatePresence
import DTCC from "../../assets/images/DTCC.png";
import ABA from "../../assets/images/ABA.png";
import atendendo2 from "../../assets/images/atendendo2.png";
import atendendo3 from "../../assets/images/atendendo3.png";

const Specialties = () => {
  const [showProfessionalInfo, setShowProfessionalInfo] = useState(false);

  const specialties = [
    {
      img: ABA,
      title: "Intervenção ABA para Autismo e Deficiência Intelectual",
      description:
        "Sou pós-graduada em Intervenção ABA (Análise Comportamental Aplicada), uma abordagem essencial no tratamento de crianças com autismo e deficiência intelectual. Essa técnica é focada em promover o desenvolvimento de comportamentos funcionais e sociais através de reforços positivos e estratégias individualizadas.",
    },
    {
      img: atendendo2,
      title: "Apraxia de Fala na Infância",
      description:
        "Tenho especialização em Apraxia de Fala na Infância, um distúrbio motor da fala que afeta a capacidade de produzir sons e palavras corretamente. Meu trabalho envolve terapia fonoaudiológica focada no desenvolvimento da comunicação oral de crianças com essa condição.",
    },
    {
      img: DTCC,
      title: "Prompt e DTCC",
      description:
        "O método Prompt é uma técnica de terapia focada em ajudar as crianças a produzir sons, palavras e frases de maneira mais eficaz. A DTCC (Dinâmica Terapêutica Comportamental Cognitiva) é uma abordagem que integra intervenções comportamentais e cognitivas para promover o desenvolvimento da comunicação.",
    },
    {
      img: atendendo3,
      title: "PODD e PECS",
      description:
        "O sistema PODD (Communication Book for People with Complex Communication Needs) e PECS (Picture Exchange Communication System) são métodos alternativos e aumentativos de comunicação, ideais para crianças com dificuldades severas de fala e comunicação. Utilizo essas abordagens para ajudar a criança a se expressar de maneira eficaz e funcional.",
    },
  ];

  return (
    <div>
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="bg-rose-50 py-12 px-8 rounded-lg shadow-lg mb-20">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-800 mb-10">
            Minhas especialidades
          </h2>

          <div className="space-y-8 md:space-y-12">
            <AnimatePresence>
              {showProfessionalInfo && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }} // Animação ao fechar
                  transition={{ duration: 0.6 }}
                >
                  {specialties.map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex flex-col md:flex-row justify-between items-center mb-6"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="md:w-1/3 mb-6 md:mb-0 flex justify-center">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="rounded-lg h-48 object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
                        />
                      </div>
                      <div className="md:w-2/3">
                        <h3 className="text-xl md:text-2xl font-semibold text-blue-800 mb-4">
                          {item.title}
                        </h3>
                        <p className="text-lg text-gray-700">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <div className="flex justify-center">
              <button
                onClick={() => setShowProfessionalInfo(!showProfessionalInfo)}
                className="text-blue-800 px-6 py-2 rounded-lg font-semibold hover:scale-105 translate-x-1 duration-300 flex items-center"
              >
                {showProfessionalInfo ? "Mostrar menos" : "Mostrar mais"}
                <span className="ml-2">
                  {showProfessionalInfo ? "↓" : "↑"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialties;
