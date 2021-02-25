import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Calendar from './Calendar/Calendar';
import Alert from '../UI/Alert/Alert';
import './Tasker.scss';
import TaskList from './TaskList/TaskList';
import { useDataBase } from '../../contexts/DataBaseContext';

const fakeTasks = [
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    title: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    title: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    title: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    title: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    title: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    title: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    title: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    title: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    title: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    title: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    title: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    title: 'JS',
    text: 'sadldfdsgre',
  },
  {
    date: new Date('2018-01-26'),
    state: true,
    title: 'task1',
    text: 'dhvhvdavdhvh',
  },
  {
    date: new Date('2017-01-26'),
    state: false,
    title: 'task2',
    text: 'sadlf2345gg',
  },
  {
    date: new Date('2019-12-26'),
    state: true,
    title: 'Java',
    text: 'sadlf453236',
  },
  {
    date: new Date('2019-01-26'),
    state: false,
    title: 'JS',
    text: 'sadldfdsgre',
  },
];

function Tasker() {
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState(null);
  const { signout } = useAuth();
  const { readUserData, writeUserData } = useDataBase();
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

  useEffect(async () => {
    try {
      await writeUserData([{ name: 'John' }, { name: 'Kate' }]);
      const respons = await readUserData();
      setTasks(() => respons.tasks);
      console.log(tasks);
    } catch {
      console.log('err');
    }
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
      <Calendar tasks={fakeTasks} />
      <div className="list-title">{23} Tasks Today</div>
      <TaskList tasks={fakeTasks} />
      <Link className="tasder__btn" to="/task" value="+ Add a New Task" />
      {/* <button className="tasker__btn" type="button">
      </button> */}
    </div>
  );
}

export default Tasker;
