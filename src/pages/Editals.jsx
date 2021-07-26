import Hero from "../components/Header";
import NavBar from "../components/NavBar";
import Tabs from "../components/TabsContent";
import Footer from '../components/Footer';

function Editals() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Editais' } />
      <Footer />
    </div>
  );
}

export default Editals;
