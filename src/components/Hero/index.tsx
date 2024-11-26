import { Link } from "react-router-dom";
import Bruna from "../../assets/images/Bruna.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center text-[#6f6657]">
      <div className="md:w-1/2 w-full px-12 md:py-52 text-center">
        <h1 className="font-quicksand text-2xl md:text-3xl font-semibold mt-10 mb-4">
          Cada som é uma história esperando para ser contada!
        </h1>
        <p className="text-sm md:text-lg mb-10 font-qDuicksand">
          Com cuidado e amor nos atendimentos, trabalho para que cada criança
          consiga se desenvolver com mais clareza e confiança na linguagem e fala!
        </p>
        <Link
          className="inline-block rounded-full px-6 py-3 bg-[#6f6657] text-white hover:bg-[#38332b] transition-all duration-300"
          to="/contact"
        >
          Contato
        </Link>
      </div>
      <div className="md:w-1/2 flex flex-col items-center w-[0%]">
        <img src={Bruna} alt="Bruna" />
      </div>
    </div>
  );
};

export default Hero;
