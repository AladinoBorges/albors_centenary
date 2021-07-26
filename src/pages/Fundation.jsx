import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import GenericBody from "../components/GenericBody";

function Fundation() {
  return (
    <div>
      <NavBar selected={ 'A Fundação' } />
      <GenericBody />
      <Footer />
    </div>
  );
}

export default Fundation;
