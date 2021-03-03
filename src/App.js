import { useState } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';
import Register from './pages/Register/Register';
import Signin from './pages/Signin/Signin';
import Tasker from './pages/Tasker/Tasker';
import TaskPage from './pages/TaskPage/TaskPage';
import { AuthProvider } from './contexts/AuthContext';
import { startOfDay } from './date/date';

function App() {
  const [currentTask, setCurrentTask] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));

  return (
    <div className="wrapper">
      <div className="container">
        <HashRouter basename="/">
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Tasker}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
              />
              <PrivateRoute
                path="/task"
                component={TaskPage}
                currentTask={currentTask}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
              />
              <Route path="/signin" component={Signin} />
              <Route path="/register" component={Register} />
            </Switch>
          </AuthProvider>
        </HashRouter>
      </div>
    </div>
  );
}

export default App;
