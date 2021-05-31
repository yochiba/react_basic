import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navigation from './component/Navigation';
import Form from './component/Form';
import FormConfirm from './component/FormConfirm';

function App() {
  return (
    <div className="App">
      <Router>
        <Navigation/>
        <Switch>
          <Route exact path='/form' component={Form} />
          <Route exact path='/form-confirm' component={FormConfirm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
