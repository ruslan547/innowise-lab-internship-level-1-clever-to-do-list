import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { readUserData, unsubscribe } from '../../services/firebaseService';

function LoadingRoute({ children, setTasks, setCurrentUser }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return unsubscribe(async (user) => {
      await setCurrentUser(user);
      await readUserData(user, setTasks);
      setLoading(false);
    });
  }, []);

  return loading ? <Loader /> : children;
}

LoadingRoute.propTypes = {
  children: PropTypes.node.isRequired,
  setTasks: PropTypes.func,
  setCurrentUser: PropTypes.func,
  currentUser: PropTypes.object,
};

export default LoadingRoute;
