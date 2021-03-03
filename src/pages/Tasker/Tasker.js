import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { signout } from '../../services/firebaseService';
import Calendar from '../../components/Calendar/Calendar';
import Alert from '../../components/Alert/Alert';
import './Tasker.scss';
import TaskList from '../../components/TaskList/TaskList';
import routeConstants from '../../shared/constants/routeConstants';

const { SIGNIN, TASK } = routeConstants;

function Tasker({
  currentTask,
  setCurrentTask,
  currentDate,
  setCurrentDate,
  tasks,
  setTasks,
  currentUser,
}) {
  const [error, setError] = useState('');
  const history = useHistory();

  const handleSignout = async () => {
    setError('');

    try {
      await signout();
      history.push(SIGNIN);
    } catch ({ message }) {
      setError(message);
    }
  };

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
        tasks={tasks}
        setTasks={setTasks}
        currentUser={currentUser}
      />
      <Link className="tasker__link" to={TASK}>
        + Add a New Task
      </Link>
    </div>
  );
}

Tasker.propTypes = {
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
  currentUser: PropTypes.object,
};

export default Tasker;
