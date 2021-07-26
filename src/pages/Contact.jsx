import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import GenericBody from "../components/GenericBody";

function Contact() {
  return (
    <div>
      <NavBar selected={ 'Fale Conosco' } />
      <GenericBody />
      <Footer />
    </div>
  );
}

export default Contact;
