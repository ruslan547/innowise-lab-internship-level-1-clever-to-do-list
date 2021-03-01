import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { auth, database } from '../firebase';
import Loader from '../components/UI/Loader/Loader';

const AuthContext = React.createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  function register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  function signout() {
    return auth.signOut();
  }

  function readUserData(user) {
    if (!user) {
      return;
    }
    database.ref('users/'.concat(user.uid)).once('value', (snapshot) => {
      const response = snapshot.val();
      if (response instanceof Object) {
        if (response.tasks) {
          const parsedData = JSON.parse(response.tasks, (key, value) => {
            if (key === 'date') return new Date(value);
            return value;
          });
          setTasks(parsedData);
        }
      }
    });
  }

  function writeUserData() {
    const { uid } = currentUser;
    const jsonStr = JSON.stringify(tasks);
    database.ref('users/'.concat(uid)).set({ tasks: jsonStr });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      readUserData(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    tasks,
    currentUser,
    setTasks,
    signin,
    register,
    signout,
    readUserData,
    writeUserData,
  };

  return (
    <AuthContext.Provider value={value}>{loading ? <Loader /> : children}</AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
