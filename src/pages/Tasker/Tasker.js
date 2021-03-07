/* eslint-disable prettier/prettier */
import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { offUserDate, onUserData, signout } from '../../core/services/firebaseService';
import Calendar from './components/Calendar/Calendar';
import Alert from '../../core/components/Alert/Alert';
import './Tasker.scss';
import TaskList from './components/TaskList/TaskList';
import routeConstants from '../../core/constants/routeConstants';
import { useApp } from '../../core/components/AppProvider/AppProvider';
import Loader from '../../core/components/Loader/Loader';

const { SIGNIN, TASK } = routeConstants;
const SAVE_ACTION = 'Save';

function Tasker() {
  const { setAction, currentUser, setTasks } = useApp();
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState('');
  const history = useHistory();
  console.log('tasker');

  const handleSignout = useCallback(async () => {
    setError('');

    try {
      await signout();
      history.push(SIGNIN);
    } catch ({ message }) {
      setError(message);
    }
  }, [history]);

  const handleClick = useCallback(() => {
    setAction(SAVE_ACTION);
    history.push(TASK);
  }, [history, setAction]);

  useEffect(() => {
    onUserData(currentUser)
      .then((response) => {
        setTasks(response);
        setLoading(false);
      });

    return () => offUserDate(currentUser);
  }, [currentUser, setTasks]);

  if (loading) {
    return <Loader />;
  }

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
