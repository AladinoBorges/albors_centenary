import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Fundation from './pages/Fundation';
import MedicalServices from './pages/MedicalServices';
import Specialities from './pages/Specialities';
import Jobs from './pages/Jobs';
import NewsEvents from './pages/NewsEvents';
import Editals from './pages/Editals';
import Scales from './pages/Scales';
import HumanDoes from './pages/HumanDoes';
import Institucional from './pages/Institutional';

import 'bulma/css/bulma.min.css';
import './App.css';
import './styles/Header.css';
import './styles/NewsBody.css';
import './styles/Footer.css';
import './styles/newsImages.css';
import './styles/Loading.css';
import './styles/HomeBody.css';
import './styles/Card.css';
import './styles/Newsletter.css';

function App() {
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/fale-conosco" component={ Contact } />
        <Route exact path="/a-fundação" component={ Fundation } />
        <Route exact path="/serviços-médicos" component={ MedicalServices } />
        <Route exact path="/especialidades" component={ Specialities } />
        <Route exact path="/processo-seletivo" component={ Jobs } />
        <Route exact path="/institucional" component={ Institucional } />
        <Route exact path="/eventos-e-notícias" component={ NewsEvents } />
        <Route exact path="/editais" component={ Editals } />
        <Route exact path="/escalas" component={ Scales } />
        <Route exact path="/pacientes-sem-identificação" component={ HumanDoes } />
      </Switch>
    </div>
  );
}

export default App;
