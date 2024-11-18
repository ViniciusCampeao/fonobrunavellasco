import AboutBruna from "../components/AboutBruna";
import Header from "../components/Header";
import Specialties from "../components/Specialties";

const About = () => {
    return (
      <div className="w-full bg-custom-gradient flex flex-col">
        <Header />
        <AboutBruna />
        <Specialties />
    </div>
    );
}

export default About;