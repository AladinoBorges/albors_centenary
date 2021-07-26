import { useContext, useEffect } from 'react';

import AppContext from '../context/AppContext';

import Hero from '../components/Header';
import Tabs from '../components/TabsContent';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import HomeBody from '../components/HomeBody';
import NewsletterForm from '../components/NewsletterForm';

function Home() {
  const { globalState, setGlobalState } = useContext(AppContext);
  const { loading, stopLoader } = globalState;

  const SECONDS = 800;

  const handleLoading = () => {
    setTimeout(() => {
      if (stopLoader === false) {
        setGlobalState({ stopLoader: true, loading: false });
      }
    }, SECONDS);
  };

  // COMPONENT DID MOUNT?
  useEffect(() => {
    handleLoading();
  }, []);

  if (loading) return (<Loading show={ loading ? 'loading' : 'is-hidden' } />);

  return (
    <div>
      <NavBar />
      <Hero />
      <Tabs selectTab={ 'Home' } />
      <HomeBody />
      <NewsletterForm />
      <Footer />
    </div>
  );
}

export default Home;
