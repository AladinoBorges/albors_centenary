import { Switch, Route } from 'react-router-dom';
import AppProvider from './context/AppProvider';

import Home from './pages/Home';
import About from './pages/About';

import 'bulma/css/bulma.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
    <AppProvider>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/about" component={ About } />
      </Switch>
  </AppProvider>
    </div>
  );
}

export default App;
