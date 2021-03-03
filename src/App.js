import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import Tasker from './pages/Tasker/Tasker';
import TaskPage from './pages/TaskPage/TaskPage';
import { AuthProvider } from './contexts/AuthContext';
import { startOfDay } from './shared/date/date';
import routerConstants from './shared/constants/routeConstants';

const { SIGNIN, REGISTER, TASKER, TASK } = routerConstants;

function App() {
  const [currentTask, setCurrentTask] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));

  return (
    <div className="wrapper">
      <div className="container">
        <Router basename={TASKER}>
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path={TASKER}
                component={Tasker}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
              />
              <PrivateRoute
                path={TASK}
                component={TaskPage}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
              />
              <Route path={SIGNIN} component={Signin} />
              <Route path={REGISTER} component={Register} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;
