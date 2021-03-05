import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';
import routeConstants from '../../constants/routeConstants';

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
  currentTaskId,
  setCurrentTaskId,
  setAction,
  action,
}) {
  const render = () => {
    const component = (
      <Component
        currentTask={currentTask}
        setCurrentTask={setCurrentTask}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
        currentTaskId={currentTaskId}
        setCurrentTaskId={setCurrentTaskId}
        currentUser={currentUser}
        tasks={tasks}
        setTasks={setTasks}
        action={action}
        setAction={setAction}
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
  tasks: PropTypes.object,
  setTasks: PropTypes.func,
  currentTaskId: PropTypes.string,
  setCurrentTaskId: PropTypes.func,
  action: PropTypes.string,
  setAction: PropTypes.func,
};

export default PrivateRoute;
