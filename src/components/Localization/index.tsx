const Localization = () => {  
  return (
    <div className="flex flex-col items-center px-6 pb-6 md:p-12 md:mb-20 mb-10">    
      <div>
        <h1 className="text-black text-xl md:text-2xl md:mt-4 mb-2 text-center">
          Encontre-nos facilmente!
        </h1>
        <p className="text-md md:text-xl mb-4 text-center">
          Clique no mapa para abrir a localização.
        </p>
      </div>
      
      <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-black shadow-2xl bg-white">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d918.2854430982343!2d-49.87432383045883!3d-22.981813598700125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c01838eb55bce7%3A0xd67483acaab27b0!2sAv.%20Hor%C3%A1cio%20Soares%2C%20448%20-%20Jardim%20Paulista%2C%20Ourinhos%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1732035731175!5m2!1spt-BR!2sbr"
          className="w-full h-64 md:h-96"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map Location"
        ></iframe>
      </div>
    </div>
  );
};

export default Localization;
