import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signout } from '../../core/services/firebaseService';
import Calendar from './components/Calendar/Calendar';
import Alert from '../../core/components/Alert/Alert';
import './Tasker.scss';
import TaskList from './components/TaskList/TaskList';
import routeConstants from '../../core/constants/routeConstants';
import { useApp } from '../../core/components/AppProvider/AppProvider';

const { SIGNIN, TASK } = routeConstants;

function Tasker() {
  const { setAction } = useApp();

  const [error, setError] = useState('');
  const history = useHistory();
  console.log('tasker');

  const handleSignout = async () => {
    setError('');

    try {
      await signout();
      history.push(SIGNIN);
    } catch ({ message }) {
      setError(message);
    }
  };

  const handleClick = () => {
    setAction('Save');
    history.push(TASK);
  };

  // useEffect(() => {
  //   readUserData(currentUser).then((data) => setTasks(data));
  //   return () => offCallback(currentUser);
  // }, []);

  return (
    <div className="tasker">
      <div className="header">
        Tasker
        <button className="signout" type="button" onClick={handleSignout}>
          Sign out
        </button>
      </div>
      <Alert value={error} />
      <Calendar />
      <TaskList />
      <button type="button" className="tasker__btn btn" onClick={handleClick}>
        + Add a New Task
      </button>
    </div>
  );
}

export default Tasker;
