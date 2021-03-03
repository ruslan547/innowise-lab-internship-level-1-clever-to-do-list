import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import Tasker from './pages/Tasker/Tasker';
import TaskPage from './pages/TaskPage/TaskPage';
import { startOfDay } from './shared/date/date';
import routerConstants from './shared/constants/routeConstants';
import LoadingRoute from './components/LoadingRoute/LoadingRoute';

const { SIGNIN, REGISTER, TASKER, TASK } = routerConstants;

function App() {
  const [currentTask, setCurrentTask] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));
  const [currentUser, setCurrentUser] = useState();
  const [tasks, setTasks] = useState([]);

  return (
    <div className="wrapper">
      <div className="container">
        <Router basename={TASKER}>
          <LoadingRoute setTasks={setTasks} setCurrentUser={setCurrentUser}>
            <Switch>
              <PrivateRoute
                exact
                path={TASKER}
                component={Tasker}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                currentUser={currentUser}
                tasks={tasks}
                setTasks={setTasks}
              />
              <PrivateRoute
                path={TASK}
                component={TaskPage}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                tasks={tasks}
                setTasks={setTasks}
              />
              <Route path={SIGNIN} component={Signin} />
              <Route path={REGISTER} component={Register} />
            </Switch>
          </LoadingRoute>
        </Router>
      </div>
    </div>
  );
}

export default App;
