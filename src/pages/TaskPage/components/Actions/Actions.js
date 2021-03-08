import './Actions.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router';
import scrollIntoView from 'scroll-into-view-if-needed';
import { useApp } from '../../../../core/components/AppProvider/AppProvider';
import routeConstants from '../../../../core/constants/routeConstants';
import actionConstants from '../../../../core/constants/actionConstants';
import {
  pushUserData,
  updateUserData,
  writeUserData,
} from '../../../../core/services/firebaseService';

const { TASKER } = routeConstants;
const { SAVE, UPDATE, DELETE } = actionConstants;
const DELAY = 500;

function Actions({ task }) {
  const history = useHistory();
  const {
    scrollElemRef,
    action,
    tasks,
    currentUser,
    currentTaskId,
    setCurrentTaskId,
    setCurrentTask,
  } = useApp();

  const handleClick = ({ target: { name } }) => {
    if (name === SAVE) {
      pushUserData(currentUser, { ...task });
    } else if (name === UPDATE) {
      updateUserData(currentUser, { [currentTaskId]: { ...task } });
    } else if (name === DELETE) {
      delete tasks[currentTaskId];
      writeUserData(currentUser, tasks);
    }

    setCurrentTask(null);
    setCurrentTaskId(null);
    history.push(TASKER);
    setTimeout(() => {
      const { current } = scrollElemRef;
      if (current) {
        scrollIntoView(current, { block: 'center', inline: 'center' });
      }
    }, DELAY);
  };

  return (
    <div className="actions">
      <button className="delete-btn btn" type="button" name={DELETE} onClick={handleClick}>
        {DELETE}
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
