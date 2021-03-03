import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useAuth } from '../../contexts/AuthContext';
import Calendar from '../../components/Calendar/Calendar';
import Alert from '../../components/Alert/Alert';
import './Tasker.scss';
import TaskList from '../../components/TaskList/TaskList';

function Tasker({ currentTask, setCurrentTask, currentDate, setCurrentDate }) {
  const [error, setError] = useState('');
  const { signout } = useAuth();
  const history = useHistory();

  const handleSignout = async () => {
    setError('');

    try {
      await signout();
      history.push('/signin');
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
      <Calendar currentDate={currentDate} setCurrentDate={setCurrentDate} />
      <TaskList
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
};

export default Tasker;
