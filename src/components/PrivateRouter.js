import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function PrivateRoute({ component: Component }) {
  const { currentUser } = useAuth();
  console.log(currentUser);

  return (
    <Route
      render={() => {
        return currentUser ? <Component /> : <Redirect to="/signin" />;
      }}
    />
  );
}

PrivateRoute.propTypes = {
  component: PropTypes.object,
};
