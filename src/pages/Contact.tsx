import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactComponent from "../components/ContactComponent";

const Contact = () => {
  return (
    <div className="bg-custom-gradient font-quicksand h-screen">
      <Header />
      <ContactComponent />
      <Footer />
    </div>
  );
};

export default Contact;
