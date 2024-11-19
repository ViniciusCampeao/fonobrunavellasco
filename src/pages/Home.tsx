import AboutBruna from "../components/AboutBruna";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Localization from "../components/Localization";
import Specialties from "../components/Specialties";

const Home: React.FC = () => {

  return (
    <div className="w-full bg-custom-gradient flex flex-col font-quicksand">
      <Header />
      <div className="md:mx-32">
        <Hero />
      </div>
      <AboutBruna />
      <Specialties />
      <Localization />
      <Footer />
    </div>
  );
}

export default Home;