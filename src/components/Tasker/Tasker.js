import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Calendar from './Calendar/Calendar';
import Alert from '../UI/Alert/Alert';
import './Tasker.scss';
import TaskList from './TaskList/TaskList';

const fakeTasks = [
  {
    date: new Date('2018-01-26'),
    state: true,
    titele: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    titele: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    titele: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    titele: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    titele: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    titele: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    titele: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    titele: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    titele: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    titele: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    titele: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    titele: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    titele: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    titele: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    titele: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    titele: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    titele: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    titele: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    titele: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    titele: 'JS',
    text: 'sadldfdsgre',
  },
];

function Tasker() {
  const [error, setError] = useState(null);
  const { currentUser, signout } = useAuth();
  const history = useHistory();
  console.log(currentUser);

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
      <div className="list-title">{23} Tasks Today</div>
      <TaskList tasks={fakeTasks} />
      <button className="tasker__btn" type="button">
        + Add a New Task
      </button>
    </div>
  );
}

export default Tasker;
