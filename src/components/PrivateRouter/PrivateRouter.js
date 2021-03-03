import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import routeConstants from '../../shared/constants/routeConstants';

const { SIGNIN } = routeConstants;

function PrivateRoute({
  component: Component,
  currentTask,
  setCurrentTask,
  currentDate,
  setCurrentDate,
}) {
  const { currentUser } = useAuth();

  const render = () => {
    const component = (
      <Component
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
    );
    return currentUser ? component : <Redirect to={SIGNIN} />;
  };

  return <Route render={render} />;
}

PrivateRoute.propTypes = {
  component: PropTypes.func,
  currentTask: PropTypes.object,
  setCurrentTask: PropTypes.func,
  currentDate: PropTypes.object,
  setCurrentDate: PropTypes.func,
};

export default PrivateRoute;
