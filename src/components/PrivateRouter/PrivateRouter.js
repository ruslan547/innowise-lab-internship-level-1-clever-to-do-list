import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import routeConstants from '../../shared/constants/routeConstants';

const { SIGNIN } = routeConstants;

function PrivateRoute({
  component: Component,
  currentTask,
  setCurrentTask,
  currentDate,
  setCurrentDate,
  currentUser,
  tasks,
  setTasks,
}) {
  const render = () => {
    const component = (
      <Component
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        currentUser={currentUser}
        tasks={tasks}
        setTasks={setTasks}
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
  currentUser: PropTypes.object,
  tasks: PropTypes.array,
  setTasks: PropTypes.func,
};

export default PrivateRoute;
