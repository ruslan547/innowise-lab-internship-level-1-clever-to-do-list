import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
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

function Tasker() {
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
      <Calendar tasks={fakeTasks} />
      <div className="list-title">{tasks.length} Tasks Today</div>
      <TaskList tasks={fakeTasks} />
      <Link className="tasker__link" to="/task">
        + Add a New Task
      </Link>
    </div>
  );
}

export default Tasker;
