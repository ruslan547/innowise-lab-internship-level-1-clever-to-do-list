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

  function readUserData() {
    const { uid } = currentUser;

    database.ref('users/'.concat(uid)).on(
      'value',
      (snapshot) => {
        const response = snapshot.val();
        if (response instanceof Object) {
          if (response.tasks) {
            // const parsedDate = JSON.parse(response.tasks);
            setTasks(response.tasks);
            console.log('respons=', response.tasks);
          }
        }
      },
      (error) => console.log('Error: '.concat(error.code)),
    );
  }

  function writeUserData() {
    const { uid } = currentUser;
    console.log('send=', { tasks });
    database.ref('users/'.concat(uid)).set({ tasks });
  }

  useEffect(() => {
    if (currentUser) {
      readUserData();
    }
  }, [currentUser]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
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
