import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Task from './components/Task/Task';
import Tasker from './components/Tasker/Tasker';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute exact path="/" component={Tasker} />
              <PrivateRoute path="/task" component={Task} />
              <Route path="/signin" component={Signin} />
              <Route path="/register" component={Register} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
