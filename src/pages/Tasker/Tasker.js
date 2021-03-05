import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { offCallback, readUserData, signout } from '../../core/services/firebaseService';
import Calendar from './components/Calendar/Calendar';
import Alert from '../../core/components/Alert/Alert';
import './Tasker.scss';
import TaskList from './components/TaskList/TaskList';
import routeConstants from '../../core/constants/routeConstants';
import { startOfDay } from '../../core/date/date';

const { SIGNIN, TASK } = routeConstants;

function Tasker({
  currentTask,
  setCurrentTask,
  currentDate,
  setCurrentDate,
  currentTaskId,
  setCurrentTaskId,
  tasks,
  setTasks,
  currentUser,
  setAction,
}) {
  const [error, setError] = useState('');
  const history = useHistory();
  const initTask = {
    checked: false,
    title: 'Title',
    description: 'description',
    date: startOfDay(currentDate),
  };

  const handleSignout = async () => {
    setError('');

    try {
      await signout();
      offCallback(currentUser);
      history.push(SIGNIN);
    } catch ({ message }) {
      setError(message);
    }
  };

  const handleClick = () => {
    setAction('Save');
    setCurrentTask(initTask);
    history.push(TASK);
  };

  useEffect(() => {
    readUserData(currentUser).then((data) => setTasks(data));
  }, []);

  return (
    <div className="tasker">
      <div className="header">
        Tasker
        <button className="signout" type="button" onClick={handleSignout}>
          Sign out
        </button>
      </div>
      <Alert value={error} />
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} tasks={tasks} />
      <TaskList
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        tasks={tasks}
        setTasks={setTasks}
        currentUser={currentUser}
        setAction={setAction}
      />
      <button type="button" className="tasker__btn btn" onClick={handleClick}>
        + Add a New Task
      </button>
    </div>
  );
}

Tasker.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
  tasks: PropTypes.object,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
  currentTaskId: PropTypes.string,
  setCurrentTaskId: PropTypes.func,
  setAction: PropTypes.func,
};

export default Tasker;
