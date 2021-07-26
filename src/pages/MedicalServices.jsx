import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import GenericBody from "../components/GenericBody";

function MedicalServices() {
  return (
    <div>
      <NavBar selected={ 'Serviços Médicos' } />
      <GenericBody />
      <Footer />
    </div>
  );
}

export default MedicalServices;
