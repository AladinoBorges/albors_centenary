import NavBar from "../components/NavBar";
import Footer from '../components/Footer';
import GenericBody from "../components/GenericBody";

function Jobs() {
  return (
    <div>
      <NavBar selected={ 'Processo Seletivo' } />
      <GenericBody />
      <Footer />
    </div>
  );
}

export default Jobs;
