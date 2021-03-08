import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import routeConstants from '../../constants/routeConstants';
import { useApp } from '../AppProvider/AppProvider';

const { SIGNIN } = routeConstants;

function PrivateRoute({ component: Component }) {
  const { currentUser } = useApp();

  return <Route render={() => (currentUser ? <Component /> : <Redirect to={SIGNIN} />)} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.object,
};

export default React.memo(PrivateRoute);
