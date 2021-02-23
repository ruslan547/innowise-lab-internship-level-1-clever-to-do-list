import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Router>
          <Switch>
            <Route exact path="/">
              <Signin />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/tassker">
              <div>Tassker</div>
            </Route>
            <Route path="/task">
              <div>Task</div>
            </Route>
            <Route>
              <div>404</div>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
