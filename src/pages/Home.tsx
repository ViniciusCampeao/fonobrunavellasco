import AboutBruna from "../components/AboutBruna";
import ImageCarousel from "../components/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Localization from "../components/Localization";
import Specialties from "../components/Specialties";

const Home: React.FC = () => {

  return (
    <div className="bg-custom-gradient font-quicksand">
      <Header />
      <div className="md:mx-32">
        <Hero />
      </div>
      <AboutBruna />
      <Specialties />
      <ImageCarousel />
      <Localization />
      <Footer />
    </div>
  );
}

export default Home;