import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Tasker from './components/Tasker/Tasker';
import TaskPage from './components/TaskPage/TaskPage';
import { AuthProvider } from './contexts/AuthContext';
import { startOfDay } from './libraries/date';

function App() {
  const [toDay] = useState(startOfDay(new Date()));
  const [currentTask, setCurrentTask] = useState(null);
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));

  console.log(toDay);
  return (
    <div className="wrapper">
      <div className="container">
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute
                exact
                path="/"
                component={Tasker}
                setCurrentTask={setCurrentTask}
                currentDate={currentDate}
                setCurrentDate={setCurrentDate}
                toDay={toDay}
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
        </Router>
      </div>
    </div>
  );
}

export default App;
