import Hero from "../components/Header";
import NavBar from "../components/NavBar";
import Tabs from "../components/TabsContent";
import Footer from '../components/Footer';

function Scales() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Escalas' } />
      <Footer />
    </div>
  );
}

export default Scales;
