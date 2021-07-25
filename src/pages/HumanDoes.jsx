import Hero from "../components/Header";
import NavBar from "../components/NavBar";
import Tabs from "../components/TabsContent";
import Footer from '../components/Footer';

function HumanDoes() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Pacientes Não Identificados' } />
      <Footer />
    </div>
  );
}

export default HumanDoes;
