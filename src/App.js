import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router';
import Index from './components/pages/Index/Index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Index } />
      </Switch>
    </div>
  );
}

export default App;
