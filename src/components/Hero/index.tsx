import { Link } from "react-router-dom";
import Bruna from "../../assets/images/Bruna.png";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <div className="md:w-1/2 w-full px-12 md:py-52 text-center">
        <h1 className="font-quicksand text-xl md:text-3xl font-semibold mt-10 mb-4">
          Cada som é uma história esperando para ser contada!
        </h1>
        <p className="text-sm md:text-lg mb-10 font-quicksand">
          Com cuidado e amor nos atendimentos, trabalho para que cada criança
          consiga se desenvolver com mais clareza e confiança na linguagem e fala!
        </p>
        <Link
          className="inline-block rounded-full px-6 py-3 bg-blue-300 text-white hover:bg-blue-400 transition-all duration-300"
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
