import { createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import app from '../firebase';
import { useAuth } from './AuthContext';

const DataBaseContext = createContext();

export function useDataBase() {
  return useContext(DataBaseContext);
}

export function DataBaseProvider({ children }) {
  const { uid } = useAuth().currentUser;
  const rootRef = app.database().ref('users/'.concat(uid));

  function writeUserData(data) {
    rootRef.set({ tasks: data });
  }

  function readUserData() {
    let result;
    rootRef.on(
      'value',
      (snapshot) => {
        result = snapshot.val();
      },
      (error) => console.log('Error: '.concat(error.code)),
    );

    return result;
  }

  const value = {
    writeUserData,
    readUserData,
  };

  return <DataBaseContext.Provider value={value}>{children}</DataBaseContext.Provider>;
}

DataBaseProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
