import { createContext, useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import app from '../firebase';
import { useAuth } from './AuthContext';

const DataBaseContext = createContext();

export function useDataBase() {
  return useContext(DataBaseContext);
}

export function DataBaseProvider({ children }) {
  const [tasks, setTasks] = useState();
  const { uid } = useAuth().currentUser;
  const rootRef = app.database().ref('users/'.concat(uid));

  function writeUserData() {
    rootRef.set({ data: tasks });
  }

  async function readUserData() {
    rootRef.on(
      'value',
      (snapshot) => {
        const response = snapshot.val();
        setTasks(response.data);
      },
      (error) => console.log('Error: '.concat(error.code)),
    );
  }

  useEffect(() => {
    readUserData();
    const unsubscribe = () => {
      console.log('unsubcribe');
      writeUserData();
    };
    return unsubscribe;
  }, []);

  const value = {
    tasks,
    setTasks,
    writeUserData,
    readUserData,
  };

  return <DataBaseContext.Provider value={value}>{children}</DataBaseContext.Provider>;
}

DataBaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
