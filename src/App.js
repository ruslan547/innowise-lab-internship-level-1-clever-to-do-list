import { useState } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import { startOfDay } from 'date-fns';
import PrivateRoute from './core/components/PrivateRoute/PrivateRoute';
import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import Tasker from './pages/Tasker/Tasker';
import TaskPage from './pages/TaskPage/TaskPage';
import routerConstants from './core/constants/routeConstants';
import LoadingRoute from './core/components/LoadingRoute/LoadingRoute';

const { SIGNIN, REGISTER, TASKER, TASK } = routerConstants;

function App() {
  const [currentTask, setCurrentTask] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));
  const [currentUser, setCurrentUser] = useState();
  const [tasks, setTasks] = useState({});
  const [action, setAction] = useState();

  return (
    <div className="wrapper">
      <div className="container">
        <Router basename={TASKER}>
          <LoadingRoute
            setTasks={setTasks}
            setCurrentUser={setCurrentUser}
            currentUser={currentUser}
          >
            <Switch>
              <PrivateRoute
                exact
                path={TASKER}
                component={Tasker}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentTaskId={currentTaskId}
                setCurrentTaskId={setCurrentTaskId}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                currentUser={currentUser}
                tasks={tasks}
                setTasks={setTasks}
                setAction={setAction}
              />
              <PrivateRoute
                path={TASK}
                component={TaskPage}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentTaskId={currentTaskId}
                setCurrentTaskId={setCurrentTaskId}
                currentDate={currentDate}
                currentUser={currentUser}
                setCurrentUser={setCurrentUser}
                tasks={tasks}
                setTasks={setTasks}
                action={action}
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
