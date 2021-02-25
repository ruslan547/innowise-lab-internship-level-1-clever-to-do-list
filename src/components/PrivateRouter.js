import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ component: Component }) {
  const { currentUser } = useAuth();

  const render = () => {
    const component = <Component />;
    return currentUser ? component : <Redirect to="/signin" />;
  };

  return <Route render={render} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  task: PropTypes.object,
  setTask: PropTypes.func,
};
