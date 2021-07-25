import Body from "../components/Body";
import Footer from "../components/Footer";
import Hero from "../components/Header";
import NavBar from "../components/NavBar";
import Tabs from "../components/TabsContent";

function NewsEditals() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Eventos e Notícias' } />
      <Body />
      <Footer />
    </div>
  );
}

export default NewsEditals;
