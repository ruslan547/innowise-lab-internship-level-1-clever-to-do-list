import './Actions.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';
import routeConstants from '../../../../core/constants/routeConstants';
import {
  pushUserData,
  updateUserData,
  writeUserData,
} from '../../../../core/services/firebaseService';

const { TASKER } = routeConstants;
const SAVE_ACTION = 'Save';
const UPDATE_ACTION = 'Update';
const DELETE_ACTION = 'delete';

function Actions({ task }) {
  console.log('Actions');
  const history = useHistory();
  const { action, tasks, currentUser, currentTaskId, setCurrentTaskId, setCurrentTask } = useApp();

  const handleClick = ({ target: { name } }) => {
    if (name === SAVE_ACTION) {
      pushUserData(currentUser, { ...task });
    } else if (name === UPDATE_ACTION) {
      updateUserData(currentUser, { [currentTaskId]: { ...task } });
    } else if (name === DELETE_ACTION) {
      delete tasks[currentTaskId];
      writeUserData(currentUser, tasks);
    }

    setCurrentTask(null);
    setCurrentTaskId(null);
    history.push(TASKER);
  };

  return (
    <div className="actions">
      <button className="delete-btn btn" type="button" name="delete" onClick={handleClick}>
        Delete
      </button>
      <button className="save-btn btn" type="button" name={action} onClick={handleClick}>
        {action}
      </button>
    </div>
  );
}

Actions.propTypes = {
  task: PropTypes.object,
};

export default React.memo(Actions);
