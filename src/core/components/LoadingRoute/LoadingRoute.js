import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';
import { auth } from '../../../firebase';

function LoadingRoute({ children, setCurrentUser }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    return auth.onAuthStateChanged(async (user) => {
      if (user) {
        setCurrentUser(user);
      }
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
