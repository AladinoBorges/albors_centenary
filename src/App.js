import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';

import Home from './pages/Home';
import About from './pages/About';
import NewsEditals from './pages/NewsEditals';

import 'bulma/css/bulma.min.css';
import './App.css';
import './styles/Header.css';
import './styles/Body.css';
import './styles/Footer.css';

function App() {
  return (
    <div className="App">
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/sobre" component={ About } />
        <Route exact path="/conteudo" component={ NewsEditals } />
      </Switch>
  </AppProvider>
    </div>
  );
}

export default App;
