import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.scss';
import PrivateRoute from './components/PrivateRouter';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import Tasker from './components/Tasker/Tasker';
import TaskPage from './components/TaskPage/TaskPage';
import { AuthProvider } from './contexts/AuthContext';
import { DataBaseProvider } from './contexts/DataBaseContext';

function App() {
  const [tasks, setTasks] = useState(null);
  // const [currentTask, setCurrentTask] = useState(null);

  return (
    <div className="wrapper">
      <div className="container">
        <Router>
          <AuthProvider>
            <Switch>
              <DataBaseProvider>
                <PrivateRoute exact path="/" component={Tasker} tasks={tasks} setTasks={setTasks} />
                <PrivateRoute path="/task" component={TaskPage} />
              </DataBaseProvider>
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
