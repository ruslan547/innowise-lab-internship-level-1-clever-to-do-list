import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';
import Calendar from './Calendar/Calendar';
import Alert from '../UI/Alert/Alert';
import './Tasker.scss';
import TaskList from './TaskList/TaskList';

const fakeTasks = [
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
];

function Tasker({ currentTask, setCurrentTask, currentDate, setCurrentDate, toDay }) {
  const [error, setError] = useState(null);
  const { signout, tasks } = useAuth();
  const history = useHistory();

  const handleSignout = async () => {
    setError(null);

    try {
      await signout();
      history.push('/signin');
    } catch {
      setError('Failed to log out');
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
      <Calendar
        tasks={fakeTasks}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        toDay={toDay}
      />
      <div className="list-title">{tasks.length} Tasks Today</div>
      <TaskList
        tasks={fakeTasks}
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      <Link className="tasker__link" to="/task">
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
  toDay: PropTypes.object,
};

export default Tasker;
