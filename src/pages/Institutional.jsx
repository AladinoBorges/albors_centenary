import Hero from "../components/Header";
import NavBar from "../components/NavBar";
import Tabs from "../components/TabsContent";
import Footer from '../components/Footer';

function Institucional() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Institucional' } />
      <Footer />
    </div>
  );
}

export default Institucional;
