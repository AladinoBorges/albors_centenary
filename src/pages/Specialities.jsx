import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import GenericBody from "../components/GenericBody";

function Specialities() {
  return (
    <div>
      <NavBar selected={ 'Especialidades' } />
      <GenericBody />
      <Footer />
    </div>
  );
}

export default Specialities;
