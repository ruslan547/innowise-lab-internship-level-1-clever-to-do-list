import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { readUserData, unsubscribe } from '../../services/firebaseService';

function LoadingRoute({ children, setTasks, setCurrentUser }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return unsubscribe((user) => {
      setCurrentUser(user);
      readUserData(user, setTasks);
      setLoading(false);
    });
  }, []);

  return loading ? <Loader /> : children;
}

LoadingRoute.propTypes = {
  children: PropTypes.node.isRequired,
  setTasks: PropTypes.func,
  setCurrentUser: PropTypes.func,
};

export default LoadingRoute;
