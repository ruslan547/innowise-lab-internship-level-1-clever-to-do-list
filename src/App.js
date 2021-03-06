import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import Tasker from './pages/Tasker/Tasker';
import TaskPage from './pages/TaskPage/TaskPage';
import routerConstants from './core/constants/routeConstants';
import { AppProvider } from './core/components/AppProvider/AppProvider';

const { SIGNIN, REGISTER, TASKER, TASK } = routerConstants;

function App() {
  console.log('app');

  return (
    <div className="wrapper">
      <div className="container">
        <Router basename={TASKER}>
          <AppProvider>
            <Switch>
              <PrivateRoute exact path={TASKER} component={Tasker} />
              <PrivateRoute path={TASK} component={TaskPage} />
              <Route path={SIGNIN} component={Signin} />
              <Route path={REGISTER} component={Register} />
            </Switch>
          </AppProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
