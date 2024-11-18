import Bruna from "../../assets/images/Bruna.png";

const Hero = () => { 
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <div className="md:w-1/2 w-full px-12  md:py-52 text-center">
        <h1 className=" font-quicksand text-xl font md:text-3xl mb-10 text-center font-semibold">
        Cada som é uma história esperando para ser contada!
        </h1>
        <p className="text-sm md:text-lg mb-10 font-quicksand text-center">
        Com cuidado e amor nos atendimento, trabalho para que cada criança consiga se desenvolver com mais clareza e confiança na linguagem e fala!
        </p>
        <a
          className="inline-block rounded-full px-6 py-3 bg-blue-300 text-white hover:bg-blue-400 transition-all duration-300"
          href="/about"
        >
          Saiba mais
        </a>
      </div>
      <div className="md:w-1/2 items-end flex">
        <img src={Bruna} alt="Bruna" />
      </div>
    </div>
  );
};

export default Hero;
