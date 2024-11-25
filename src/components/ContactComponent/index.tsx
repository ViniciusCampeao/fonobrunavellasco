import Bruna2 from "../../assets/images/Bruna2.png";
import { FaWhatsapp, FaInstagram, FaPhone } from "react-icons/fa";

const ContactComponent = () => {
  return(

  <div>
  <div className="md:grid grid-cols-1 md:grid-cols-2 px-6 md:px-16 py-10 md:gap-8 h-screen bg-custom-gradient">
        <div className="flex items-center justify-center">
          <img
            className="w-2/3 md:w-1/2 rounded-full"
            src={Bruna2}
            alt="bruna"
          />
        </div>

        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-center my-8 md:mb-6">
            Nossos contatos principais:
          </h1>
          <a
            href="https://wa.me/5514998039836"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <div className="rounded-full p-4 bg-green-400 flex items-center justify-center transform hover:scale-105 duration-300 mb-4">
              <FaWhatsapp className="text-3xl text-white" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">
                WHATSAPP
              </p>
            </div>
          </a>
          <a
            href="https://www.instagram.com/fonobrunavellasco?igsh=bzYycXM2YmMxaW82&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full max-w-sm"
          >
            <div className="rounded-full p-4 bg-pink-500 flex items-center justify-center transform hover:scale-105 duration-300 mb-4">
              <FaInstagram className="text-3xl text-white" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">
                INSTAGRAM
              </p>
            </div>
          </a>


          <a
            href="tel:+01514998039836"
            className="w-full max-w-sm"
          >
            <div className="rounded-full p-4 bg-blue-500 flex items-center justify-center transform hover:scale-105 duration-300">
              <FaPhone className="text-3xl text-white" />
              <p className="text-md font-nunito font-extrabold text-white ml-2">
                TELEFONE
              </p>
            </div>
          </a>
        </div>
      </div>
  </div>
  )
}

export default ContactComponent;