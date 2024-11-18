import AboutBruna from "../components/AboutBruna";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Specialties from "../components/Specialties";

const Home: React.FC = () => {

  return (
    <div className="w-full bg-custom-gradient flex flex-col">
      <Header />
      <div className="md:mx-32">
        <Hero />
      </div>
      <AboutBruna />
      <Specialties />
      <Footer />
    </div>
  );
}

export default Home;