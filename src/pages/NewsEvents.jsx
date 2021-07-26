import NewsBody from "../components/NewsBody";
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
      <NewsBody />
      <Footer />
    </div>
  );
}

export default NewsEditals;
