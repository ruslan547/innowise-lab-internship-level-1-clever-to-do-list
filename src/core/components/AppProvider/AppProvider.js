import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { startOfDay } from 'date-fns';
import Loader from '../Loader/Loader';
import { auth } from '../../../firebase';
import actionConstants from '../../constants/actionConstants';

const { SAVE } = actionConstants;
const AppContext = React.createContext();

export function useApp() {
  return useContext(AppContext);
}

function AppProvider({ children }) {
  const [loading, setLoading] = useState(true);
  const [currentTask, setCurrentTask] = useState(null);
  const [currentTaskId, setCurrentTaskId] = useState();
  const [currentDate, setCurrentDate] = useState(startOfDay(new Date()));
  const [currentUser, setCurrentUser] = useState();
  const [tasks, setTasks] = useState({});
  const [action, setAction] = useState(SAVE);
  const scrollElemRef = useRef(null);

  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        setCurrentUser(user);
      }
      setLoading(false);
    });
  }, []);

  const value = {
    currentTask,
    setCurrentTask,
    currentTaskId,
    setCurrentTaskId,
    currentDate,
    setCurrentDate,
    currentUser,
    setCurrentUser,
    tasks,
    setTasks,
    action,
    setAction,
    scrollElemRef,
  };

  return <AppContext.Provider value={value}>{loading ? <Loader /> : children}</AppContext.Provider>;
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
